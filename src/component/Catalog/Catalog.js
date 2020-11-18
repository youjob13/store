import React from "react";
import styles from "./catalog.module.scss";

import productsStyle from "../common/ProductItem/productItem.module.scss";
import ProductItem from "../common/ProductItem/ProductItem";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.searchInput}>
        <input value="search" />
      </div>

      <p className={styles.catalogTitle}>Footwear</p>

      <div className={productsStyle.product}>
        <div className={productsStyle.productItems}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          {/* <div className={itemStyle.productItem}>
            <div className={itemStyle.productInfo}>
              <img src={logo2} />
              <div className={itemStyle.productTitle}>
                <p className={itemStyle.productName}>Raf Simons x adidas</p>
                <p className={itemStyle.productDescription}>
                  Stan smith classic
                </p>
              </div>
              <p>$300.00</p>
            </div>
            <div className={itemStyle.productBtn}>
              <div className={itemStyle.productFavorite}>Like</div>
              <div className={itemStyle.productFavorite}>Cart</div>
            </div>
          </div>
          <div className={itemStyle.productItem}>
            <div className={itemStyle.productInfo}>
              <img src={logo3} />
              <div className={itemStyle.productTitle}>
                <p className={itemStyle.productName}>Raf Simons</p>
                <p className={itemStyle.productDescription}>
                  Hi top velcro straps
                </p>
              </div>
              <p>$788.00</p>
            </div>
            <div className={itemStyle.productBtn}>
              <div className={itemStyle.productFavorite}>Like</div>
              <div className={itemStyle.productFavorite}>Cart</div>
            </div>
          </div>
          <div className={itemStyle.productItem}>
            <div className={itemStyle.productInfo}>
              <img src={logo4} />
              <div className={itemStyle.productTitle}>
                <p className={itemStyle.productName}>Raf Simons</p>
                <p className={itemStyle.productDescription}>
                  Hi top velcro straps
                </p>
              </div>
              <p>$788.00</p>
            </div>
            <div className={itemStyle.productBtn}>
              <div className={itemStyle.productFavorite}>Like</div>
              <div className={itemStyle.productFavorite}>Cart</div>
            </div>
          </div>
          <div className={itemStyle.productItem}>
            <div className={itemStyle.productInfo}>
              <img src={logo2} />
              <div className={itemStyle.productTitle}>
                <p className={itemStyle.productName}>Raf Simons x adidas</p>
                <p className={itemStyle.productDescription}>
                  Stan smith classic
                </p>
              </div>
              <p>$300.00</p>
            </div>
            <div className={itemStyle.productBtn}>
              <div className={itemStyle.productFavorite}>Like</div>
              <div className={itemStyle.productFavorite}>Cart</div>
            </div>
          </div>
          <div className={itemStyle.productItem}>
            <div className={itemStyle.productInfo}>
              <img src={logo2} />
              <div className={itemStyle.productTitle}>
                <p className={itemStyle.productName}>Raf Simons x adidas</p>
                <p className={itemStyle.productDescription}>
                  Stan smith classic
                </p>
              </div>
              <p>$300.00</p>
            </div>
            <div className={itemStyle.productBtn}>
              <div className={itemStyle.productFavorite}>Like</div>
              <div className={itemStyle.productFavorite}>Cart</div>
            </div>
          </div>
          <div className={itemStyle.productItem}>
            <div className={itemStyle.productInfo}>
              <img src={logo2} />
              <div className={itemStyle.productTitle}>
                <p className={itemStyle.productName}>Raf Simons x adidas</p>
                <p className={itemStyle.productDescription}>
                  Stan smith classic
                </p>
              </div>
              <p>$300.00</p>
            </div>
            <div className={itemStyle.productBtn}>
              <div className={itemStyle.productFavorite}>Like</div>
              <div className={itemStyle.productFavorite}>Cart</div>
            </div>
          </div>
          <div className={itemStyle.productItem}>
            <div className={itemStyle.productInfo}>
              <img src={logo2} />
              <div className={itemStyle.productTitle}>
                <p className={itemStyle.productName}>Raf Simons x adidas</p>
                <p className={itemStyle.productDescription}>
                  Stan smith classic
                </p>
              </div>
              <p>$300.00</p>
            </div>
            <div className={itemStyle.productBtn}>
              <div className={itemStyle.productFavorite}>Like</div>
              <div className={itemStyle.productFavorite}>Cart</div>
            </div>
          </div>
         */}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
