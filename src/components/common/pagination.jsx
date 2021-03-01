/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from "lodash";
const Pagination = (props) => {
  const {pageSize, length, onPageChange, currentPage} = props;
  const totalPages = Math.ceil(length / pageSize);
  const pages = _.range(1, totalPages + 1);
  return (
    <nav>
      <ul className='pagination'>
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => onPageChange(page)}
                className='page-link '
                href='#'
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
