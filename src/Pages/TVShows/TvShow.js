import React, { Suspense, lazy } from "react";
import "./TvShow.scss";
import { connect } from "react-redux";
import {
  selectTVItems,
  selectIsTVFetching
} from "../../Redux/TVShow/tv-selectors";
import { getTvShows } from "../../Redux/TVShow/tv-actions";

const CollectionGridTVShows = React.lazy(() => import("../../Components/CollectionGrid/CollectionGridTVShows"));

const CollectionOverviewTVShows = React.lazy(() => import("../../Components/CollectionOverview/CollectionOverviewTVShows"));

const Footer = React.lazy(() => import("../../Components/Footer/Footer"));

class TvShow extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTvShows());
  }

  render() {
    return (
      <div className="TV">
        <Suspense fallback={<div></div>}>
          <CollectionGridTVShows tvshow />
          <CollectionOverviewTVShows tvshow />
          <Footer />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tvItems: selectTVItems(state),
  isFetching: selectIsTVFetching(state)
});

export default connect(mapStateToProps)(TvShow);
