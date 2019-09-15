import React, { Suspense, lazy } from "react";
import "./Movies.scss";
import { connect } from "react-redux";
import {
  selectMovieItems,
  selectIsMovieFetching
} from "../../Redux/Movie/movie-selectors";
import { getMovies } from "../../Redux/Movie/movie-actions";
import CollectionGridMovie from "../../Components/CollectionGrid/CollectionGridMovie";
const CollectionOverviewMovie = React.lazy(() =>
  import("../../Components/CollectionOverview/CollectionOverviewMovie")
);
const Footer = React.lazy(() => import("../../Components/Footer/Footer"));

class Movies extends React.Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }

  render() {
    return (
      <div className="movies">
        <CollectionGridMovie movies />
        <Suspense fallback={<div></div>}>
          <CollectionOverviewMovie movies />
          <Footer />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieItems: selectMovieItems(state),
  isFetching: selectIsMovieFetching(state)
});

export default connect(mapStateToProps)(Movies);
