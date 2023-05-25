import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./ProductCard.module.css";

import { RiHeartLine } from "react-icons/ri";
import { Book as IBook } from "../../../api/types";

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
  const [activeTab, setActiveTab] = useState<Tab["value"]>(tabs[0].value);

  const handleTabClick = (tab: Tab) => setActiveTab(tab.value);

  const params = useParams<{ isbn13: string }>();
  console.log(params);

  return (
    <div>
      <Title title={bookItem.title} size="large" />
      <div className={styles.product_wrapper}>
        <div className={styles.pic_container}>
          <div className={styles.heart_container}>
            <RiHeartLine color="#FFFFFF" size={30} />
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
          <Button size="large" children="add to cart" />
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
        {activeTab === "reviews" && `Отзывы`}
      </div>
    </div>
  );
};

export default ProductCard;
