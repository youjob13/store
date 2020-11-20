import React from "react";
import styles from "./informations.module.scss";
import img2 from "../../assets/img/cart/1.png";

const Informations = () => {
  return (
    <div className={styles.informations}>
      <div
        className={styles.informationsPersonalInfo || styles.informationsBlock}
      >
        <h2>Informations</h2>
        <form>
          <legend>Personal Informations</legend>
          <div className={styles.informationsInput}>
            <select placeholder="County">
              <option value="County">County</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div className={styles.informationsInput}>
            <input type="text" placeholder="FirstName" />
            <input type="text" placeholder="Second name" />
          </div>
          <div className={styles.informationsInput}>
            <input type="address" placeholder="Address" />
          </div>
          <div className={styles.informationsInput}>
            <input type="text" placeholder="Postal code" />
            <input type="text" placeholder="City" />
          </div>
          <div className={styles.informationsInput}>
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
          </div>
        </form>
      </div>

      <div className={styles.informationsNotes || styles.informationsBlock}>
        <h3>Notes</h3>
        <input type="Note" placeholder="Note" />
      </div>

      <div
        className={styles.informationsDeliveryMode || styles.informationsBlock}
      >
        <h3>Delivery Mode</h3>
        <select>
          <option value="1">Collisimo france, $20.00</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className={styles.informationsCart || styles.informationsBlock}>
        <h3>Your Cart</h3>
        <div>
          <div className={styles.informationsCartItem}>
            <div className={styles.informationsCartItemSum}>
              <p>+</p>
              <p>1</p>
              <p>-</p>
            </div>
            <div className={styles.informationsCartItemImg}>
              <img src={img2} />
            </div>
            <div className={styles.informationsCartItemTitle}>
              <h4>Nike</h4>
              <p>Air Max Tavas SD</p>
            </div>
            <div className={styles.informationsCartItemSize}>
              <span>Size</span>
              <span>7.5</span>
            </div>
            <div className={styles.informationsCartItemPrice}>
              <p>$ 105.00</p>
            </div>
          </div>
          <div className={styles.informationsCartItem}>
            <div className={styles.informationsCartItemSum}>
              <p>+</p>
              <p>1</p>
              <p>-</p>
            </div>
            <div className={styles.informationsCartItemImg}>
              <img src={img2} />
            </div>
            <div className={styles.informationsCartItemTitle}>
              <h4>Nike</h4>
              <p>Air Max Tavas SD</p>
            </div>
            <div className={styles.informationsCartItemSize}>
              <span>Size</span>
              <span>7.5</span>
            </div>
            <div className={styles.informationsCartItemPrice}>
              <p>$ 105.00</p>
            </div>
          </div>
        </div>
        <div className={styles.informationsCartResult}>
          <div className={styles.informationsCartShipping}>
            <h4>Shipping</h4>
            <span>$ 20.00</span>
          </div>
          <div className={styles.informationsCartSubtotal}>
            <h4>Subtotal</h4>
            <span>$ 285.00</span>
          </div>
        </div>
        <div className={styles.informationsPrivatePolicy}>
          <input id="privateCheckbox" type="checkbox" />
          <label for="privateCheckbox" />
          <p>
            I agree <a href="/">terms of use and privacy</a>
          </p>
        </div>
        <button className={styles.informationsConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Informations;
