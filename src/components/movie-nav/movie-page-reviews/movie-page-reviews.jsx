import React from "react";
import PropTypes from "prop-types";


const MoviePageReviews = (props) => {
  const comments = props.comments;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        { comments.map((a) => {
          const {comment, user, rating, date} = a;
          return <div className="review" key={date}>
            <blockquote className="review__quote">
              <p className="review__text">{comment}</p>
              <footer className="review__details">
                <cite className="review__author">{user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{rating}</div>
          </div>;
        })
        }
      </div>
    </div>

  );
};

MoviePageReviews.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }),
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
  ).isRequired,
};


export default MoviePageReviews;
