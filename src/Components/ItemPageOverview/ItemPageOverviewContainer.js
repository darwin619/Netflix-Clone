import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsMovieFetching } from "../../Redux/Movie/movie-selectors";

import WithSpinnerItem from "../WithSpinner/WithSpinnerItem";
import ItemPageOverview from "./ItemPageOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsMovieFetching,
});

const ItemPageOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinnerItem
)(ItemPageOverview);

export default ItemPageOverviewContainer;
