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
};


it(`Render WelcomeScreen`, () => {

  const tree = renderer
  .create(<MoviePage
    movies={movie}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
