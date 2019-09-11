import React from "react";
import "./Movies.scss";
import { connect } from "react-redux";
import {
  selectMovieItems,
  selectMovieGridItems
} from "../../Redux/Movie/movie-selectors";
import { getMovies, getMovieGrid } from "../../Redux/Movie/movie-actions";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import CollectionGrid from "../../Components/CollectionGrid/CollectionGrid";
import Fade from "react-reveal/Fade";
import Footer from "../../Components/Footer/Footer";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      firstLoad: false,
      secondLoad: false,
      thirdLoad: false
    };
  }

  componentDidMount() {
    this.props.dispatch(getMovieGrid());
    this.props.dispatch(getMovies());
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
      <div className="movies">
        {firstLoad ? <CollectionGrid movies /> : null}
        {secondLoad ? <CollectionOverview movies /> : null}
        {thirdLoad ? <Footer /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieGridItems: selectMovieGridItems(state),
  movieItems: selectMovieItems(state)
});

export default connect(mapStateToProps)(Movies);
