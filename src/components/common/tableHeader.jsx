import React, {Component} from "react";

class TableHeader extends Component {
  state = {};

  createKey = (column) => {
    return column.path || column.key;
  };
  raiserSort = (path) => {
    const order = this.props.sortColumn.order === "asc" ? "desc" : "asc";
    this.props.onSort(path, order);
  };

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.column) return null;
    if (this.props.sortColumn.order === "asc") {
      return <i className='fa fa-sort-asc'></i>;
    } else return <i className='fa fa-sort-desc'></i>;
  };

  render() {
    const {columns} = this.props;

    return (
      <thead className='thead-light'>
        <tr>
          {columns.map((column) => {
            return (
              <th
                className={column.sort ? "cursor-pointer" : ""}
                key={this.createKey(column)}
                onClick={() => {
                  if (column.sort) this.raiserSort(column.path);
                }}
              >
                {column.label} {this.renderSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
