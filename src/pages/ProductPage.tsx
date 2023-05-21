import React from "react";

import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";


const ProductPage = () => {
    return (
      <MainLayout
        header={<Header />}
        main={<ProductCard/>}
        footer={<Footer />}
      />
    );
  };
  
  export default ProductPage;