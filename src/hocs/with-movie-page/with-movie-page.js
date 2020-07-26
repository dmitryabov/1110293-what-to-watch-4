import React, {PureComponent} from "react";


const movieTabType = {
  overview: `Overview`,
  details: `Details`,
  reviews: `Reviews`
};

export const withMoviePage = (Component) => {
  class MoviePageComponent extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        activeTab: movieTabType.overview
      };

      this._handlerClickOnTab = this._handlerClickOnTab.bind(this);
    }

    _handlerClickOnTab(tab) {
      this.setState({
        activeTab: tab
      });
    }

    render() {

      return <Component {...this.props}
        clickOnTab={this._handlerClickOnTab}
        activeTab={this.state.activeTab}
      />;
    }

  }
  return MoviePageComponent;
};


