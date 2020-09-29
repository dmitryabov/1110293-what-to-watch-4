import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../../movie-card/movie-card.jsx";
import {withMovieCard} from "../../../hocs/with-movie-card/with-movie-card.js";


const WithMovieCard = withMovieCard(MovieCard);


class MoviePageContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._mouseEnterCardHandler = this._mouseEnterCardHandler.bind(this);
    this._mouseLeaveCardHandler = this._mouseLeaveCardHandler.bind(this);
  }

  render() {
    const {movies, onMovieImgClick, onMovieTitleClick, genre} = this.props;

    const filtredMovies = movies.filter((movie) => {
      return movie.genre === genre;
    });
    return (
      <React.Fragment>
        {filtredMovies.map((movie, i) =>
          <WithMovieCard
            key={movie.name + i}
            movie={movie}
            onMovieImgClick={onMovieImgClick}
            onMovieTitleClick={onMovieTitleClick}
            onMouseEnterCard={this._mouseEnterCardHandler}
            onMouseLeaveCard={this._mouseLeaveCardHandler}
          />
        )}
      </React.Fragment>
    );
  }

  _mouseEnterCardHandler(cardId) {
    this.setState({activeCard: cardId});
  }

  _mouseLeaveCardHandler() {
    this.setState({activeCard: null});
  }
}


MoviePageContent.propTypes = {
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
  genre: PropTypes.string.isRequired,
};

export default MoviePageContent;
