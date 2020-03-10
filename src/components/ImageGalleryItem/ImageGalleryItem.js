import React from "react";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, alt, onSetLargeImage }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={onSetLargeImage}
    >
      <img
        className={styles.ImageGalleryItemImage}
        src={src}
        alt={alt}
      />
    </li>
  );
};

export default ImageGalleryItem;
