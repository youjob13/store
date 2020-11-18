import React from "react";
import styles from "./productItem.module.scss";
import logo1 from "../../../assets/img/products/1.jpg";

const ProductItem = () => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productInfo}>
        <img src={logo1} />
        <div className={styles.productTitle}>
          <p className={styles.productName}>Raf Simons x adidas</p>
          <p className={styles.productDescription}>Mid - Platform Light-Up</p>
        </div>
        <p>$760.00</p>
      </div>
      <div className={styles.productBtn}>
        <div className={styles.productFavorite}>Like</div>
        <div className={styles.productFavorite}>Cart</div>
      </div>
    </div>
  );
};

export default ProductItem;
