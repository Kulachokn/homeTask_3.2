import React from "react";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, onSetLargeImage }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onSetLargeImage(largeImageURL)}
    >
      <img
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt="Изображение"
      />
    </li>
  );
};

export default ImageGalleryItem;
