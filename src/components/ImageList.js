import React from "react";
import "./ImageList.css";
import ImageCard from "../components/ImageCard";

const ImageList = (props) => {
  // takes the images from the props, and maps each ImageCard with the respective image as a prop.
  const images = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });
  // image-list class to display the images as grid
  return <div className="image-list">{images}</div>;
};

export default ImageList;
