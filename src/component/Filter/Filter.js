import React from "react";
import styles from "./filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterWrapper}>
        <div className={styles.filterCategory}>
          <h4>Category</h4>
          <ul>
            <li>Boat Shoes</li>
            <li>Moccasins</li>
            <li>Boots</li>
            <li>Espadrilles</li>
            <li>Lace Ups</li>
            <li>Loafers</li>
            <li>Monkstraps</li>
            <li>Sandals</li>
            <li>Sneakers</li>
          </ul>
        </div>
        <div className={styles.filterCharacteristics}>
          <div className={styles.filterSize}>
            <h4>Size</h4>
            <div className={styles.filterSizes}>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>7.5</span>
              <span>8</span>
              <span>8.5</span>
              <span>9</span>
              <span>9.5</span>
              <span>10</span>
              <span>10.5</span>
              <span>11</span>
              <span>12</span>
            </div>
          </div>
          <div className={styles.filterColors}>
            <h4>Colors</h4>
            <div className={styles.filterColorsItem}>
              <div className={styles.red}></div>
              <div className={styles.pink}></div>
              <div className={styles.blue}></div>
              <div className={styles.gray}></div>
              <div className={styles.brown}></div>
              <div className={styles.black}></div>
              <div className={styles.yellow}></div>
              <div className={styles.white}></div>
              <div className={styles.green}></div>
              <div className={styles.orange}></div>
            </div>
          </div>
          <div className={styles.filterPriceRange}>
            <h4>Price Range</h4>
            <div class={styles.priceSlider}>
              <span>
                from
                <input type="number" value="0" min="0" max="120000" /> to
                <input type="number" value="120000" min="0" max="120000" />
              </span>
              <input
                value="25000"
                min="0"
                max="120000"
                step="500"
                type="range"
              />
              <input
                value="50000"
                min="0"
                max="120000"
                step="500"
                type="range"
              />
              <svg width="100%" height="24">
                <line
                  x1="4"
                  y1="0"
                  x2="300"
                  y2="0"
                  stroke="#212121"
                  stroke-width="12"
                  stroke-dasharray="1 28"
                ></line>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.filterBrands}>
          <h4>Brands</h4>
          <div className={styles.filterBrandsItems}>
            <ul>
              <li>A.P.C.</li>
              <li>Acne Studios</li>
              <li>Adidas Originals</li>
              <li>Arc'teryx Veilance</li>
              <li>Bianca Chandôn</li>
              <li>Cmmn Swdn</li>
              <li>Comme des Garçons</li>
              <li>Common Projects</li>
              <li>Converse</li>
              <li>Culture and Gross</li>
              <li>Dime</li>
              <li>Engineered</li>
              <li>Garments</li>
              <li>Eytys</li>
              <li>Kris Van Assche</li>
            </ul>
            <ul>
              <li>Maison</li>
              <li>New Balance</li>
              <li>Nike</li>
              <li>Proper Gang</li>
              <li>Puma</li>
              <li>Raf Simons</li>
              <li>Rick Owens</li>
              <li>Supreme</li>
              <li>Undercover</li>
              <li>Vans</li>
              <li>Margiela</li>
              <li>Visvim</li>
              <li>Wtaps</li>
              <li>Y-3</li>
            </ul>
          </div>
        </div>
        <button className={styles.filterApply} />
      </div>
    </div>
  );
};
export default Filter;
