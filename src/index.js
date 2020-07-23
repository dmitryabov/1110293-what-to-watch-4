import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/app/app.jsx";
import {createStore} from "redux";
import genreReduser from "./redux/reducer.js";
import {Provider} from "react-redux";


const store = createStore(
    genreReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


ReactDOM.render(
    <Provider store={store}>
      <AppContainer
      /></Provider>, document.querySelector(`#root`)
);
