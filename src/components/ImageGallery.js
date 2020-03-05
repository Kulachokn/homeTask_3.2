import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({images, onLargeImage}) {
    return (
        <ul>
        {images.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        src={webformatURL}
                        alt="Изображение"
                        largeImage={() => onLargeImage(largeImageURL)} />
                )
            })}
</ul>
    );
}