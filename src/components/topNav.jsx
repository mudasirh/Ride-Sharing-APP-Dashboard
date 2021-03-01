/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = ({onLogout}) => {
  return (
    <nav className='navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom'>
      <div className='container-fluid'>
        <ul className='navbar-nav align-items-center  ml-md-auto '>
          <li>
            <a className='nav-link' href='#'>
              <div className='vertical-sidebar-tab logo'>Ride Sharing App</div>
            </a>
          </li>
        </ul>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav align-items-center  ml-md-auto '>
            <li className='nav-item dropdown'>
              <a className='nav-link' href='#' data-toggle='dropdown'>
                <i className='ni ni-bell-55'></i>
              </a>
            </li>
          </ul>

          {/* Profile */}

          <ul className='navbar-nav align-items-center  ml-auto ml-md-0 '>
            <li className='nav-item dropdown'>
              <a className='nav-link pr-0' href='#' data-toggle='dropdown'>
                <div className='media align-items-center'>
                  <span className='avatar avatar-sm rounded-circle'>
                    <img
                      alt='Image placeholder'
                      src='../assets/img/theme/team-4.jpg'
                    />
                  </span>
                  <div className='media-body  ml-2  d-none d-lg-block'>
                    <span className='mb-0 text-sm  font-weight-bold'>
                      Johnny Depp
                    </span>
                  </div>
                </div>
              </a>
              <div className='dropdown-menu  dropdown-menu-right '>
                <div className='dropdown-header'>
                  <h6 className='text-overflow m-0'>Welcome!</h6>
                </div>
                <a href='#!' className='dropdown-item'>
                  <i className='ni ni-single-02'></i>
                  <span>My profile</span>
                </a>
                <a href='#!' className='dropdown-item'>
                  <i className='ni ni-settings-gear-65'></i>
                  <span>Settings</span>
                </a>
                <a href='#!' className='dropdown-item'>
                  <i className='ni ni-calendar-grid-58'></i>
                  <span>Activity</span>
                </a>
                <a href='#!' className='dropdown-item'>
                  <i className='ni ni-support-16'></i>
                  <span>Support</span>
                </a>
                <div className='dropdown-divider'></div>
                <a onClick={onLogout} href='#!' className='dropdown-item'>
                  <i className='ni ni-user-run'></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
