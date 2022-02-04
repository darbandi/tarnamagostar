import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../state";

const FilterByPrice: React.FC = () => {
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const { setFilters } = bindActionCreators(actions, dispatch);

  const handleChangePrice = (value: string) => {
    setPrice(value);
    setFilters({ price: value });
  };

  return (
    <span className="section">
      <label className="category-label">Price:</label>
      <input
        value={price}
        type="number"
        className="text-input"
        placeholder="from price"
        onChange={(e) => handleChangePrice(e.target.value)}
      />
    </span>
  );
};

export default FilterByPrice;
