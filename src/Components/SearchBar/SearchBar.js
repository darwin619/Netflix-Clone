import React from "react";
import "./SearchBar.scss";
import { withRouter } from "react-router";
import { selectSearchItems } from "../../Redux/Search/search-selectors";
import { getSearchData } from "../../Redux/Search/search-actions";
import { connect } from "react-redux";
import { compose } from "redux";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPath: ""
    };
  }

  handleChange = event => {
    const { value } = event.target;
    if (
      Number(value.length) === 1 &&
      this.props.currentRoute !== "/searchresults"
    ) {
      this.setState({ currentPath: this.props.currentRoute }, () =>
        this.props.history.push("/searchresults")
      );
    } else if (Number(value.length) === 0) {
      this.props.history.push(`${this.state.currentPath}`);
    } else if (Number(value.length) > 1) {
      this.props.history.push("/searchresults");
    }
    return value ? this.props.dispatch(getSearchData(value)) : null;
  };

  render() {
    return (
      <div className="container-1">
        <div className="container-2">
          <span className="search-icon">
            <i className="fa fa-search"></i>
          </span>
          <input
            onChange={this.handleChange}
            type="search"
            id="search"
            placeholder="Movies, TV Shows..."
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchItems: selectSearchItems(state)
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SearchBar);
