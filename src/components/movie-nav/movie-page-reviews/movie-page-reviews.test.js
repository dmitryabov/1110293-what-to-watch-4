import React from "react";
import renderer from "react-test-renderer";
import MoviePageReviews from "./movie-page-reviews.jsx";


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
  }
];


it(`Render MoviePageReviews`, () => {

  const tree = renderer
  .create(<MoviePageReviews
    comments={comments}

  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
