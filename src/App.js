import React, {Component} from "react";
import Firebase from "./utils/firebase";
import "./App.css";
import SideBar from "./components/sideBar";
import NavBar from "./components/topNav";
import Login from "./components/login";
import {Route} from "react-router-dom";

class App extends Component {
  state = {
    users: [],
    currentUser: undefined,

    updateUserModal: {user: undefined, show: false},
    updateUserData: {},
    updateUserDataPrev: {},
    updateUserErrorMsg: "",
    adminCredentials: {email: "", password: ""},
    loginFlag: true,
  };

  componentDidMount() {
    // Getting firebase reference i-e Users is node name

    // getting users
    const firebaseDB = Firebase.database();
    const firebaseUsersRef = firebaseDB.ref("Users");

    // Snapshot contains snapshot of whole DB
    firebaseUsersRef.on("value", (snapshot) => {
      const users = [];

      // .on callback event extract the contents of the snapshot as a JavaScript object
      const dataParentObject = snapshot.val();

      for (let id in dataParentObject) {
        dataParentObject[id]._id = id;
        users.push(dataParentObject[id]);
      }
      this.setState({users});
    });

    // getting Active Rides
    const firebaseActiveRidesRef = firebaseDB.ref("Active Rides");

    // Snapshot contains snapshot of whole DB
    firebaseActiveRidesRef.on("value", (snapshot) => {
      const activeRides = [];

      // .on callback event extract the contents of the snapshot as a JavaScript object
      const dataParentObject = snapshot.val();
      for (let id in dataParentObject) {
        dataParentObject[id]._id = id;
        activeRides.push(dataParentObject[id]);
      }
      this.setState({activeRides});
    });
  }

  handleDriverDetails = (currentUser) => this.setState({currentUser});

  handleUpdateUser = (user) => {
    this.setState({updateUserModal: {user, show: true}});
    this.setState({updateUserData: user});
    this.setState({updateUserDataPrev: user});
  };

  handleCloseModal = () => {
    this.setState({updateUserModal: {user: undefined, show: false}});
    this.setState({updateUserErrorMsg: ""});
  };

  handleChangeUpdateUser = ({currentTarget}) => {
    const updateUserData = {...this.state.updateUserData};
    updateUserData[currentTarget.name] = currentTarget.value;
    this.setState({updateUserData});
  };
  handleUpdatedUserSubmit = () => {
    if (this.state.updateUserData !== this.state.updateUserDataPrev) {
      this.setState({updateUserErrorMsg: ""});

      const updateUser = {...this.state.updateUserData};
      delete updateUser._id;
      const firebaseDB = Firebase.database();
      const firebaseUsersRef = firebaseDB.ref("Users");

      firebaseUsersRef.child(this.state.updateUserData._id).set(updateUser);
      this.setState({updateUserModal: {user: undefined, show: false}});
    } else {
      this.setState({
        updateUserErrorMsg:
          "Minimum one  field need to update for updating DB.",
      });
    }
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();

    // Getting firebase reference i-e Users is node name

    // getting users
    const firebaseDB = Firebase.database();
    const firebaseUsersRef = firebaseDB.ref("Admin");

    // Snapshot contains snapshot of whole DB
    firebaseUsersRef.on("value", (snapshot) => {
      // .on callback event extract the contents of the snapshot as a JavaScript object
      const adminCredentials = snapshot.val();
      if (
        adminCredentials.email === this.state.adminCredentials.email &&
        adminCredentials.password === this.state.adminCredentials.password
      ) {
        this.setState({loginFlag: true});
      }
    });
  };

  handleAdminInputChange = ({currentTarget}) => {
    const adminCredentials = {...this.state.adminCredentials};
    adminCredentials[currentTarget.name] = currentTarget.value;
    this.setState({adminCredentials});
  };
  handleLogout = () => {
    this.setState({loginFlag: false});
  };
  render() {
    // console.log(this.state.updateUserData);
    // console.log(this.state.updateUserDataPrev);

    console.log(this.state.loginFlag);
    return (
      <React.Fragment>
        {this.state.loginFlag === true ? (
          <NavBar onLogout={this.handleLogout} />
        ) : (
          ""
        )}

        <Route
          path='/'
          exact
          render={
            this.state.loginFlag === false
              ? (props) => (
                  <Login
                    onLoginSubmit={this.handleLoginSubmit}
                    onAdminInputChange={this.handleAdminInputChange}
                    adminCredentials={this.state.adminCredentials}
                    {...props}
                  ></Login>
                )
              : (props) => (
                  <SideBar
                    users={this.state.users}
                    onDriverDetails={this.handleDriverDetails}
                    currentUser={this.state.currentUser}
                    onCloseModal={this.handleCloseModal}
                    updateUserModal={this.state.updateUserModal}
                    onUpdateUser={this.handleUpdateUser}
                    onChangeUpdateUser={this.handleChangeUpdateUser}
                    updateUserData={this.state.updateUserData}
                    onUpdatedUserSubmit={this.handleUpdatedUserSubmit}
                    updateUserErrorMsg={this.state.updateUserErrorMsg}
                    {...props}
                  />
                )
          }
        />
      </React.Fragment>
    );
  }
}

export default App;
