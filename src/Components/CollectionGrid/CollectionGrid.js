import React from "react";
import "./CollectionGrid.scss";
import CollectionGridItem from "../CollectionGridItem/CollectionGridItem";
import { connect } from "react-redux";
import { selectMovieGridItems } from "../../Redux/Movie/movie-selectors";
import { selectTVGridItems } from "../../Redux/TVShow/tv-selectors";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LeftGridArrow, RightGridArrow } from "../../Utils/GridScrollArrows";

class CollectionGrid extends React.Component {
  constructor() {
    super();
    this.gridRef = React.createRef();
  }

  render() {
    const { movieGridItems, tvShowGridItems, movies, tvshow } = this.props;
    return (
      <div className="outer-grid">
        <span>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="left"
            onClick={() => LeftGridArrow(this.gridRef)}
          />
        </span>
        <div className="collection-grid" ref={this.gridRef}>
          <div className="grid-preview">
            {movies
              ? movieGridItems.map(item => (
                  <CollectionGridItem key={item.id} item={item} />
                ))
              : null}
            {tvshow
              ? tvShowGridItems.map(item => (
                  <CollectionGridItem key={item.id} item={item} />
                ))
              : null}
          </div>
          <span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="right"
            onClick={() => RightGridArrow(this.gridRef)}
          />
        </span>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieGridItems: selectMovieGridItems(state),
  tvShowGridItems: selectTVGridItems(state)
});

export default connect(mapStateToProps)(CollectionGrid);
