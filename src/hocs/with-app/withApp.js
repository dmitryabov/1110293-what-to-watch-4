import React, {PureComponent} from "react";


export const withApp = (Component) => {
  class AppComponent extends PureComponent {
    constructor(props) {
      super(props);

      this._handleMovieImgClick = this._handleMovieImgClick.bind(this);
      this._handleMovieTitleClick = this._handleMovieTitleClick.bind(this);

      this.state = {
        page: -1,
        currentMovie: 1
      };
    }

    _handleMovieImgClick(cardId) {
      this.setState({page: 1, currentMovie: cardId});
    }

    _handleMovieTitleClick(cardId) {
      this.setState({page: 1, currentMovie: cardId});
    }

    render() {

      return <Component {...this.props}
        onMovieTitleClick={this._handleMovieTitleClick}
        onMovieImgClick={this._handleMovieImgClick}
        currentMovie={this.state.currentMovie}
        page={this.state.page}

      />;
    }


  }
  return AppComponent;
};

