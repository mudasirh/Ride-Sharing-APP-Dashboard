const TableBody = ({
  onDriverDetails,
  onDeleteUser,
  onUpdateUser,
  data,
  length,
}) => {
  return (
    <tbody>
      {length !== 0 &&
        data.map((user) => {
          return (
            <tr key={user._id}>
              <td>{user.name === undefined ? "-" : user.name}</td>
              <td>{user.email === undefined ? "-" : user.email}</td>
              <td>{user.phone_No === undefined ? "-" : user.phone_No}</td>
              <td>{user.password === undefined ? "-" : user.password}</td>
              <td>
                {"DriverProfile" in user ? (
                  <button className='btn btn-primary btn-sm'>
                    <span
                      onClick={() => {
                        onDriverDetails(user);
                      }}
                      className='btn-driver-profile'
                    >
                      view profile
                    </span>
                  </button>
                ) : (
                  "No yet created"
                )}
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
                      onClick={() => onUpdateUser(user)}
                      className='dropdown-item'
                      href='#'
                    >
                      Update
                    </a>
                    <a
                      onClick={() => onDeleteUser(user)}
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
  );
};

export default TableBody;
