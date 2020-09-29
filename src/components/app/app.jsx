import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import {Route, BrowserRouter, Switch} from "react-router-dom";
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


  render() {
    const {movies, currentMovie, onMovieImgClick, onMovieTitleClick, activeGenre, genres, comments} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
            render={() => {
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
            }}/>
          <Route exact path="/movie/:id"
            render={() => {
              return (
                <WithMoviePageContainer movie={movies.find((mov) => mov.id === currentMovie)}
                  movies={movies}
                  comments={comments}
                  onMovieImgClick={onMovieImgClick}
                  onMovieTitleClick={onMovieTitleClick}
                />
              );
            }}/>
        </Switch>
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
