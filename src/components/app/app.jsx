import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._onMovieImgClick = this._onMovieImgClick.bind(this);
    this._onMovieTitleClick = this._onMovieTitleClick.bind(this);

    this.state = {
      page: -1,
      currentMovie: 1
    };
  }

  _onMovieImgClick(cardId) {
    this.setState({page: 1, currentMovie: cardId - 1});
  }

  _onMovieTitleClick(cardId) {
    this.setState({page: 1, currentMovie: cardId - 1});
  }

  _renderApp() {
    const {movieName, genre, year, movies} = this.props;
    const {page} = this.state;
    if (page <= -1) {
      return (
        <WelcomeScreen
          movieName={movieName}
          genre={genre}
          year={year}
          movies={movies}
          onMovieImgClick={this._onMovieImgClick}
          onMovieTitleClick={this._onMovieTitleClick}
        />
      );
    } else if (page >= 0) {
      return <MoviePage movies={movies[this.state.currentMovie]}/>;
    }
    return null;
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            {this._renderApp()}
          </Route>
          <Route path="/movie-page">
            <MoviePage movies={this.props.movies[this.state.currentMovie]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movieName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
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
        starring: PropTypes.arrayOf(PropTypes.string)

      })
  ).isRequired,
};

export default App;
