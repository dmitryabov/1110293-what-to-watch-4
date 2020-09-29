import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {Link} from "react-router-dom";


const MovieCard = (props) => {

  const {movie, onMovieImgClick, onMouseEnterCard, onMouseLeaveCard, onMovieTitleClick,
    onMouseEnterCardHandler, onMouseLeaveCardHandler, isPlay} = props;
  const isPlaying = isPlay;
  const {video, id, poster, name} = movie;

  const mouseEnterCard = () => {
    onMouseEnterCard(id);
    onMouseEnterCardHandler();
  };

  const mouseLeaveCard = () => {
    onMouseLeaveCard();
    onMouseLeaveCardHandler();
  };

  const onImgCardClick = () => {
    onMovieImgClick(id);
  };

  const onTitleCardClick = ()=>{
    onMovieTitleClick(id);
  };

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        id={id}
        onMouseEnter={mouseEnterCard}
        onMouseLeave={mouseLeaveCard}
      >

        <div className="small-movie-card__image"
          onClick={onImgCardClick}
        >
          <VideoPlayer
            id={id}
            src={video}
            isPlaying={isPlaying}
            poster={poster}
            widthPlayer={`280`}
            heightPlayer={`175`}
          />

        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/movie/${id}`} className="small-movie-card__link" onClick={onTitleCardClick}>{name}</Link>
        </h3>
      </article>
    </React.Fragment>
  );
};


MovieCard.propTypes = {
  movie:
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
      }).isRequired,
  onMovieImgClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onMouseEnterCardHandler: PropTypes.func.isRequired,
  onMouseLeaveCardHandler: PropTypes.func,
  isPlay: PropTypes.bool.isRequired,
};

export default MovieCard;

