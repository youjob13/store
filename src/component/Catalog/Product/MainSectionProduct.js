import React from "react";
import logo1 from "../../../assets/img/products/5.png";
import styles from "./product.module.scss";

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={logo1} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.favorite}></div>
        <div>
          <h3 className={styles.productBrand}>Nike</h3>
          <h2 className={styles.productTitle}>Air Max Tavas SD</h2>
          <p className={styles.productPrice}>$ 160.00</p>
          <div className={styles.productColor}>
            <p>
              <span>Colors - </span>Black/Pink Pow/Tour Yellow/White
            </p>
            <div className={styles.productOtherItems}>
              <div className={styles.productOtherItem}>
                <img src={logo1} />
              </div>
              <div className={styles.productOtherItem}>
                <img src={logo1} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productSize}>
          <p>Size charts</p>
          <select>
            <option value="SIZE">SIZE</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
