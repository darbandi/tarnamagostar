import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../state";

const FilterByTitle: React.FC = () => {
  const [title, settitle] = useState("");
  const dispatch = useDispatch();
  const { setFilters } = bindActionCreators(actions, dispatch);

  const handleChangeTitle = (value: string) => {
    settitle(value);
    setFilters({ title: value });
  };

  return (
    <span className="section">
      <label className="category-label">Title:</label>
      <input
        value={title}
        type="text"
        className="text-input"
        placeholder="search ..."
        onChange={(e) => handleChangeTitle(e.target.value)}
      />
    </span>
  );
};

export default FilterByTitle;
