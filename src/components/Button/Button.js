import React from "react";
import styles from "../Button/Button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <>
      <button className={styles.Button} type="button" onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
};

export default Button;
