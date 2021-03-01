import React, {Component} from "react";

class Dashboard extends Component {
  state = {totalRides: 0};

  componentDidMount() {
    let total = 0;
    const users = [...this.props.users];

    console.log(this.props.users);

    if (users.length !== 0) {
      users.forEach((user) => {
        if (user.DriverProfile !== undefined) {
          if (user.DriverProfile.Status.DriverStatus === "Riding") total += 1;
        }
      });
      this.setState({totalRides: total});
    }
  }

  render() {
    return (
      <div className='dashboard-container bg-primary'>
        <div className='header bg-primary pb-6'>
          <div className='container-fluid'>
            <div className='header-body'>
              <div className='row align-items-center py-4'>
                <h3 className='col-lg-6 col-5' style={{color: "white"}}>
                  Live
                </h3>
              </div>
              {/* <!-- Card stats --> */}
              <div className='row'>
                <div className='col-xl-4 col-md-6'>
                  <div className='card card-stats'>
                    {/* <!-- Card body --> */}
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col'>
                          <h5 className='card-title text-uppercase text-muted mb-0'>
                            Active Rides
                          </h5>
                          <span className='h2 font-weight-bold mb-0'>
                            {this.state.totalRides}
                          </span>
                        </div>
                      </div>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>
                          <i className='fa fa-arrow-up'></i> 0.00%
                        </span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='card card-stats'>
                    {/* <!-- Card body --> */}
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col'>
                          <h5 className='card-title text-uppercase text-muted mb-0'>
                            Total Revenue
                          </h5>
                          <span className='h2 font-weight-bold mb-0'>
                            2,356
                          </span>
                        </div>
                      </div>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>
                          <i className='fa fa-arrow-up'></i> 0.00%
                        </span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='card card-stats'>
                    {/* <!-- Card body --> */}
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col'>
                          <h5 className='card-title text-uppercase text-muted mb-0'>
                            Pending Approval
                          </h5>
                          <span className='h2 font-weight-bold mb-0'>924</span>
                        </div>
                        <div className='col-auto'></div>
                      </div>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>
                          <i className='fa fa-arrow-up'></i> 0.00%
                        </span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='card card-stats'>
                    {/* <!-- Card body --> */}
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col'>
                          <h5 className='card-title text-uppercase text-muted mb-0'>
                            Total Vehicles
                          </h5>
                          <span className='h2 font-weight-bold mb-0'>10</span>
                        </div>
                        <div className='col-auto'></div>
                      </div>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>
                          <i className='fa fa-arrow-up'></i> 0.00%
                        </span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
