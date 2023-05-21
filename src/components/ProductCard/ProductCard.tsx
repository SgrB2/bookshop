import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ProductCard.module.css";
import { RiHeartLine } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "react-router-dom";

import Title from "../Title/Title";
import StarsContainer from "../StarsContainer/StarsContainer";
import Img from "../Images/9781491954249.png";
import Button from "../Button/Button";
import ProductInfo from "./ProductInfo/ProductInfo";
import SocialList from "../SocialList/SocialList";
import SubscribeContainer from "../Subscribe/Subscribe";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import Tabs, { Tab } from "../Tabs/Tabs";

// import { Book as IBook } from "../../api/newbooks/getBooks";
// import { getBook } from "../../api/newbooks/getBook";

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

const ProductPage: React.FC = () => {
  // const navigate = useNavigate();

  // const [activeTab, setActiveTab] = useState<Tab["value"]>(tabs[0].value);

  // const handleTabClick = (tab: Tab) => setActiveTab(tab.value);

  // const params = useParams<{ isbn13: string }>();
  // console.log(params);

  // const [loading, setLoading] = useState(false);
  // const [book, setBook] = useState<IBook | null>(null);

  // useEffect(() => {
  //   if (params.isbn13) {
  //     setLoading(true);
  //     Promise.all([getBook(params.isbn13)])
  //       .then(([bookRes]) => {
  //         setBook(bookRes);
  //       })
  //       .finally(() => setLoading(false));
  //   }
  // }, [params.isbn13]);

  return (
    <div>
      {/* <div className={styles.arrow_page} onClick={() => navigate(-1)}>
        <BsArrowLeft size={40} color="#313037" />
      </div>
      <Title title={book?.title} size="large" />
      <div className={styles.product_wrapper}>
        <div className={styles.pic_container}>
          <div className={styles.heart_container}>
            <RiHeartLine color="#FFFFFF" size={30} />
          </div>
          <img src={book?.image} />
        </div>
        <div className={styles.info_container}>
          <div className={styles.card_price_stars}>
            <span className={styles.price}>{book?.price}</span>
            <StarsContainer />
          </div>
          <ProductInfo
            authors={book?.authors}
            publisher={book?.publisher}
          />
          <Button size="large" children="add to cart" />
          <div className={styles.previewBook}>
            <a href={book?.pdf} className={styles.previewBook_text}>Preview book</a>
          </div>
        </div>
      </div>
      <Tabs activeTab={activeTab} tabs={tabs} onTabClick={handleTabClick} />
      <div className={styles.tabs}>
        {activeTab === "description" && <>{book?.desc}</>}
        {activeTab === "authors" && <>{book?.authors}</>}
        {activeTab === "reviews" && `Отзывы`}
      </div> */}
      <SocialList />
      <SubscribeContainer />
      <SimilarBooks />
    </div>
  );
};

export default ProductPage;
