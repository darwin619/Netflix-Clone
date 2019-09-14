import React from "react";
import "./Movies.scss";
import { connect } from "react-redux";
import {
  selectMovieItems,
  selectIsMovieFetching
} from "../../Redux/Movie/movie-selectors";
import { getMovies } from "../../Redux/Movie/movie-actions";
import CollectionOverviewMovie from "../../Components/CollectionOverview/CollectionOverviewMovie";
import CollectionGridMovie from "../../Components/CollectionGrid/CollectionGridMovie";
import Footer from "../../Components/Footer/Footer";

class Movies extends React.Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="movies">
        <CollectionGridMovie movies />
        <CollectionOverviewMovie movies />
        {isFetching ? null : <Footer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieItems: selectMovieItems(state),
  isFetching: selectIsMovieFetching(state)
});

export default connect(mapStateToProps)(Movies);
