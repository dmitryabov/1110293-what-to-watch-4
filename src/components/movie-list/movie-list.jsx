import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {withMovieList} from "../../hocs/with-movie-list/withMovieList.js";


const MovieList = (props) => {

  const {movies, onMovieImgClick, onMovieTitleClick, onMouseEnterCardHandler, onMouseLeaveCardHandler} = props;

  return (
    <React.Fragment>
      {movies.map((movie, i) =>
        <MovieCard
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
        released: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
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
