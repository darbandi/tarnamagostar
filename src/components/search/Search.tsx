import React from "react";
import FilterByPrice from "./FilterByPrice";
import SortByPrice from "./SortByPrice";
import SortByTitle from "./SortByTitle";
import FilterByTitle from "./FilterByTitle";

const Search: React.FC = () => {
  return (
    <div className="search">
      <i className="ri-sort-asc icon"></i>
      <SortByPrice />
      <SortByTitle />
      <i className="ri-filter-line icon"></i>
      <FilterByPrice />
      <FilterByTitle />
    </div>
  );
};

export default Search;
