import React, { useState } from "react";

import {
  ethereum,
  polygon,
  scanQrCode,
  usdc,
  usdt,
} from "../../../images/image";
import { FiInfo } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

import DropDown from "../../DropDown/DropDown";
import styles from "./PayWithWallet.module.css";

const PayWithWallet = ({ setModal, setShowScanWithQrCodeModal }) => {
  const [showNetworks, setShowNetworks] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const [taxInfo, setTaxInfo] = useState("");
  const networks = [
    { icon: polygon, name: "Polygon" },
    { icon: usdc, name: "USDC" },

    { icon: ethereum, name: "Ethereum" },
    { icon: usdt, name: "USDT" },
  ];
  const coins = [
    { icon: usdc, name: "USDC" },
    { icon: ethereum, name: "Ethereum" },

    { icon: usdt, name: "USDT" },
    { icon: polygon, name: "Polygon" },
  ];
  return (
    <div className={styles.wrapper}>
      <MdOutlineClose
        className={styles.close}
        onClick={() => setModal(false)}
      />
      <h3 className={styles.title}>Pay with wallet</h3>
      <div className={styles.infoBox}>
        <div className={styles.grid}>
          <DropDown
            label="Network"
            data={networks}
            showDropdown={showNetworks}
            setShowDropDown={setShowNetworks}
          />{" "}
          <DropDown
            label="Coin"
            data={coins}
            showDropdown={showCoins}
            setShowDropDown={setShowCoins}
          />
        </div>
        <div className={styles.spaceBetween}>
          <p className={styles.text}>
            Currency conversion <FiInfo className={styles.info} />
          </p>
          <p className={styles.text}>
            1 USDC = {(10001).toLocaleString()} USDT
          </p>
        </div>{" "}
        <div className={styles.spaceBetween}>
          <p className={styles.text}>Amount to pay</p>
          <p className={styles.text}>
            1 USDC = {(13665).toLocaleString()} USDC
          </p>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="taxInfo" className={styles.label}>
          Tax information
        </label>
        <input
          id="taxInfo"
          name="taxInfo"
          placeholder="Enter tax info"
          type="text"
          value={taxInfo}
          onChange={(e) => setTaxInfo(e.target.value)}
          className={styles.input}
        />
      </div>
      <button className={styles.button}>
        Pay {(13685).toLocaleString()} USDC
      </button>
      <div
        className={styles.scanWithQrCode}
        onClick={() => {
          setShowScanWithQrCodeModal(true);
          setModal(false);
        }}
      >
        <img src={scanQrCode} alt="#" className={styles.qrCode} />
        <p className={styles.payWithQrCode}>Pay with OR Code</p>
      </div>
    </div>
  );
};

export default PayWithWallet;
