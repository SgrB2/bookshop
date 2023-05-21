import React from "react";

import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Favorites from "../components/Favorites/Favorires";


const FavoritesPage = () => {
    return (
      <MainLayout
        header={<Header />}
        main={<Favorites/>}
        footer={<Footer />}
      />
    );
  };
  
  export default FavoritesPage;