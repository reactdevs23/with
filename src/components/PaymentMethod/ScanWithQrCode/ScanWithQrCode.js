import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsFillClipboard2Fill } from "react-icons/bs";
import {
  ethereum,
  polygon,
  qrCode,
  scanQrCode,
  usdc,
  usdt,
} from "../../../images/image";

import DropDown from "../../DropDown/DropDown";
import styles from "./ScanWithQrCode.module.css";

const ScanWithQrCode = ({ setModal }) => {
  const [showNetworks, setShowNetworks] = useState(false);
  const [showCoins, setShowCoins] = useState(false);

  const networks = [
    { icon: ethereum, name: "USDC" },
    { icon: usdc, name: "USDC" },
    { icon: usdt, name: "USDT" },
    { icon: polygon, name: "Polygon" },
  ];
  const coins = [
    { icon: ethereum, name: "USDC" },
    { icon: usdc, name: "USDC" },
    { icon: usdt, name: "USDT" },
    { icon: polygon, name: "Polygon" },
  ];
  return (
    <div className={styles.wrapper}>
      {" "}
      <MdOutlineClose
        className={styles.close}
        onClick={() => setModal(false)}
      />
      <div className={styles.header}>
        <img src={scanQrCode} alt="#" className={styles.qrCodeIcon} />
        <p className={styles.title}>Scan QR code</p>
      </div>
      <div className={styles.grid}>
        <DropDown
          label="Network"
          className={true}
          data={networks}
          showDropdown={showNetworks}
          setShowDropDown={setShowNetworks}
        />{" "}
        <DropDown
          label="Coin"
          data={coins}
          className={true}
          showDropdown={showCoins}
          setShowDropDown={setShowCoins}
        />
      </div>
      <img src={qrCode} alt="#" className={styles.qrCode} />
      <div className={styles.infoContainer}>
        <p className={styles.address}>
          0x14f4895Aa65b5DF634f8B75893c3e7ba2BbBB093
          <BsFillClipboard2Fill className={styles.pasteIcon} />
        </p>
        <p className={styles.text}>
          {" "}
          Pay only in <img src={usdt} alt="#" className={styles.icon} /> USDT on{" "}
          <img src={polygon} alt="#" className={styles.icon} /> Polygon to this
          address
        </p>
      </div>
    </div>
  );
};

export default ScanWithQrCode;