import React, {PureComponent} from "react";


export const withMovieList = (Component) => {
  class MovieListComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: false
      };
      this._mouseEnterCardHandler = this._mouseEnterCardHandler.bind(this);
      this._mouseLeaveCardHandler = this._mouseLeaveCardHandler.bind(this);
    }

    _mouseEnterCardHandler(cardId) {
      this.setState({activeCard: cardId});
    }

    _mouseLeaveCardHandler() {
      this.setState({activeCard: false});
    }
    render() {

      return <Component {...this.props}
        onMouseEnterCardHandler={this._mouseEnterCardHandler}
        onMouseLeaveCardHandler={this._mouseLeaveCardHandler}
      />;
    }

  }
  return MovieListComponent;
};


