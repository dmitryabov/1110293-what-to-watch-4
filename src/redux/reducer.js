import movies from '../mocks/movies.js';
import comments from '../mocks/comments.js';


const extend = (a, b) => {
  return Object.assign({}, a, b);
};


const GENRE = `GENRE`;

const movieGenreTab = {
  all: `All genres`,
  comedies: `Comedies`,
  crime: `Crime`,
  documentary: `Documentary`,
  drama: `Dramas`,
  horror: `Horror`,
  kids: `Kids & Family`,
  romance: `Romance`,
  sci: `Sci-Fi`,
  thrillers: `Thrillers`
};

const initialState = {
  genre: null,
  movies,
  comments
};


const getFilteredMovies = (genre) => {
  const allMovies = initialState.movies;

  if (genre === movieGenreTab.all) {
    return allMovies;
  }

  const filteredMovies = allMovies.filter((movie) => movie.genre === genre);

  return filteredMovies;
};


const genreReduser = (state = initialState, action) => {
  switch (action.type) {
    case GENRE: {
      const filteredMovies = getFilteredMovies(action.genre);
      return extend(state, {
        genre: action.genre,
        movies: filteredMovies
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
