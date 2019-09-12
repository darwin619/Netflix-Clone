import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsTVFetching } from "../../Redux/TVShow/tv-selectors";

import WithSpinnerTVShows from "../WithSpinner/WithSpinnerTVShows";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isTVOverviewLoading: selectIsTVFetching
});

const CollectionOverviewTVShows = compose(
  connect(mapStateToProps),
  WithSpinnerTVShows
)(CollectionOverview);

export default CollectionOverviewTVShows;