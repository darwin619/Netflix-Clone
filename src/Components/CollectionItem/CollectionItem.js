import React from "react";
import { IMAGE_BASE_URL, GRID_IMAGE_SIZE } from "../../Config/config";
import "./CollectionItem.scss";
import Truncate from "../../Utils/Truncate";
import { withRouter } from "react-router";
import { FixString } from "../../Utils/FixString";
import AddToList from "../AddToList/AddToList";

const CollectionItem = ({item,movies,tvshow,history,addItem,listItems}) => {
  const { title, overview, backdrop_path, name } = item;
  const para = Truncate(overview, 155, " ..read more");
  var titlePath = movies ? FixString(title) : null;
  var namePath = tvshow ? FixString(name) : null;
  return (
    <div className="box">
      <div
        className="box-inner"
        onClick={() => {
          return movies
            ? history.push(`/movies/${titlePath}`)
            : history.push(`/tvshows/${namePath}`);
        }}
      >
        <img
          src={`${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}${backdrop_path}`}
          alt="movie"
          className="movie-image"
        />
        <div className="text">
          <h1 className="movie-name">{title}</h1>
          <h1 className="movie-name">{name}</h1>
          <span className="overview">{para}</span>
        </div>
      </div>
      <div className="item-addtolist">
        <AddToList item={item} />
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
