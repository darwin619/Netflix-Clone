import React from "react";
import Spinner from "../Spinner/Spinner";

const WithSpinnerMovie = WrappedComponent => 
  ({ isMovieGridLoading,isMovieOverviewLoading, ...otherProps }) => {
    
      return isMovieGridLoading
        ? <Spinner />
        : (isMovieOverviewLoading
          ? null
          : <WrappedComponent {...otherProps} />)
       
};

export default WithSpinnerMovie;
