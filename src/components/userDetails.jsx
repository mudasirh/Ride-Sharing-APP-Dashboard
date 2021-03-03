/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import Pagination from "./common/pagination";
import Paginate from "../utils/paginate";
import _ from "lodash";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Search from "./common/search";
import SearchFilter from "../utils/searchFilter";
import Firebase from "../utils/firebase";

class UserDetails extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    sortColumn: {column: "name", order: "asc"},
    searchUserTable: "",
    searchFilter: "name",
  };

  columns = [
    {path: "name", label: "name", sort: true},
    {path: "email", label: "email", sort: true},
    {path: "phone_No", label: "phone", sort: true},
    {path: "password", label: "password", sort: true},
    {key: "profile", label: "View Profile", sort: false},
    {key: "action", label: "Action", sort: false},
  ];

  userSearch = [
    {key: "name", label: "By Name"},
    {key: "email", label: "By Email"},
    {key: "phone_No", label: "Phone"},
  ];

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  };
  handleSort = (column, order) => {
    this.setState({sortColumn: {column, order: order}});
  };
  handleUserSearch = ({currentTarget}) => {
    const searchUserTable = currentTarget.value;
    this.setState({searchUserTable, currentPage: 1});
  };
  filteredUsers = () => {
    const {users} = this.props;
    const {pageSize, currentPage, searchUserTable} = this.state;

    const sortedUsers = _.orderBy(
      users,
      [this.state.sortColumn.column],
      this.state.sortColumn.order
    );

    let searchFiltered = sortedUsers;
    if (searchUserTable) {
      searchFiltered = SearchFilter(
        users,
        this.state.searchFilter,
        searchUserTable
      );
    }

    const paginatedUsers = Paginate(searchFiltered, currentPage, pageSize);
    return {data: paginatedUsers};
  };
  handleSearchFilterChange = (e) => {
    this.setState({searchFilter: e.target.value});
  };
  handleDeleteUser = (user) => {
    const firebaseDB = Firebase.database();
    const firebaseUsersRef = firebaseDB.ref("Users");
    firebaseUsersRef.child(user._id).remove();

    if (
      Paginate(this.props.users, this.state.currentPage, this.state.pageSize)
        .length <= 1
    ) {
      let currentPage = this.state.currentPage;
      this.setState({currentPage: --currentPage});
    }
  };
  render() {
    const {onDriverDetails, onUpdateUser} = this.props;
    const {length} = this.props.users;
    const {pageSize, currentPage} = this.state;

    if (length === 0) return <p>Loading</p>;
    else {
      const {data} = this.filteredUsers();

      return (
        <div className='body-content'>
          <div className='card' style={{}}>
            <div className='card-header border-0'>
              <div className='row align-items-center'>
                <div className='col'>
                  <h2 className='mb-0'>User Details</h2>
                  <h5>Showing {length} record from the Database.</h5>
                </div>
              </div>
            </div>
            <div className='table-responsive'>
              <Search
                handleSearch={this.handleUserSearch}
                value={this.state.searchUserTable}
                userSearch={this.userSearch}
                searchFilter={this.state.searchFilter}
                onSearchFilterChange={this.handleSearchFilterChange}
              />

              <table className='table align-items-center'>
                <TableHeader
                  columns={this.columns}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                />

                <TableBody
                  onDriverDetails={onDriverDetails}
                  onDeleteUser={this.handleDeleteUser}
                  onUpdateUser={onUpdateUser}
                  data={data}
                  length={length}
                />
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

export default UserDetails;
