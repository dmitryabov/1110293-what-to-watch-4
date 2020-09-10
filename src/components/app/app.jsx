import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import {Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {getMovieGenre} from "../../redux/reducer.js";
import {getMovies} from "../../redux/movies/movies-reducer.js";
import {withMoviePage} from "../../hocs/with-movie-page/with-movie-page.js";
import {withWelcomeScreen} from "../../hocs/with-welcome-screen/with-welcome-screen.js";


const WithMoviePageContainer = withMoviePage(MoviePage);
const WithWelcomeScreenContainer = withWelcomeScreen(WelcomeScreen);


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleGenreChanged = this._handleGenreChanged.bind(this);
    this._renderApp = this._renderApp.bind(this);

  }

  componentDidMount() {
    this.props.getMovies();
  }


  _getMovieGenres(arrayOfMovies) {
    const typeGenres = [`All genres`];

    arrayOfMovies.forEach((movie) => {
      typeGenres.push(movie.genre);
    });

    return Array.from(new Set(typeGenres));
  }

  _handleGenreChanged(genre) {
    this.props.getMovieGenre(genre);
    this.props.getMovies();
  }

  _renderApp() {
    const {movies, comments, activeGenre, genres, onMovieTitleClick, onMovieImgClick, currentMovie} = this.props;
    const {page} = this.props;
    if (page <= -1) {
      return (
        <WithWelcomeScreenContainer
          movies={movies}
          onMovieImgClick={onMovieImgClick}
          onMovieTitleClick={onMovieTitleClick}
          getMovieGenre={this._handleGenreChanged}
          activeGenre={activeGenre}
          genres={genres}
        />
      );
    } else if (page >= 0) {
      return <WithMoviePageContainer movie={movies.find((mov) => mov.id === currentMovie)}
        movies={movies}
        comments={comments}
        onMovieImgClick={onMovieImgClick}
        onMovieTitleClick={onMovieTitleClick}/>;
    }
    return null;
  }


  render() {
    const {movies, currentMovie} = this.props;
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => this._renderApp()}/>
        <Route path="/movie-page/:id?" render={() => <WithMoviePageContainer movies={movies[currentMovie]}/>}/>
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
        released: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
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
  onMovieTitleClick: PropTypes.func.isRequired,
  onMovieImgClick: PropTypes.func.isRequired,
  currentMovie: PropTypes.number.isRequired,
  page: PropTypes.number,
  getMovies: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    movies: state.moviesReduser.movies,
    comments: state.genreReduser.comments,
    activeGenre: state.genreReduser.genre,
    genres: state.genreReduser.genres
  };
};


const AppContainer = connect(mapStateToProps, {getMovieGenre, getMovies})(App);

export default AppContainer;
