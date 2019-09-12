import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsTVFetching } from "../../Redux/TVShow/tv-selectors";

import WithSpinnerTVShows from "../WithSpinner/WithSpinnerTVShows";
import CollectionGrid from "./CollectionGrid";

const mapStateToProps = createStructuredSelector({
  isTVGridLoading: selectIsTVFetching
});

const CollectionGridTVShows = compose(
  connect(mapStateToProps),
  WithSpinnerTVShows
)(CollectionGrid);

export default CollectionGridTVShows;
