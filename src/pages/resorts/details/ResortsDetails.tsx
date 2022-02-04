import React, { useEffect, useState } from "react";
import data from "./../../../data/data.json";
import { Link, useParams } from "react-router-dom";
import IResort from "../../../interfaces/IResort";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./../../../state";
import { scrollTop } from "../../../utils/scrollTop";
import IState from "../../../interfaces/IState";

const ResortDetails: React.FC = () => {
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const { addToBucket } = bindActionCreators(actions, dispatch);
  const [addedToBucket, setAddedToBucket] = useState(false);
  const params = useParams();

  const {
    id = 0,
    imageUrl,
    title: _title,
    price,
    description,
  } = data.find((item: IResort) => item.id === +(params?.id || 0)) || {};

  const [title, location] = _title?.split("—") || [];

  const handleAddToBucket = () => {
    if (addedToBucket) return;
    addToBucket(id);
    setAddedToBucket(true);
  };

  useEffect(() => {
    scrollTop();
    const _buckets: number[] = state.bucket;
    if (_buckets.includes(id)) {
      setAddedToBucket(true);
    }
  }, [id, state.bucket]);

  return (
    <div className="resort-details">
      <div
        className="cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div key={id} className="resort-item">
        <div className="resort-data">
          <h2 className="title">
            <Link to={`/resort/${id}`}>{title}</Link>
          </h2>
          <div className="location">
            <i className="ri-map-pin-line icon"></i>
            {location}
          </div>
        </div>
        <div className="resort-cover">
          <img className="resort-image" src={imageUrl} alt={title} />
          <span className="price">{price}</span>
        </div>
        <div className="resort-gallery">
          {[...Array(4)].map((item) => (
            <img
              key={item}
              className="resort-image"
              src={imageUrl}
              alt={title}
            />
          ))}
        </div>
        <p className="description">{description}</p>
        <div className="resort-info">
          <button className="btn-primary" onClick={handleAddToBucket}>
            <i
              className={`ri-${
                addedToBucket ? "check-double" : "shopping-cart"
              }-line add-to-bucket`}
            ></i>
            {addedToBucket ? "added" : "Add to bucket"}
            {!addedToBucket && <div className="price">{price}</div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResortDetails;
