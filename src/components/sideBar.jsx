/* eslint-disable jsx-a11y/anchor-is-valid */
import UserDetails from "./userDetails";
import DriverProfile from "./driverProfile";
import UserModal from "./UserModal";
import DriversDetails from "./driverDetail";
import Dashboard from "./dashboard";

const SideBar = (props) => {
  const {
    users,
    onDriverDetails,
    currentUser,
    onUpdateUser,
    onCloseModal,
    updateUserModal,
    onChangeUpdateUser,
    updateUserData,
    onUpdatedUserSubmit,
    updateUserErrorMsg,
    onDeleteDriver,
    onUpdateDriver,
  } = props;
  return (
    <main className='container-fluid vertical-sBar'>
      <div className='d-flex align-items-start vertical-sidebar'>
        <div
          className='nav flex-column nav-pills me-3 container-vertical-sidebar'
          id='v-pills-tab'
        >
          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-dashboard'
          >
            <div className='vertical-sidebar-tab'>Dashboard</div>
          </a>
          <a
            className='nav-link active'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-user-details'
          >
            <div className='vertical-sidebar-tab'>User Details</div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-driver-details'
          >
            <div className='vertical-sidebar-tab'>Drivers Details</div>
          </a>
          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-active-rides'
          >
            <div className='vertical-sidebar-tab'>Active Rides</div>
          </a>
          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-statistics'
          >
            <div className='vertical-sidebar-tab'>Statistics</div>
          </a>
          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-setting'
          >
            <div className='vertical-sidebar-tab'>Setting</div>
          </a>
          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-setting'
          >
            <div className='vertical-sidebar-tab'>Lorem Ipsum</div>
          </a>
          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-setting'
          >
            <div className='vertical-sidebar-tab'>Lorem Ipsum</div>
          </a>
        </div>

        {/* Content */}
        <div
          className='tab-content vertical-sidebar-content sidebar-container'
          id='v-pills-tabContent'
        >
          {/* User Details */}
          <div
            className='tab-pane fade show active vertical-sidebar-item'
            id='v-pills-user-details'
          >
            <UserDetails
              users={users}
              onDriverDetails={onDriverDetails}
              onUpdateUser={onUpdateUser}
            />

            <DriverProfile currentUser={currentUser} />
            <UserModal
              updateUserModal={updateUserModal}
              onCloseModal={onCloseModal}
              onChangeUpdateUser={onChangeUpdateUser}
              updateUserData={updateUserData}
              onUpdatedUserSubmit={onUpdatedUserSubmit}
              errorMsg={updateUserErrorMsg}
            />
          </div>

          {/* Drivers */}
          <div
            className='tab-pane fade vertical-sidebar-item'
            id='v-pills-driver-details'
          >
            <DriversDetails
              users={users}
              onDeleteDriver={onDeleteDriver}
              onUpdateDriver={onUpdateDriver}
            />
          </div>
          <div
            className='tab-pane fade vertical-sidebar-item '
            id='v-pills-dashboard'
          >
            <Dashboard users={users} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
