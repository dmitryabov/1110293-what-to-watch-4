import genreReduser from './reducer.js';
import moviesReduser from './movies/movies-reducer.js';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './sagas.js';


const saga = createSagaMiddleware();


const {createStore, combineReducers, applyMiddleware, compose} = require(`redux`);


let redusers = combineReducers({
  genreReduser,
  moviesReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(saga)));
saga.run(sagaWatcher);

export default store;
