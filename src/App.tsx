import React from "react";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import ResortsList from "./pages/resorts/list/ResortsList";
import ResortDetails from "./pages/resorts/details/ResortsDetails";
import Bucket from "./pages/bucket/Bucket";
import NotFound from "./pages/not-found/NotFound";
import { Provider } from "react-redux";
import { store } from "./state/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<ResortsList />} />
          <Route path="/resorts" element={<ResortsList />} />
          <Route path="/resort/:id" element={<ResortDetails />} />
          <Route path="/bucket" element={<Bucket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
