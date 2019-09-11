import React from "react";
import "./ItemPageFooter.scss";
import { connect } from "react-redux";
import {
  selectMovieCast,
  selectMovieVideos
} from "../../Redux/Movie/movie-selectors";
import { selectTVCast, selectTVVideos } from "../../Redux/TVShow/tv-selectors";
import { faPlay, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemPageCast from "../ItemPageCast/ItemPageCast";
import { TRAILER_LINK } from "../../Config/config";
import { addItem, removeItem } from "../../Redux/List/list-actions";
import { selectListItems } from "../../Redux/List/list-selectors";

const ItemPageFooter = ({
  item,
  movieCast,
  movieVideos,
  addItem,
  removeItem,
  tvCast,
  tvVideos,
  movies,
  tvshow,
  listItems
}) => {
  const existingItem = listItems.filter(listItem => listItem.id === item.id);
  return (
    <div className="item-page-footer">
      <div className="item-page-container">
        {movies && movieCast.length
          ? movieCast
              .filter((item, index) => index < 4)
              .map(({ id, profile_path, ...otherProps }) =>
                profile_path ? (
                  <ItemPageCast
                    key={id}
                    profile_path={profile_path}
                    {...otherProps}
                  />
                ) : null
              )
          : null}
        {tvshow && tvCast.length
          ? tvCast
              .filter((item, index) => index < 4)
              .map(({ id, profile_path, ...otherProps }) =>
                profile_path ? (
                  <ItemPageCast
                    key={id}
                    profile_path={profile_path}
                    {...otherProps}
                  />
                ) : null
              )
          : null}
      </div>

      <div className="buttons">
        {existingItem.length ? (
          <button className="btn" onClick={() => removeItem(item)}>
            <FontAwesomeIcon icon={faCheck} className="icon" />
            Added To List
          </button>
        ) : (
          <button className="btn" onClick={() => addItem(item)}>
            <FontAwesomeIcon icon={faPlus} className="icon" />
            My List
          </button>
        )}

        <button
          onClick={() => {
            return movies
              ? window.open(`${TRAILER_LINK}${movieVideos}`, "_blank")
              : window.open(`${TRAILER_LINK}${tvVideos}`, "_blank");
          }}
          className="btn"
        >
          <FontAwesomeIcon icon={faPlay} className="icon" />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

const mapStateToProps = state => ({
  movieCast: selectMovieCast(state),
  movieVideos: selectMovieVideos(state),
  tvCast: selectTVCast(state),
  tvVideos: selectTVVideos(state),
  listItems: selectListItems(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPageFooter);
