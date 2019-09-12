import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsMovieFetching } from "../../Redux/Movie/movie-selectors";

import WithSpinnerMovie from "../WithSpinner/WithSpinnerMovie";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isMovieOverviewLoading: selectIsMovieFetching,
});

const CollectionOverviewMovie = compose(
  connect(mapStateToProps),
  WithSpinnerMovie
)(CollectionOverview);

export default CollectionOverviewMovie;
