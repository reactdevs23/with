import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsFillClipboard2Fill } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
  const [copy, setCopy] = useState(false);

  const networks = [
    { icon: polygon, name: "Polygon" },
    { icon: usdc, name: "USDC" },

    { icon: ethereum, name: "Ethereum" },
    { icon: usdt, name: "USDT" },
  ];
  const coins = [
    { icon: usdt, name: "USDT" },
    { icon: ethereum, name: "Ethereum" },
    { icon: usdc, name: "USDC" },

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
        <p className={[styles.address, copy && styles.copy].join(" ")}>
          0x14f4895Aa65b5DF634f8B75893c3e7ba2BbBB093
          <CopyToClipboard text="0x14f4895Aa65b5DF634f8B75893c3e7ba2BbBB093">
            <BsFillClipboard2Fill
              className={styles.pasteIcon}
              onClick={() => {
                setCopy(true);
                setTimeout(() => setCopy(false), 300);
              }}
            />
          </CopyToClipboard>
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
