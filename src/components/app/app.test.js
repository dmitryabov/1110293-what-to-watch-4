import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const movies = [
  {
    id: 6,
    src: `img/what-we-do-in-the-shadows.jpg`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    name: `What We Do in the Shadows`,
    genre: `drama`,
    released: `2012`,
    rating: `8.4`,
    count: `233`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 7,
    src: `img/johnny-english.jpg`,
    poster: `img/johnny-english.jpg`,
    name: `Johnny English`,
    genre: `drama`,
    released: `2012`,
    rating: `5.4`,
    count: `237`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

const comments = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Dima Muir`
    },
    rating: 1.1,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `December 4, 2010`
  },
  {
    id: 2,
    user: {
      id: 2,
      name: `Kate Muir`
    },
    rating: 3.3,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `December 14, 2006`
  },
];

const genres = [
  `Drama`,
  `Anime`
];
const activeGenre = `Drama`;


it(`Render App`, () => {
  const store = mockStore({
    movies,
    comments,
    activeGenre,
    genres,
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <App
          movies={movies}
          comments={comments}
          activeGenre={`activeGenre`}
          genres={genres}
          onMovieImgClick={() => {}}
          onMovieTitleClick={() => {}}
          currentMovie={2}
        />
      </Provider>, {
        createNodeMock() {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
