import React from "react";

import styles from "./ProductInfo.module.css";

import { IoIosArrowDown } from "react-icons/io";

interface ProductInfoProps {
  authors: string | undefined;
  publisher: string | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ authors, publisher }) => {
  return (
    <div>
      <div className={styles.product_info}>
        <div className={styles.product_option}>
          <p>Authors</p>
          <p>Publisher</p>
          <p>Language</p>
          <p>Format</p>
        </div>
        <div className={styles.product_characteristics}>
          <p className={styles.product_authors}>{authors}</p>
          <p>{publisher}</p>
          <p>English</p>
          <p>Paper book / ebook (PDF)</p>
        </div>
      </div>
      <div className={styles.detailse}>
        <p className={styles.detailse_text}>More detailse</p>
        <IoIosArrowDown color="#313037" />
      </div>
    </div>
  );
};

export default ProductInfo;
