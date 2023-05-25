import React from "react";

import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductContainer from "../components/ProductContainer/ProductContainer";


const ProductPage = () => {
    return (
      <MainLayout
        header={<Header />}
        main={<ProductContainer />}
        footer={<Footer />}
      />
    );
  };
  
  export default ProductPage;