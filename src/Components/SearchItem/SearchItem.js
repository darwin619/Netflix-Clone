import React from "react";
import "./SearchItem.scss";
import { withRouter } from "react-router";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Config/config";
import imdb from "../../Assets/imdb.png";
import star from "../../Assets/star.png";
import { FixString } from "../../Utils/FixString";
import AddToList from "../AddToList/AddToList";

const SearchItem = ({ item, history, ListItems }) => {
  const { id, title, poster_path, vote_average, name } = item;
  var titlePath = title ? FixString(title) : null;
  var namePath = name ? FixString(name) : null;
  return (
    <div className="search-item">
      <div className="search-item__rating-container">
        <span className="search-item__rating">
          <img src={imdb} alt="imdb" className="search-item__imdb" />
          <span className="search-item__rank">{vote_average}/</span>
          <span className="search-item__ten">10</span>
          <img src={star} alt="imdb" className="search-item__star" />
        </span>
      </div>
      <div className="search-item__addtolist">
        <AddToList item={item} />
      </div>
      <div
        className="search-item__img-box"
        onClick={() => {
          return title
            ? history.push({ pathname: `/movies/${titlePath}`, state: { id } })
            : history.push({ pathname: `/tvshows/${namePath}`, state: { id } });
        }}
      >
        <img
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
          alt="movie"
          className="search-item__img"
        />
      </div>

      <div className="search-item__text">
        <h1 className="search-item__title">{title}</h1>
        <h1 className="search-item__title">{name}</h1>
      </div>
    </div>
  );
};

export default withRouter(SearchItem);
