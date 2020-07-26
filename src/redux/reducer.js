import movies from '../mocks/movies.js';
import comments from '../mocks/comments.js';

const GENRE = `GENRE`;
const ACTIVE_TYPE_ALL_GENRE = `All genres`;
const extend = (a, b) => {
  return Object.assign({}, a, b);
};


const getMovieGenres = (arrayOfMovies) => {
  const typeGenres = [ACTIVE_TYPE_ALL_GENRE];

  arrayOfMovies.forEach((movie) => {
    typeGenres.push(movie.genre);
  });

  return Array.from(new Set(typeGenres));
};


const initialState = {
  genres: getMovieGenres(movies),
  movies,
  comments,
  genre: ACTIVE_TYPE_ALL_GENRE
};


const genreReduser = (state = initialState, action) => {
  switch (action.type) {
    case GENRE: {
      return extend(state, {
        genre: action.genre,
        movies,
      });
    }
    default:
      return state;
  }
};


export const getMovieGenre = (genre) => {
  return {type: GENRE, genre};
};


export default genreReduser;
