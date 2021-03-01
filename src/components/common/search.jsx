const Search = ({
  handleSearch,
  value,
  userSearch,
  searchFilter,
  onSearchFilterChange,
}) => {
  return (
    <form>
      <div className='form-group mx-5'>
        <input
          onChange={handleSearch}
          type='text'
          className='form-control'
          id='search'
          placeholder='Search...'
          value={value}
        />

        <div className='my-2'>
          {userSearch.map((f) => {
            return (
              <div key={f.key} className='form-check form-check-inline'>
                <input
                  onChange={onSearchFilterChange}
                  className='form-check-input'
                  type='radio'
                  name='search'
                  value={f.key}
                  checked={f.key === searchFilter}
                  id={f.key}
                />
                <label className='form-check-label' htmlFor={f.key}>
                  {f.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default Search;
