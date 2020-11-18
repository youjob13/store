import React from "react";
import product from "../../assets/img/mainPage/catalog.png";
import styles from "./mainPage.module.scss";
import productsStyle from "../common/ProductItem/productItem.module.scss";
import ProductItem from "../common/ProductItem/ProductItem";

const MainPage = () => {
  return (
    <div className={productsStyle.mainPageBlock}>
      <div className={productsStyle.productItems}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItemType />
      </div>
    </div>
  );
};

const ProductItemType = () => {
  return (
    <div className={styles.productItemType}>
      <p>New arrivals</p>
      <p className={styles.type}>Jacket</p>
      <div className={styles.img}>
        <img src={product} />
      </div>
    </div>
  );
};

export default MainPage;
