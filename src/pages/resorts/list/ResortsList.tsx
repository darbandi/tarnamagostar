import React, { useEffect, useState } from "react";
import _data from "./../../../data/data.json";
import ResortsItem from "./ResortsItem";
import IResort from "../../../interfaces/IResort";
import { scrollTop } from "../../../utils/scrollTop";
import ReactPaginate from "react-paginate";

const ResortsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<IResort[]>([]);

  useEffect(() => {
    scrollTop();
    const _page = page * 10;
    setData(_data?.slice(_page - 10, _page));
  }, [page]);

  const handlePageChange = (_page: number) => {
    setPage(_page);
  };

  return (
    <div className="resorts-list">
      {data.map((resort: IResort) => (
        <ResortsItem {...resort} />
      ))}
      <div className="paginate-wrapper">
        <ReactPaginate
          pageCount={_data?.length / 10}
          containerClassName="pagination flex"
          activeClassName="active"
          previousClassName="previous flex"
          nextClassName="next flex"
          previousLabel={<i className="ri-arrow-left-line" />}
          nextLabel={<i className="ri-arrow-right-line" />}
          pageRangeDisplayed={3}
          forcePage={page - 1}
          onPageChange={(curr) => handlePageChange(curr.selected + 1)}
        />
      </div>
    </div>
  );
};

export default ResortsList;
