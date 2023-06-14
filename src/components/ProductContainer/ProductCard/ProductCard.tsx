import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductCard.module.css";

import { RiHeartLine } from "react-icons/ri";
import { Book as IBook } from "../../../api/types";

import { addToCart } from "../../../store/cart/cart.reducer";
import { addToFavorites } from "../../../store/favorites/favorites.reducer";
import { getFavoritesSlice } from "../../../store/favorites/favorites.selector";

import Title from "../../Title/Title";
import StarsContainer from "../../StarsContainer/StarsContainer";
import Button from "../../Button/Button";
import ProductInfo from "./../ProductInfo/ProductInfo";
import Tabs, { Tab } from "../../Tabs/Tabs";

interface ProductCardProps {
  bookItem: IBook;
}

const tabs: Tab[] = [
  {
    label: "Description",
    value: "description",
  },
  {
    label: "Authors",
    value: "authors",
  },
  {
    label: "Reviews",
    value: "reviews",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({ bookItem }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(getFavoritesSlice);

  const [activeTab, setActiveTab] = useState<Tab["value"]>(tabs[0].value);

  const handleTabClick = (tab: Tab) => setActiveTab(tab.value);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...bookItem, count: 1 }));
  };
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(bookItem));
  };
  return (
    <div>
      <Title title={bookItem.title} size="large" />
      <div className={styles.product_wrapper}>
        <div className={styles.pic_container}>
          <div
            className={styles.heart_container}
            onClick={handleAddToFavorites}
          >
            {favorites.find((item) => item.isbn13 === bookItem.isbn13) ? (
              <RiHeartLine color="#ff4040" size={30} />
            ) : (
              <RiHeartLine color="#FFFFFF" size={30} />
            )}
          </div>
          <img src={bookItem.image} />
        </div>
        <div className={styles.info_container}>
          <div className={styles.card_price_stars}>
            <span className={styles.price}>{bookItem.price}</span>
            <StarsContainer />
          </div>
          <ProductInfo
            authors={bookItem.authors}
            publisher={bookItem.publisher}
          />
          <Button
            size="large"
            children="add to cart"
            onClick={handleAddToCart}
          />
          <div className={styles.previewBook}>
            <a href={bookItem.pdf} className={styles.previewBook_text}>
              Preview book
            </a>
          </div>
        </div>
      </div>
      <Tabs activeTab={activeTab} tabs={tabs} onTabClick={handleTabClick} />
      <div className={styles.tabs}>
        {activeTab === "description" && <p>{bookItem.desc}</p>}
        {activeTab === "authors" && <p>{bookItem.authors}</p>}
        {activeTab === "reviews" && `reviews`}
      </div>
    </div>
  );
};

export default ProductCard;
