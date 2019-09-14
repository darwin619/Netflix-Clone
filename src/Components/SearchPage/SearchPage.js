import React from "react";
import "./SearchPage.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectSearchItems } from "../../Redux/Search/search-selectors";
import { withRouter } from "react-router";
import SearchItem from "../SearchItem/SearchItem";

const SearchPage = ({ searchItems }) => {
  return (
    <div className="search-page">
      <h1 className="search-page__title">Search Results</h1>
      <div className="search-page__outer">
        <div className="search-page__inner">
          {searchItems.map(item =>
            item.poster_path ? <SearchItem key={item.id} item={item} /> : null
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchItems: selectSearchItems(state)
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SearchPage);
