import React from "react";
import Spinner from "../Spinner/Spinner";

const WithSpinnerTVShows = WrappedComponent => 
  ({ isTVGridLoading,isTVOverviewLoading, ...otherProps }) => {

    return isTVGridLoading
    ? <Spinner />
    : (isTVOverviewLoading
      ? null
      : <WrappedComponent {...otherProps} />)
       
};

export default WithSpinnerTVShows;
