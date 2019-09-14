import React from "react";
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../Config/config";
import './ItemPageCast.scss';

class ItemPageCast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didLoad: false
    };
  }

  onLoad = () => {
    this.setState({ didLoad: true });
  };

  render() {
    const { profile_path, name } = this.props;
    const profileUrl = `${IMAGE_BASE_URL}${PROFILE_SIZE}`;
    const style = this.state.didLoad ? {} : { visibility: "hidden" };
    return (
      <div className="cast">
        <div className="cast__img-box">
          <img
            src={`${profileUrl}/${profile_path}`}
            style={style}
            alt="profile"
            className="cast__img"
            onLoad={this.onLoad}
          />
        </div>
        <span style={style} className="cast__name">{`${name}`}</span>
      </div>
    );
  }
}

export default ItemPageCast;
