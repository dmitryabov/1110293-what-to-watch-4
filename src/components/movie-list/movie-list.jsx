import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._mouseEnterCardHandler = this._mouseEnterCardHandler.bind(this);
    this._mouseLeaveCardHandler = this._mouseLeaveCardHandler.bind(this);
  }

  render() {
    const {movies, onMovieCardClick} = this.props;

    return (
      <React.Fragment>
        {movies.map((movie, i) =>
          <MovieCard
            key={movie.name + i}
            movie={movie}
            onMovieCardClick={onMovieCardClick}
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


MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default MovieList;
