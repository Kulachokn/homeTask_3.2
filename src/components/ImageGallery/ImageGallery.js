import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ images, onSetLargeImage }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt="Изображение"
            onSetLargeImage={() => onSetLargeImage(largeImageURL)}
          />
        );
      })}
    </ul>
  );
}
