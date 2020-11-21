import React from "react";
import styles from "./characteristic.module.scss";
import logo from '../../../assets/img/Characteristic/1.jpg';
import imgMini from '../../../assets/img/products/5.png';

const Characteristic = () => {
  return (
    <div className={styles.characteristic}>
        <div className={styles.characteristicContent}>
          <div className={styles.characteristicStory}>
            <h3>Story</h3>
            <h2>Nike Air Max Origins</h2>
            <p>
              Nike's revolutionary Air-Sole unit made its way into Nike footwear
              in the late '70s. In 1987, the Nike Air Max 1 debuted with visible
              air in its heel, allowing fans more than just the feel of Air-Sole
              comfort
            </p>
          </div>
          <div className={styles.characteristicBenefits}>
            <h3>Benefits</h3>
            <div>
              <h2>Layered textile/synthetic upper</h2>
              <p>for lightweight durability and comfort</p>
            </div>
            <div>
              <h2>Injected Phylon midsole doubles</h2>
              <p>Outsole to reduce the overall weight of the shoe</p>
            </div>
            <div>
              <h2>Max Air heel unit</h2>
              <p>delivers maximum lightweight cushioning</p>
            </div>
            <div>
              <h2>Rubber Waffle outsole</h2>
              <p>Durable, multi-surface traction</p>
            </div>
          </div>
        </div>
        <div className={styles.characteristicImage}>
          <img src={logo} />
        </div>
        <div className={styles.characteristicProduct}>
          <div className={styles.characteristicProductMini}>
            <div>
              <h2>Nike</h2>
              <h3>Air max Tavas SD</h3>
            </div>
            <div className={styles.characteristicProductMiniColor}>
              <p>Black/Pink</p>
              <p>Pow/Tour</p>
              <p>Yellow/White</p>
            </div>
            <div className={styles.characteristicProductMiniImage}>
              <img src={imgMini} />
            </div>
            <div className={styles.characteristicProductMiniPrice}>
              <p>En Stock</p>
              <p>$160.00</p>
            </div>
            <div className={styles.characteristicProductMiniSize}>
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
    </div>
  );
};

export default Characteristic;
