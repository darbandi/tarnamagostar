import React, { useEffect, useState } from "react";
import _data from "./../../data/data.json";
import IResort from "../../interfaces/IResort";
import { scrollTop } from "../../utils/scrollTop";
import IState from "../../interfaces/IState";
import { useSelector } from "react-redux";
import BucketItem from "./BucketItem";
import { Link } from "react-router-dom";

const BucketList: React.FC = () => {
  const state = useSelector((state: IState) => state);
  const [data, setData] = useState<IResort[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    scrollTop();
    const _resorts: any = [];
    state.bucket.forEach((id) => {
      const _resort = _data.find((resort: IResort) => resort.id === id);
      _resorts.push(_resort);
    });
    setData(_resorts);
    const total = _resorts.reduce(
      (acc: number, curr: IResort) => acc + +curr.price.replace("$", ""),
      0
    );
    setTotal(total);
  }, [state.bucket]);

  return (
    <div className="resorts-list">
      <h1>Bucket list</h1>
      {state.bucket.length <= 0 && (
        <div className="empty-list">
          <i className="ri-information-line icon"></i>
          your bucket is empty! please select your resort
          <Link to="/"> here!</Link>
        </div>
      )}
      {data.map((resort: IResort) => (
        <BucketItem {...resort} />
      ))}
      {total > 0 && (
        <div className="action">
          <button className="btn-primary">
            <span className="total">{total}$</span>
            <br /> Pay now
            <i className="ri-paypal-line icon"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default BucketList;
