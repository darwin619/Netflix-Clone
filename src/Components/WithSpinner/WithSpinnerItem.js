import React from "react";
import Spinner from "../Spinner/Spinner";

const WithSpinnerItem = WrappedComponent => 
  ({ isLoading, ...otherProps }) => {
    
     return isLoading
        ? <Spinner />
        : <WrappedComponent {...otherProps} />
       
};

export default WithSpinnerItem;
