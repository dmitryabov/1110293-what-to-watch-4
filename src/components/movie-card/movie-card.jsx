import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";


class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._onMouseEnterCardHandler = this._onMouseEnterCardHandler.bind(this);
    this._onMouseLeaveCardHandler = this._onMouseLeaveCardHandler.bind(this);
  }

  _onMouseEnterCardHandler() {
    this.setState({
      isPlaying: true
    });
  }

  _onMouseLeaveCardHandler() {
    this.setState({
      isPlaying: false
    });
  }


  render() {
    const {movie, onMovieImgClick, onMouseEnterCard, onMouseLeaveCard, onMovieTitleClick} = this.props;
    const {isPlaying} = this.state;
    const {video, id, poster, name} = movie;

    const mouseEnterCard = () => {
      onMouseEnterCard(id);
      this._onMouseEnterCardHandler();
    };

    const mouseLeaveCard = () => {
      onMouseLeaveCard();
      this._onMouseLeaveCardHandler();
    };

    const onImgCardClick = () => {
      onMovieImgClick(id);
    };

    const onTitleCardClick = (evt)=>{
      evt.preventDefault();
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
              src={video}
              isPlaying={isPlaying}
              poster={poster}
            />

          </div>
          <h3 className="small-movie-card__title">
            <a onClick={onTitleCardClick}
              className="small-movie-card__link"
              href="movie-page.html">{name}
            </a>
          </h3>
        </article>
      </React.Fragment>
    );
  }
}

MovieCard.propTypes = {
  movie:
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
      }).isRequired,
  onMovieImgClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MovieCard;

