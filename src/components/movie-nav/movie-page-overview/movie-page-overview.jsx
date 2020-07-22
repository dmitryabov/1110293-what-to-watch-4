import React from "react";
import PropTypes from "prop-types";


const MoviePageOverview = (props) => {
  const {rating, count, description, director, starring} = props.movies;

  let ratingLevel;
  const score = Number.parseFloat(rating);

  switch (true) {
    case score < 3:
      ratingLevel = `Bad`;
      break;
    case score >= 3 && score < 5:
      ratingLevel = `Normal`;
      break;
    case score >= 5 && score < 8:
      ratingLevel = `Good`;
      break;
    case score >= 8 && score < 10:
      ratingLevel = `Very good`;
      break;
    case score === 10:
      ratingLevel = `Awesome`;
      break;
    default:
      ratingLevel = `N/A`;
  }

  return (
    <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{ratingLevel}</span>
        <span className="movie-rating__count">{count} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
    </div>
    </>
  );
};


MoviePageOverview.propTypes = {
  movies: PropTypes.shape({
    rating: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string
    )
  }
  ).isRequired,
};

export default MoviePageOverview;
