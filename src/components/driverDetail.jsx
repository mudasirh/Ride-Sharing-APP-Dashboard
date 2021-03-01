import React, {Component} from "react";
import Pagination from "../components/common/pagination";
import _ from "lodash";
import TableHeader from "./common/tableHeader";
import Firebase from "../utils/firebase";
import Paginate from "../utils/paginate";

class DriverDetails extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    sortColumn: {column: "name", order: "asc"},
    searchUserTable: "",
    searchFilter: "name",
  };

  columns = [
    {path: "name", label: "name"},
    {path: "age", label: "age"},
    {path: "address", label: "address"},
    {path: "cnic", label: "cnic"},
    {path: "license_No", label: "License"},
    {path: "Status", label: "Status"},
    {key: "action", label: "Action"},
  ];

  driverSearch = [
    {key: "name", label: "By Name"},
    {key: "email", label: "By Email"},
    {key: "password", label: "Password"},
  ];

  handleSort = (column, order) => {
    this.setState({sortColumn: {column, order: order}});
  };
  handleDeleteDriver = (user) => {
    const firebaseDB = Firebase.database();
    const firebaseUsersRef = firebaseDB.ref("Users");
    firebaseUsersRef.child(user._id).child("DriverProfile").remove();

    if (
      Paginate(this.props.users, this.state.currentPage, this.state.pageSize)
        .length <= 1
    ) {
      let currentPage = this.state.currentPage;
      this.setState({currentPage: --currentPage});
    }
  };
  render() {
    const {users, onUpdateDriver} = this.props;
    const {length} = this.props.users;

    if (length === 0) return <p>Loading</p>;
    else {
      return (
        <div className='body-content'>
          <div className='card' style={{}}>
            <div className='card-header border-0'>
              <div className='row align-items-center'>
                <div className='col'>
                  <h2 className='mb-0'>Driver Details</h2>
                  <h5>Showing {length} record from the Database.</h5>
                </div>
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table align-items-center'>
                <TableHeader
                  columns={this.columns}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                />

                <tbody>
                  {users
                    .filter((user) => "DriverProfile" in user)
                    .map((user) => {
                      return (
                        <tr key={user._id}>
                          <td>{user.DriverProfile.name}</td>
                          <td>{user.DriverProfile.age}</td>
                          <td>{user.DriverProfile.address}</td>
                          <td>{user.DriverProfile.license_No}</td>
                          <td>{user.DriverProfile.cnic}</td>
                          <td>
                            <span className='badge badge-dot mr-4'>
                              <i
                                className={
                                  user.DriverProfile.Status["DriverStatus"] !==
                                    undefined &&
                                  user.DriverProfile.Status["DriverStatus"] ===
                                    "Riding"
                                    ? "bg-success"
                                    : "bg-danger"
                                }
                              ></i>
                              {user.DriverProfile.Status["DriverStatus"] ===
                              undefined
                                ? "N/A"
                                : user.DriverProfile.Status[
                                    "DriverStatus"
                                  ]}{" "}
                            </span>
                          </td>
                          <td>
                            <div className='dropdown'>
                              <a
                                className='btn btn-sm btn-icon-only text-light'
                                href='#'
                                data-toggle='dropdown'
                              >
                                <i className='fas fa-ellipsis-v'></i>
                              </a>
                              <div className='dropdown-menu dropdown-menu-right dropdown-menu-arrow'>
                                <a
                                  onClick={() => onUpdateDriver(user)}
                                  className='dropdown-item'
                                  href='#'
                                >
                                  Update
                                </a>
                                <a
                                  onClick={() => this.handleDeleteDriver(user)}
                                  className='dropdown-item'
                                  href='#'
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination />
        </div>
      );
    }
  }
}

export default DriverDetails;
