import React, {Component} from "react";
import Pagination from "../components/common/pagination";
import _ from "lodash";
import TableHeader from "./common/tableHeader";
import Firebase from "../utils/firebase";
import Paginate from "../utils/paginate";
import SearchFilter from "../utils/searchFilter";
import Search from "./common/search";

class DriverDetails extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    sortColumn: {column: "name", order: "asc"},
    searchUserTable: "",
    searchFilter: "name",
  };

  columns = [
    {path: "name", label: "name", sort: true},
    {path: "age", label: "age", sort: true},
    {path: "address", label: "address", sort: true},
    {path: "cnic", label: "cnic", sort: true},
    {path: "license_No", label: "License", sort: true},
    {path: "Status", label: "Status", sort: false},
    {key: "action", label: "Action", sort: false},
  ];

  driverSearch = [
    {key: "name", label: "By Name"},
    {key: "age", label: "Age"},
    {key: "address", label: "Adress"},
    // {key: "cnic", label: "CNIC"},
    // {key: "license_No", label: "License"},
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

  filteredDrivers = () => {
    const {users} = this.props;
    const {pageSize, currentPage, searchUserTable} = this.state;

    const sortedUsers = _.orderBy(
      users,
      [this.state.sortColumn.column],
      this.state.sortColumn.order
    );

    let usersSearchFilter = [];
    for (let id in users) {
      users[id].DriverProfile &&
        usersSearchFilter.push(users[id].DriverProfile);
    }

    let searchFiltered = sortedUsers;
    if (searchUserTable) {
      searchFiltered = SearchFilter(
        usersSearchFilter,
        this.state.searchFilter,
        searchUserTable
      );
    }

    const paginatedUsers = Paginate(searchFiltered, currentPage, pageSize);
    return {data: paginatedUsers};
  };
  handlePageChange = (page) => {
    this.setState({currentPage: page});
  };
  handleDriverSearch = ({currentTarget}) => {
    const searchUserTable = currentTarget.value;
    this.setState({searchUserTable, currentPage: 1});
  };
  handleSearchFilterChange = (e) => {
    this.setState({searchFilter: e.target.value});
  };

  render() {
    const {onUpdateDriver, users} = this.props;

    const {pageSize, currentPage} = this.state;

    let usersHavingDriverProfile = [];
    for (let id in users) {
      users[id].DriverProfile &&
        usersHavingDriverProfile.push(users[id].DriverProfile);
    }
    const {length} = usersHavingDriverProfile;

    if (length === 0) return <p>Loading</p>;
    else {
      const {data} = this.filteredDrivers();
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
              <Search
                handleSearch={this.handleDriverSearch}
                value={this.state.searchUserTable}
                userSearch={this.driverSearch}
                searchFilter={this.state.searchFilter}
                onSearchFilterChange={this.handleSearchFilterChange}
              />
              <table className='table align-items-center'>
                <TableHeader
                  columns={this.columns}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                />

                <tbody>
                  {data
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
          <Pagination
            pageSize={pageSize}
            length={length}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      );
    }
  }
}

export default DriverDetails;
