import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../Config/config";
import "./CollectionGridItem.scss";
import AddToList from "../AddToList/AddToList";

const CollectionGridItem = ({ item, listItems, addItem }) => {
  const { title, overview, backdrop_path, poster_path, name } = item;
  return (
    <div className="grid-item">
      <img
        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
        alt="movie"
        className="grid-item__img"
      />
      <img
        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${poster_path}`}
        alt="movie"
        className="grid-item__img grid-item__mobile-img"
      />
      <div className={`${title ? "grid-item__movie-text" : "grid-item__tv-text"}`}>
        <h1 className="grid-item__title">{title}</h1>
        <h1 className="grid-item__title">{name}</h1>
        <span className="grid-item__overview">{overview}</span>
        <AddToList item={item} />
      </div>
    </div>
  );
};

export default CollectionGridItem;
