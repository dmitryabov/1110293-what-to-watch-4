import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";


const movie = {
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
};


it(`Render MoviePageContaiter`, () => {

  const tree = renderer
  .create(<MoviePageDetails
    movies={movie}

  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
