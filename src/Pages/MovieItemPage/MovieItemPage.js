import React from "react";
import ReactDOM from "react-dom";
import "./MovieItemPage.scss";
import { connect } from "react-redux";
import ItemPageOverviewContainer from "../../Components/ItemPageOverview/ItemPageOverviewContainer";
import {
  selectMovieItems,
  selectIsMovieFetching
} from "../../Redux/Movie/movie-selectors";
import { getMovies } from "../../Redux/Movie/movie-actions";

class MovieItemPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    const { isFetching } = this.props;
    console.log(this.props.isFetching);
    return (
      <div className="movie-item-page">
        <ItemPageOverviewContainer
          params={this.props.match.params}
          state={this.props.location ? this.props.location.state : ""}
          movies
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieData: selectMovieItems(state),
  isFetching: selectIsMovieFetching(state)
});

export default connect(mapStateToProps)(MovieItemPage);
