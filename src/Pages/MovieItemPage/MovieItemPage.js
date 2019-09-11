import React from "react";
import "./MovieItemPage.scss";
import { connect } from "react-redux";
import ItemPageOverview from "../../Components/ItemPageOverview/ItemPageOverview";
import { selectMovieItems } from "../../Redux/Movie/movie-selectors";
import { getMovies } from "../../Redux/Movie/movie-actions";

class MovieItemPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }

  render() {
    return (
      <div className="movie-item-page">
        <ItemPageOverview
          params={this.props.match.params}
          state={this.props.location ? this.props.location.state : ""}
          movies
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieData: selectMovieItems(state)
});

export default connect(mapStateToProps)(MovieItemPage);
