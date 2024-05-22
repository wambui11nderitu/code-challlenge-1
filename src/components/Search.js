// Search.js
import React from "react";

function Search({ onSearch }) {
  const handleSearchChange = (event) => {
    const term = event.target.value;
    onSearch(term);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;