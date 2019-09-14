import React from "react";
import "./TvShow.scss";
import { connect } from "react-redux";
import {
  selectTVItems,
  selectIsTVFetching
} from "../../Redux/TVShow/tv-selectors";
import { getTvShows } from "../../Redux/TVShow/tv-actions";
import CollectionOverviewTVShows from "../../Components/CollectionOverview/CollectionOverviewTVShows";
import CollectionGridTVShows from "../../Components/CollectionGrid/CollectionGridTVShows";
import Footer from "../../Components/Footer/Footer";

class TvShow extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTvShows());
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="TV">
        <CollectionGridTVShows tvshow />
        <CollectionOverviewTVShows tvshow />
        {isFetching ? null : <Footer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tvItems: selectTVItems(state),
  isFetching: selectIsTVFetching(state)
});

export default connect(mapStateToProps)(TvShow);
