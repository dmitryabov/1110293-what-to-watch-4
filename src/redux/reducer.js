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
  genre: `All genres`,
  movies,
  comments
};


const genreReduser = (state = initialState, action = {type: movieGenreTab.all}) => {
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
