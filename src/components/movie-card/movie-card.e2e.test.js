import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const movie =
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
};

it(`Click on movie title`, () => {
  const onMovieImgClick = jest.fn();


  const movieCard = shallow(
      <MovieCard
        key={movie.name}
        movie={movie}
        onMovieImgClick={onMovieImgClick}
        onMovieTitleClick={() => {}}
        onMouseEnterCard={() => {}}
        onMouseLeaveCard={() => {}}
      />
  );

  const movieCardImage = movieCard.find(`.small-movie-card__image`);
  movieCardImage.props().onClick();
  expect(onMovieImgClick.mock.calls.length).toBe(1);
});


it(`Mouse hover on movie card`, () => {
  const onMouseEnterCard = jest.fn();
  const onMouseLeaveCard = jest.fn();

  const movieCard = shallow(
      <MovieCard
        key={movie.name}
        movie={movie}
        onMovieImgClick={() => {}}
        onMovieTitleClick={() => {}}
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
        key={movie.name}
        movie={movie}
        onMovieImgClick={() => {}}
        onMovieTitleClick={() => {}}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={onMouseLeaveCard}
      />
  );

  const movieCardImage = movieCard.find(`.catalog__movies-card`);
  movieCardImage.props().onMouseLeave();
  expect(onMouseLeaveCard.mock.calls.length).toBe(1);
});

it(`the desired movie comes to the function`, () => {
  const onMouseEnterCard = jest.fn();

  const movieCard = shallow(
      <MovieCard
        key={movie.name}
        movie={movie}
        onMovieImgClick={() => {}}
        onMovieTitleClick={() => {}}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={() => {}}
      />
  );
  const card = movieCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`);
  expect(onMouseEnterCard).toHaveBeenCalledTimes(1);
  expect(onMouseEnterCard.mock.calls[0][0]).toBe(movie.id);
});
