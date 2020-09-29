import {takeEvery, put, call} from 'redux-saga/effects';
import filmAdapter from '../adapter/film';
import { SET_MOVIES, REQUEST_MOVIES } from './movies/movies-reducer.js';


export function* sagaWatcher() {
  yield takeEvery(REQUEST_MOVIES, sagaWorker);
}

function* sagaWorker() {
 const movies = yield call(getFilms)
 yield put({type: SET_MOVIES, movies})
}

async function getFilms() {
    const response = await fetch(`https://4.react.pages.academy/wtw/films`)
    const movie  = await response.json()
    return movie.map((film) => filmAdapter(film));
} 
