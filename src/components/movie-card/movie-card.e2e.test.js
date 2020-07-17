import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const movie =
  {
    id: 1,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`
  };

it(`Click on movie title`, () => {
  const onMovieCardClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={onMovieCardClick}
        onMouseEnterCard={() => {}}
        onMouseLeaveCard={() => {}}
      />
  );

  const movieCardImage = movieCard.find(`.small-movie-card__image`);
  movieCardImage.props().onClick();
  expect(onMovieCardClick.mock.calls.length).toBe(1);
});


it(`Mouse hover on movie card`, () => {
  const onMouseEnterCard = jest.fn();
  const onMouseLeaveCard = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={() => {}}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={onMouseLeaveCard}
      />
  );

  const movieCardImage = movieCard.find(`.catalog__movies-card`);
  movieCardImage.props().onMouseEnter();
  expect(onMouseEnterCard.mock.calls.length).toBe(1);
});

it(`Mouse  movie card`, () => {
  const onMouseEnterCard = jest.fn();
  const onMouseLeaveCard = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={() => {}}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={onMouseLeaveCard}
      />
  );

  const movieCardImage = movieCard.find(`.catalog__movies-card`);
  movieCardImage.props().onMouseLeave();
  expect(onMouseLeaveCard.mock.calls.length).toBe(1);
});

it(`the desired movie comes to the function`, () => {
  const onMouseEnterCard = jest.fn((id) => id);

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieCardClick={() => {}}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={() => {}}
      />
  );

  movieCard.simulate(`mouseenter`);
  expect(onMouseEnterCard.mock.results[0].value).toBe(movie.id);
});
