import React from "react";
import { Link } from "react-router-dom";
import IResort from "./../../interfaces/IResort";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./../../state";

const BucketItem: React.FC<IResort> = ({
  id,
  imageUrl,
  title: _title,
  price,
  description,
}) => {
  const dispatch = useDispatch();
  const { removeFromBucket } = bindActionCreators(actions, dispatch);

  const handleRemoveFromBucket = () => {
    removeFromBucket(id);
  };

  const [title, location] = _title.split("—");

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
          <button className="btn-secondary" onClick={handleRemoveFromBucket}>
            Remove
            <i className="ri-delete-bin-2-line icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BucketItem;
