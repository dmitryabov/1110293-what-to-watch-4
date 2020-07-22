import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";


const movie = {
  id: 2,
  src: `img/bohemian-rhapsody.jpg`,
  poster: `img/bohemian-rhapsody.jpg`,
  name: `Bohemian Rhapsody`,
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
};


const movies = [
  {
    id: 1,
    runTime: 111,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`,
    genre: `comedy`,
    released: `2012`,
    rating: `3.3`,
    count: `2113`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Ivan Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 2,
    runTime: 181,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    genre: `comedy`,
    released: `1912`,
    rating: `5.5`,
    count: `255`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Dima Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 3,
    runTime: 511,
    src: `img/macbeth.jpg`,
    poster: `img/macbeth.jpg`,
    name: `Macbeth`,
    genre: `anime`,
    released: `2222`,
    rating: `2.2`,
    count: `222`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
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

it(`Render WelcomeScreen`, () => {

  const tree = renderer
  .create(<MoviePage
    movie={movie}
    movies={movies}
    comments={comments}
    onMovieImgClick={() => {}}
    onMovieTitleClick={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
