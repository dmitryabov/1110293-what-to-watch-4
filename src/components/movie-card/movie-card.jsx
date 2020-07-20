import React from "react";
import PropTypes from "prop-types";


const MovieCard = (props) => {
  const {movie, onMovieImgClick, onMouseEnterCard, onMouseLeaveCard, onMovieTitleClick} = props;

  const mouseEnterCard = () => onMouseEnterCard(id);
  const mouseLeaveCard = () => onMouseLeaveCard();
  const onImgCardClick = () => onMovieImgClick(id);
  const onTitleCardClick = (evt)=>{
    evt.preventDefault();
    onMovieTitleClick(id);
  };

  const {
    src,
    name,
    id
  } = movie;


  return (
    <article className="small-movie-card catalog__movies-card"
      id={id}

      onMouseEnter={mouseEnterCard}
      onMouseLeave={mouseLeaveCard}>
      <div onClick={onImgCardClick} className="small-movie-card__image">
        <img src={src} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleCardClick} className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie:
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
  onMovieImgClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MovieCard;
