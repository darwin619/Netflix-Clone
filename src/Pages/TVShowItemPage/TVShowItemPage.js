import React from "react";
import ReactDOM from "react-dom";
import "./TVShowItemPage.scss";
import { connect } from "react-redux";
import ItemPageOverview from "../../Components/ItemPageOverview/ItemPageOverview";
import { selectTVItems } from "../../Redux/TVShow/tv-selectors";
import { getTvShows } from "../../Redux/TVShow/tv-actions";

class TVShowItemPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTvShows());
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    return (
      <div className="movie-item-page">
        <ItemPageOverview
          params={this.props.match.params}
          state={this.props.location ? this.props.location.state : ""}
          tvshow
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tvItems: selectTVItems(state)
});

export default connect(mapStateToProps)(TVShowItemPage);
