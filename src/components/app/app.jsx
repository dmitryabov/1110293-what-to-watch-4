import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import {Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {getMovieGenre} from "../../redux/reducer.js";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieImgClick = this._handleMovieImgClick.bind(this);
    this._handleMovieTitleClick = this._handleMovieTitleClick.bind(this);
    this._handleGenreChanged = this._handleGenreChanged.bind(this);
    this._renderApp = this._renderApp.bind(this);

    this.state = {
      page: -1,
      currentMovie: 1
    };
  }

  _handleMovieImgClick(cardId) {
    this.setState({page: 1, currentMovie: cardId});
  }

  _handleMovieTitleClick(cardId) {
    this.setState({page: 1, currentMovie: cardId});
  }

  _handleGenreChanged(genre) {
    this.props.getMovieGenre(genre);
  }

  _renderApp() {
    const {movies, comments, activeGenre, genres} = this.props;
    const {page} = this.state;
    if (page <= -1) {
      return (
        <WelcomeScreen
          movies={movies}
          onMovieImgClick={this._handleMovieImgClick}
          onMovieTitleClick={this._handleMovieTitleClick}
          getMovieGenre={this._handleGenreChanged}
          activeGenre={activeGenre}
          genres={genres}
        />
      );
    } else if (page >= 0) {
      return <MoviePage movie={movies.find((mov) => mov.id === this.state.currentMovie)}
        movies={movies}
        comments={comments}
        onMovieImgClick={this._handleMovieImgClick}
        onMovieTitleClick={this._handleMovieTitleClick}/>;
    }
    return null;
  }


  render() {
    const {movies} = this.props;
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => this._renderApp()}/>
        <Route path="/movie-page/:id?" render={() => <MoviePage movies={movies[this.state.currentMovie]}/>}/>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
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
  getMovieGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string,
  genres: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    comments: state.comments,
    activeGenre: state.genre,
    genres: state.genres
  };
};


const AppContainer = connect(mapStateToProps, {getMovieGenre})(App);

export default AppContainer;
