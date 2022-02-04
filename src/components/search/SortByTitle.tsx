import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import IState from "../../interfaces/IState";
import { actions } from "../../state";

const SortByTitle: React.FC = () => {
  const state = useSelector((state: IState) => state);
  const [title, setTitle] = useState("ascending");
  const dispatch = useDispatch();
  const { setSorts } = bindActionCreators(actions, dispatch);

  const handleChangeTitle = (type: string) => {
    setTitle(type);
    setSorts({ title: type, price: null });
  };

  useEffect(() => {
    if (state.sorts.price) setTitle("");
  }, [state.sorts.price]);

  return (
    <span className="section">
      <label className="category-label">Title:</label>
      <label className="label" htmlFor="ascending">
        ascending
      </label>
      <input
        checked={title === "ascending"}
        type="radio"
        id="ascending"
        value="ascending"
        name="title"
        onChange={(e) => handleChangeTitle(e.target.value)}
      />

      <label className="label" htmlFor="descending">
        descending
      </label>
      <input
        checked={title === "descending"}
        type="radio"
        id="descending"
        value="descending"
        name="title"
        onChange={(e) => handleChangeTitle(e.target.value)}
      />
    </span>
  );
};

export default SortByTitle;
