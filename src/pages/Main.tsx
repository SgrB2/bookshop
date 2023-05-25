import React from "react";

import MainLayout from "../layouts/MainLayout";
import NewReleasesPage from "../components/NewReleases/NewReleases";
import SearchResult from "../components/SearchResult/SearchResult";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductContainer/ProductContainer";

const Main = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<NewReleasesPage/>}
      footer={<Footer />}
    />
  );
};

export default Main;
