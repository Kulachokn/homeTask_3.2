import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Spinner extends React.Component {
  render() {
    return <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />;
  }
}

export default Spinner;
