import genreReduser from './reducer.js';
import moviesReduser from './movies/movies-reducer.js';

import thunkMiddleware from 'redux-thunk';


const {createStore, combineReducers, applyMiddleware, compose} = require(`redux`);


let redusers = combineReducers({
  genreReduser,
  moviesReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
