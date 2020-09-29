import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/app/app.jsx";
import store from "./redux/redux-store.js";
import {Provider} from "react-redux";
import {withApp} from "../src/hocs/with-app/withApp.js";


const WithAppContainer = withApp(AppContainer);


ReactDOM.render(
    <Provider store={store}>
      <WithAppContainer/>
    </Provider>, document.querySelector(`#root`)
);
