import React, { useState } from "react";
import { PiCaretUpDownBold } from "react-icons/pi";
import styles from "./DropDown.module.css";

//showDropdown, setShowDropDown, data

const DropDown = ({
  showDropdown,
  setShowDropDown,
  label,
  data,
  className,
}) => {
  const [activeItem, setActiveItem] = useState(data[0]);
  return (
    <div
      className={styles.dropdownWrapper}
      style={{ fontSize: className && "14px" }}
    >
      <p className={[styles.label, className && styles.textSize].join(" ")}>
        {label}
      </p>
      <div className={styles.dropdown}>
        <div className={styles.nameAndIcon}>
          <img
            src={activeItem.icon}
            alt="#"
            className={[styles.icon, styles, className && styles.iconSize].join(
              " "
            )}
          />
          <p className={[styles.name, className && styles.textSize].join(" ")}>
            {activeItem.name}
          </p>
        </div>
        <PiCaretUpDownBold
          className={[styles.arrow, className && styles.arrowSize].join(" ")}
          onClick={() => setShowDropDown((prev) => !prev)}
        />

        {showDropdown && (
          <div className={styles.dropdownContainer}>
            {data.map((el, i) => (
              <div
                key={i}
                className={styles.dropdownItem}
                onClick={() => {
                  setActiveItem(el);
                  setShowDropDown(false);
                }}
              >
                <img
                  src={el.icon}
                  alt="#"
                  className={[
                    styles.icon,
                    styles,
                    className && styles.iconSize,
                  ].join(" ")}
                />
                <p
                  className={[styles.name, className && styles.textSize].join(
                    " "
                  )}
                >
                  {el.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
