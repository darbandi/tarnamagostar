import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import IResort from "./../../../interfaces/IResort";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./../../../state";
import IState from "../../../interfaces/IState";

const ResortsItem: React.FC<IResort> = ({
  id,
  imageUrl,
  title: _title,
  price,
  description,
}) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state);
  const { addToBucket } = bindActionCreators(actions, dispatch);
  const _buckets: number[] = state.bucket;
  const [addedToBucket, setAddedToBucket] = useState(
    _buckets.includes(id) || false
  );

  const handleAddToBucket = () => {
    if (addedToBucket) return;
    addToBucket(id);
    setAddedToBucket(true);
  };

  const [title, location] = _title.split("—");
  const navigate = useNavigate();

  const handleClickDetails = () => navigate(`/resort/${id}`);

  return (
    <div key={id} className="resort-item">
      <div className="resort-cover">
        <img className="resort-image" src={imageUrl} alt={title} />
      </div>
      <div className="resort-data">
        <h2 className="title">
          <Link to={`/resort/${id}`}>{title}</Link>
        </h2>
        <div className="location">
          <i className="ri-map-pin-line icon"></i>
          {location}
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="resort-info">
        <span className="price">{price}</span>
        <div className="btn-group">
          <button className="btn-primary" onClick={handleClickDetails}>
            See availability
            <i className="ri-arrow-right-s-line icon"></i>
          </button>
          <i
            className={`ri-${
              addedToBucket ? "check-double" : "shopping-cart"
            }-line add-to-bucket`}
            onClick={handleAddToBucket}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ResortsItem;
