import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {withMovieList} from "../../hocs/with-movie-list/with-movie-list.js";
import {withMovieCard} from "../../hocs/with-movie-card/with-movie-card.js";


const WithMovieCar = withMovieCard(MovieCard);

const MovieList = (props) => {

  const {movies, onMovieImgClick, onMovieTitleClick, onMouseEnterCardHandler, onMouseLeaveCardHandler} = props;

  return (
    <React.Fragment>
      {movies.map((movie, i) =>
        <WithMovieCar
          key={movie.name + i}
          movie={movie}
          onMovieImgClick={onMovieImgClick}
          onMovieTitleClick={onMovieTitleClick}
          onMouseEnterCard={onMouseEnterCardHandler}
          onMouseLeaveCard={onMouseLeaveCardHandler}
        />
      )}
    </React.Fragment>
  );
};


MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string),
        video: PropTypes.string.isRequired,

      })
  ).isRequired,
  onMovieImgClick: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onMouseEnterCardHandler: PropTypes.func.isRequired,
  onMouseLeaveCardHandler: PropTypes.func.isRequired
};

export default withMovieList(MovieList);
