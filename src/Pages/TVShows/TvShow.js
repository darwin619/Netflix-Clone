import React from "react";
import "./TvShow.scss";
import { connect } from "react-redux";
import {
  selectTVItems,
  selectTVGridItems
} from "../../Redux/TVShow/tv-selectors";
import { getTvShows, getTvShowsGrid } from "../../Redux/TVShow/tv-actions";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import CollectionGrid from "../../Components/CollectionGrid/CollectionGrid";
import Fade from "react-reveal/Fade";
import Footer from "../../Components/Footer/Footer";

class TvShow extends React.Component {
  constructor() {
    super();
    this.state = {
      firstLoad: false,
      secondLoad: false,
      thirdLoad: false
    };
  }

  componentDidMount() {
    this.props.dispatch(getTvShows());
    this.props.dispatch(getTvShowsGrid());
    setTimeout(() => {
      this.setState({ firstLoad: !this.state.firstLoad });
    }, 10);
    setTimeout(() => {
      this.setState({ secondLoad: !this.state.secondLoad });
    }, 500);
    setTimeout(() => {
      this.setState({ thirdLoad: !this.state.thirdLoad });
    }, 700);
  }

  render() {
    const { firstLoad, secondLoad, thirdLoad } = this.state;
    return (
      <div className="TV">
        {firstLoad ? <CollectionGrid tvshow /> : null}
        {secondLoad ? <CollectionOverview tvshow /> : null}
        {thirdLoad ? <Footer /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tvItems: selectTVItems(state),
  tvShowGridItems: selectTVGridItems(state)
});

export default connect(mapStateToProps)(TvShow);
