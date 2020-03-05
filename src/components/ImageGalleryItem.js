import React from "react";

const ImageGalleryItem = ({ src, largeImage }) => {
    return (
    <li>
        <img src={src} alt="Изображение" onClick={largeImage}/>
    </li>
    )
};

export default ImageGalleryItem;