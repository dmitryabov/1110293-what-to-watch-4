import React, {PureComponent} from "react";


export const withWelcomeScreen = (Component) => {
  class WelcomeScreenComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        countMovie: 8
      };

      this._handlerClickOnButton = this._handlerClickOnButton.bind(this);
    }


    _handlerClickOnButton() {
      this.setState({
        countMovie: this.state.countMovie + 8
      });
    }

    render() {

      return <Component {...this.props}
        clickOnButton={this._handlerClickOnButton}
        countMovie={this.state.countMovie}
      />;
    }

  }
  return WelcomeScreenComponent;
};


