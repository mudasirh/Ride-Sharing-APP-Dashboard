import React, {Component} from "react";

class Login extends Component {
  state = {};
  render() {
    const {onLoginSubmit, onAdminInputChange, adminCredentials} = this.props;
    return (
      <React.Fragment>
        <div className='bg-default'>
          <nav
            id='navbar-main'
            className='navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light'
          >
            <div className='container'>
              <a className='navbar-brand' href='dashboard.html'>
                Ride Sharing APP
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbar-collapse'
                aria-controls='navbar-collapse'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='navbar-collapse navbar-custom-collapse collapse'
                id='navbar-collapse'
              >
                <div className='navbar-collapse-header'>
                  <div className='row'>
                    <div className='col-6 collapse-brand'>
                      <a href='dashboard.html'>Ride Sharing APP</a>
                    </div>
                    <div className='col-6 collapse-close'>
                      <button
                        type='button'
                        className='navbar-toggler'
                        data-toggle='collapse'
                        data-target='#navbar-collapse'
                        aria-controls='navbar-collapse'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                      >
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>

                <ul className='navbar-nav align-items-lg-center ml-lg-auto'>
                  <li className='nav-item'>
                    <a
                      className='nav-link nav-link-icon'
                      href='https://www.facebook.com/creativetim'
                      target='_blank'
                      data-toggle='tooltip'
                      data-original-title='Like us on Facebook'
                    >
                      <i className='fab fa-facebook-square'></i>
                      <span className='nav-link-inner--text d-lg-none'>
                        Facebook
                      </span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link nav-link-icon'
                      href='https://www.instagram.com/creativetimofficial'
                      target='_blank'
                      data-toggle='tooltip'
                      data-original-title='Follow us on Instagram'
                    >
                      <i className='fab fa-instagram'></i>
                      <span className='nav-link-inner--text d-lg-none'>
                        Instagram
                      </span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link nav-link-icon'
                      href='https://twitter.com/creativetim'
                      target='_blank'
                      data-toggle='tooltip'
                      data-original-title='Follow us on Twitter'
                    >
                      <i className='fab fa-twitter-square'></i>
                      <span className='nav-link-inner--text d-lg-none'>
                        Twitter
                      </span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link nav-link-icon'
                      href='https://github.com/creativetimofficial'
                      target='_blank'
                      data-toggle='tooltip'
                      data-original-title='Star us on Github'
                    >
                      <i className='fab fa-github'></i>
                      <span className='nav-link-inner--text d-lg-none'>
                        Github
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className='main-content'>
            {/* <!-- Header --> */}
            <div className='header bg-gradient-primary py-7 py-lg-8 pt-lg-9'>
              <div className='container'>
                <div className='header-body text-center mb-7'>
                  <div className='row justify-content-center'>
                    <div className='col-xl-5 col-lg-6 col-md-8 px-5'>
                      <h1 className='text-white'>Welcome!</h1>
                      <p className='text-lead text-white'>
                        To the Ride sharing App dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='separator separator-bottom separator-skew zindex-100'>
                <svg
                  x='0'
                  y='0'
                  viewBox='0 0 2560 100'
                  preserveAspectRatio='none'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <polygon
                    className='fill-default'
                    points='2560 0 2560 100 0 100'
                  ></polygon>
                </svg>
              </div>
            </div>
            {/* <!-- Page content --> */}
            <div className='container mt--8 pb-5'>
              <div className='row justify-content-center'>
                <div className='col-lg-5 col-md-7'>
                  <div className='card bg-secondary border-0 mb-0'>
                    <div className='card-header bg-transparent pb-5'>
                      <div className='text-muted text-center mt-2 mb-3'>
                        <h2>Sign In to Admin Dashboard</h2>
                      </div>
                    </div>
                    <div className='card-body px-lg-5 py-lg-5'>
                      <div className='text-center text-muted mb-4'>
                        <small>sign in with credentials</small>
                      </div>
                      <form role='form' onSubmit={onLoginSubmit}>
                        <div className='form-group mb-3'>
                          <div className='input-group input-group-merge input-group-alternative'>
                            <div className='input-group-prepend'>
                              <span className='input-group-text'>
                                <i className='ni ni-email-83'></i>
                              </span>
                            </div>
                            <input
                              onChange={onAdminInputChange}
                              className='form-control'
                              placeholder='Email'
                              type='email'
                              value={adminCredentials.email}
                              name='email'
                            />
                          </div>
                        </div>
                        <div className='form-group'>
                          <div className='input-group input-group-merge input-group-alternative'>
                            <div className='input-group-prepend'>
                              <span className='input-group-text'>
                                <i className='ni ni-lock-circle-open'></i>
                              </span>
                            </div>
                            <input
                              onChange={onAdminInputChange}
                              className='form-control'
                              placeholder='Password'
                              type='password'
                              name='password'
                              value={adminCredentials.password}
                            />
                          </div>
                        </div>
                        <div className='custom-control custom-control-alternative custom-checkbox'>
                          <input
                            className='custom-control-input'
                            id=' customCheckLogin'
                            type='checkbox'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor=' customCheckLogin'
                          >
                            {/* <span className='text-muted'>Remember me</span> */}
                          </label>
                        </div>
                        <div className='text-center'>
                          <button
                            type='submit'
                            className='btn btn-primary my-4'
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-6'>
                      <a href='#' className='text-light'>
                        {/* <small>Forgot password?</small> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
