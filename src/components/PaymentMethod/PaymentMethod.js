import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import styles from "./PaymentMethod.module.css";
import {
  americanExpress,
  binance,
  binancePay,
  cards,
  coinbase,
  ethereum,
  masterCard,
  polygon,
  scanQrCode,
  solana,
  visaCard,
  wallet,
} from "../../images/image";
import Modal from "../Modal/Modal";
import PayWithWallet from "./PayWithWallet/PayWithWallet";
import ScanWithQrCode from "./ScanWithQrCode/ScanWithQrCode";
import PaymentSuccesFull from "./PaymentSuccessFull/PaymentSuccesFull";

const PaymentMethod = () => {
  const [showPayWithWalletModal, setShowWithWalletModal] = useState(false);
  const [showScanWithQrCodeModal, setShowScanWithQrCodeModal] = useState(false);
  const [paymentSuccessFullModal, setPaymentSuccessFullModal] = useState(false);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>
              Accept payments from anyone & anywhere
            </h3>
            <p className={styles.text}>
              It’s the right time to join the crypto revolution. Join Copperx
              Now!
            </p>
          </div>

          <div className={styles.methods}>
            <p className={styles.tagline}>
              Continue with your preferred payment method
            </p>
            <div
              className={styles.tab}
              onClick={() => setShowWithWalletModal(true)}
            >
              <div className={styles.nameAndIcon}>
                <img src={wallet} alt="#" className={styles.icon} />
                <p className={styles.name}>Wallet</p>
              </div>
              <div className={styles.iconContaner}>
                <img src={polygon} alt="#" className={styles.icon} />
                <img src={ethereum} alt="#" className={styles.icon} />
                <img src={binance} alt="#" className={styles.icon} />
                <img src={solana} alt="#" className={styles.icon} />
              </div>
            </div>
            <div
              className={styles.tab}
              onClick={() => setShowScanWithQrCodeModal(true)}
            >
              <div className={styles.nameAndIcon}>
                <img src={scanQrCode} alt="#" className={styles.icon} />
                <p className={styles.name}>Scan QR code</p>
              </div>
              <div className={styles.iconContaner}>
                <img src={polygon} alt="#" className={styles.icon} />
                <img src={ethereum} alt="#" className={styles.icon} />
                <img src={binance} alt="#" className={styles.icon} />
                <img src={solana} alt="#" className={styles.icon} />
                <BsArrowRightShort className={styles.arrow} />
              </div>
            </div>{" "}
            <div className={styles.tab}>
              <div className={styles.nameAndIcon}>
                <img src={cards} alt="#" className={styles.icon} />
                <p className={styles.name}>Cards</p>
              </div>
              <div className={styles.iconContaner}>
                <img src={visaCard} alt="#" className={styles.cardIcon} />
                <img src={masterCard} alt="#" className={styles.cardIcon} />
                <img
                  src={americanExpress}
                  alt="#"
                  className={styles.cardIcon}
                />
              </div>
            </div>{" "}
            <div className={styles.tab}>
              <div className={styles.nameAndIcon}>
                <img src={coinbase} alt="#" className={styles.icon} />
                <p className={styles.name}>Coinbase Pay</p>
              </div>
            </div>{" "}
            <div className={styles.tab}>
              <div className={styles.nameAndIcon}>
                <img src={binancePay} alt="#" className={styles.icon} />
                <p className={styles.name}>Binance Pay</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showPayWithWalletModal && (
        <Modal setModal={setShowWithWalletModal}>
          <PayWithWallet
            setModal={setShowWithWalletModal}
            setShowScanWithQrCodeModal={setShowScanWithQrCodeModal}
            setPaymentSuccessFull={setPaymentSuccessFullModal}
          />
        </Modal>
      )}{" "}
      {showScanWithQrCodeModal && (
        <Modal setModal={setShowScanWithQrCodeModal}>
          <ScanWithQrCode setModal={setShowScanWithQrCodeModal} />
        </Modal>
      )}{" "}
      {paymentSuccessFullModal && (
        <Modal setModal={setPaymentSuccessFullModal}>
          <PaymentSuccesFull setModal={setPaymentSuccessFullModal} />
        </Modal>
      )}
    </>
  );
};

export default PaymentMethod;
