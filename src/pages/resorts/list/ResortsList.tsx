import React, { useCallback, useEffect, useState } from "react";
import _data from "./../../../data/data.json";
import ResortsItem from "./ResortsItem";
import IResort from "../../../interfaces/IResort";
import { scrollTop } from "../../../utils/scrollTop";
import ReactPaginate from "react-paginate";
import Search from "../../../components/search/Search";
import IState from "../../../interfaces/IState";
import { useSelector } from "react-redux";
import { sortByPrice, sortByTitle } from "../../../utils/sort";
import { filterByPrice, filterByTitle } from "../../../utils/filter";

const ResortsList: React.FC = () => {
  const state = useSelector((state: IState) => state);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(_data?.length);
  const [data, setData] = useState<IResort[]>([]);

  const handleSubmit = useCallback(
    (_pageInput: number) => {
      scrollTop();
      const _page = _pageInput * 10;
      let _sortedData: IResort[] = [];
      if (state.sorts.price)
        _sortedData = sortByPrice(_data, state.sorts.price);
      if (state.sorts.title)
        _sortedData = sortByTitle(_data, state.sorts.title);
      if (+state.filters.price > 0)
        _sortedData = filterByPrice(_sortedData, +state.filters.price);
      if (state.filters.title)
        _sortedData = filterByTitle(_sortedData, state.filters.title);
      setData(_sortedData?.slice(_page - 10, _page));
      setPageCount(_sortedData?.length);
    },
    [
      state.sorts.price,
      state.sorts.title,
      state.filters.price,
      state.filters.title,
    ]
  );

  useEffect(() => {
    handleSubmit(1);
    setPage(1);
  }, [handleSubmit]);

  const handlePageChange = (_page: number) => {
    setPage(_page);
    handleSubmit(_page);
  };

  return (
    <div className="resorts-list">
      <Search />
      {data.map((resort: IResort) => (
        <ResortsItem {...resort} key={resort.id} />
      ))}
      <div className="paginate-wrapper">
        <ReactPaginate
          pageCount={pageCount / 10}
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
