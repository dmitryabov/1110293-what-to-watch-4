import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};


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
  },
];

it(`Render App`, () => {
  const tree = renderer
  .create(<App
    movieName={Movie.movieName}
    genre={Movie.genre}
    year={Movie.year}
    movies={movies}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
