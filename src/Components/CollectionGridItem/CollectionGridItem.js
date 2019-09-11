import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../Config/config";
import "./CollectionGridItem.scss";
import AddToList from "../AddToList/AddToList";

const CollectionGridItem = ({ item, listItems, addItem }) => {
  const { title, overview, backdrop_path, name } = item;
  return (
    <div className="grid-item">
      <img
        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
        alt="movie"
        className="grid-image"
      />
      <div className={`${title ? "grid-movie-text" : "grid-tv-text"}`}>
        <h1 className="grid-name">{title}</h1>
        <h1 className="grid-name">{name}</h1>
        <span className="grid-overview">{overview}</span>
        <AddToList item={item} />
      </div>
    </div>
  );
};

export default CollectionGridItem;
