const DriverProfile = (props) => {
  if (props.currentUser === undefined) return "";
  else {
    const {DriverProfile: user} = props.currentUser;
    return (
      <div className='row body-content'>
        <div className='col'>
          <div className='card'>
            <div className='card-header border-0'>
              <div className='row align-items-center'>
                <div className='col'>
                  <h3 className='mb-0'>Driver Profile</h3>
                </div>
              </div>
            </div>
            <div className='table-responsive'>
              <div>
                <table className='table align-items-center'>
                  <thead className='thead-light'>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>CNIC</th>
                      <th>License No</th>
                      <th>Driver Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.address}</td>
                      <td>{user.license_No}</td>
                      <td>{user.cnic}</td>
                      <td>
                        <span className='badge badge-dot mr-4'>
                          <i
                            className={
                              user.Status.DriverStatus === "Riding"
                                ? "bg-success"
                                : user.Status.DriverStatus === undefined
                                ? ""
                                : "bg-danger"
                            }
                          ></i>
                          <span className='status'>
                            {user.Status.DriverStatus === undefined
                              ? "not available"
                              : user.Status.DriverStatus}
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DriverProfile;
