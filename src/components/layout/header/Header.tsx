import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IState from "../../../interfaces/IState";

const Header: React.FC = () => {
  const state = useSelector((state: IState) => state);
  return (
    <header className="layout-header">
      <nav>
        <Link to="/" className="nav-link">
          <i className="ri-community-line icon"></i>
          Resorts
        </Link>
      </nav>
      <Link to="/bucket" className="bucket">
        <i className="ri-shopping-basket-2-line"></i>
        <span className="badge">{state.bucket.length}</span>
      </Link>
    </header>
  );
};

export default Header;
