import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import styles from "./PaymentSuccessFull.module.css";
const PaymentSuccesFull = ({ setModal }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.success}>
        <GiCheckMark className={styles.checkmark} />
      </div>
      <MdOutlineClose
        className={styles.close}
        onClick={() => setModal(false)}
      />
      <h3 className={styles.title}>Payment was successful</h3>
      <p className={styles.tagline}>
        Payment has been received successfully. Thank you for your payment.
      </p>
      <div className={styles.amountContainer}>
        <p className={styles.amount}>200.00 USDT</p>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.spaceBetween}>
          <p className={styles.text}>Network</p>
          <p className={styles.text}>Ethereum</p>
        </div>
        <div className={styles.spaceBetween}>
          <p className={styles.text}>From</p>
          <p className={styles.text}>0x3454..2fa4</p>
        </div>
        <div className={styles.spaceBetween}>
          <p className={styles.text}>To</p>
          <p className={styles.text}>2fa4</p>
        </div>
        <div className={styles.spaceBetween}>
          <p className={styles.text}>Transaction time</p>
          <p className={styles.text}>28 Feb 2023, 14:30</p>
        </div>{" "}
        <div className={styles.spaceBetween}>
          <p className={styles.text}>Transaction hash</p>
          <p className={styles.text}>0x 08G...88GG</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={[styles.button].join(" ")}>View Transaction</button>
        <button className={[styles.button, styles.activeButton].join(" ")}>
          Download receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccesFull;
