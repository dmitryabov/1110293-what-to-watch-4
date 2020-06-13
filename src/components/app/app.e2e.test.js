import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "../welcome-screen/welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

const Movie = {
  movieName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `The Man Called Flintstone`,
  `Casper the Friendly Ghost`, `Peppa Pig`, `Aladdin`, `Finding Nemo`, `Toy Story`];

it(`Should welcome button be pressed`, () => {
  const onMovieCardTitleButtonHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        movieName={Movie.movieName}
        genre={Movie.genre}
        year={Movie.year}
        movieNames={movieNames}
        onMovieCardTitleButtonHandler={onMovieCardTitleButtonHandler}
      />
  );

  const welcomeButton = welcomeScreen.find(`.movie-card__title`);

  welcomeButton.props().onClick();

  expect(onMovieCardTitleButtonHandler.mock.calls.length).toBe(1);
});
