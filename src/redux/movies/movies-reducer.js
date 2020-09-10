import {movieAPI} from "../../api/api.js";


const MOVIES = `MOVIES`;

const extend = (a, b) => {
  return Object.assign({}, a, b);
};


const initialState = {
  movies: [
    {
      id: 1,
      runTime: 111,
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      name: `Fantastic Beasts`,
      genre: `Comedies`,
      released: 2011,
      rating: 4,
      count: 33,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European 
      ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
      junior lobby boy, becomes Gustave's friend and protege.`,
      director: `Ivan Andreson`,
      starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    }
  ]
};


const moviesReduser = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES: {
      return extend(state, {
        movies: action.movies,
      });
    }
    default:
      return state;
  }
};


export const setMovies = (movies) => {
  return {type: MOVIES, movies};
};

export const getMovies = () => {
  return (dispatch) => {
    movieAPI.getMovies().then((data) => {
      dispatch(setMovies(data));
    });
  };
};


export default moviesReduser;
