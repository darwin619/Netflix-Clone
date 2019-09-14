import React from "react";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../Config/config";
import "./ItemPage.scss";
import { connect } from "react-redux";
import imdb from "../../Assets/imdb.png";
import star from "../../Assets/star.png";
import {
  selectMovieCast,
  selectMovieVideos
} from "../../Redux/Movie/movie-selectors";
import ItemPageFooter from "../ItemPageFooter/ItemPageFooter";
import { getAdditionalMovieData } from "../../Redux/Movie/movie-actions";
import { getAdditionalTVData } from "../../Redux/TVShow/tv-actions";
import Fade from "react-reveal/Fade";

class ItemPage extends React.Component {
  componentDidMount() {
    return this.props.movies
      ? this.props.dispatch(getAdditionalMovieData(this.props.item.id))
      : this.props.dispatch(getAdditionalTVData(this.props.item.id));
    window.scrollTo(0, 0);
  }

  render() {
    const { item, movies, tvshow } = this.props;
    const {
      title,
      name,
      overview,
      backdrop_path,
      poster_path,
      vote_average
    } = item;
    const background = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`;
    const poster = `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`;
    return (
      <div className="item-page">
        <img
          src={`${background}`}
          alt="background"
          className="item-page__bg"
        />
        <div className="item">
          <Fade>
            <div className="item__outer">
              <div className="item__inner">
                <div className="item__img-box">
                  <img src={`${poster}`} alt="poster" className="item__poster-img" />
                </div>
                <div className="item__text-box">
                  <h1 className="item__title">{title}</h1>
                  <h1 className="item__title">{name}</h1>
                  <span className="item__overview">{overview}</span>
                  <div className="item-rating">
                    <img src={imdb} alt="imdb" className="item-rating__imdb" />
                    <span className="item-rating__rank">{vote_average}/</span>
                    <span className="item-rating__ten">10</span>
                    <img src={star} alt="imdb" className="item-rating__star" />
                  </div>
                  <h1 className="item__cast-title">Cast</h1>
                  <ItemPageFooter movies={movies} tvshow={tvshow} item={item} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieCast: selectMovieCast(state),
  movieVideos: selectMovieVideos(state)
});

export default connect(mapStateToProps)(ItemPage);
