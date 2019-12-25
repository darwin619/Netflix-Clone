import React from "react";
import { IMAGE_BASE_URL, GRID_IMAGE_SIZE } from "../../Config/config";
import "./CollectionItem.scss";
import Truncate from "../../Utils/Truncate";
import { withRouter } from "react-router";
import { FixString } from "../../Utils/FixString";
import AddToList from "../AddToList/AddToList";

const CollectionItem = ({ item,movies,tvshow,history}) => {
  const { title, overview, backdrop_path, name } = item;
  const para = Truncate(overview, 155, " ..read more");
  var titlePath = movies ? FixString(title) : null;
  var namePath = tvshow ? FixString(name) : null;
  return (
    <div className="collection-item">
      <div onClick={() => {
          return movies
            ? history.push(`/movies/${titlePath}`)
            : history.push(`/tvshows/${namePath}`);
        }}
      >
        <img
          src={`${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}${backdrop_path}`}
          alt="movie"
          className="collection-item__movie-image"
        />
        <div className="collection-item__text">
          <h1 className="collection-item__title">{title}</h1>
          <h1 className="collection-item__title">{name}</h1>
          <span className="collection-item__overview">{para}</span>
        </div>
      </div>
      <div className="collection-item__addtolist">
        <AddToList item={item} />
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
