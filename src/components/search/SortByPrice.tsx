import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import IState from "../../interfaces/IState";
import { actions } from "../../state";

const Price: React.FC = () => {
  const state = useSelector((state: IState) => state);
  const [price, setPrice] = useState("cheapest");
  const dispatch = useDispatch();
  const { setSorts } = bindActionCreators(actions, dispatch);

  const handleChangePrice = (type: string) => {
    setPrice(type);
    setSorts({ price: type, title: null });
  };

  useEffect(() => {
    if (state.sorts.title) setPrice("");
  }, [state.sorts.title]);

  return (
    <span className="section">
      <label className="category-label">Price:</label>
      <label className="label" htmlFor="cheapest">
        cheapest
      </label>
      <input
        checked={price === "cheapest"}
        type="radio"
        id="cheapest"
        value="cheapest"
        name="price"
        onChange={(e) => handleChangePrice(e.target.value)}
      />

      <label className="label" htmlFor="expensive">
        expensive
      </label>
      <input
        checked={price === "expensive"}
        type="radio"
        id="expensive"
        value="expensive"
        name="price"
        onChange={(e) => handleChangePrice(e.target.value)}
      />
    </span>
  );
};

export default Price;
