import React, {PureComponent} from "react";


export const withMovieCard = (Component) => {
  class MovieCardComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false
      };

      this._onMouseEnterCardHandler = this._onMouseEnterCardHandler.bind(this);
      this._onMouseLeaveCardHandler = this._onMouseLeaveCardHandler.bind(this);
    }

    _onMouseEnterCardHandler() {
      this.setState({
        isPlaying: true
      });
    }

    _onMouseLeaveCardHandler() {
      this.setState({
        isPlaying: false
      });
    }
    render() {

      return <Component {...this.props}
        onMouseEnterCardHandler={this._onMouseEnterCardHandler}
        onMouseLeaveCardHandler={this._onMouseLeaveCardHandler}
        isPlay={this.state.isPlaying}/>;
    }

  }
  return MovieCardComponent;
};


