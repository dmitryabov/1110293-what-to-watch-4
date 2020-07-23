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

    this._onMovieImgClick = this._onMovieImgClick.bind(this);
    this._onMovieTitleClick = this._onMovieTitleClick.bind(this);
    this._onGenreChanged = this._onGenreChanged.bind(this);
    this._renderApp = this._renderApp.bind(this);

    this.state = {
      page: -1,
      currentMovie: 1
    };
  }

  _onMovieImgClick(cardId) {
    this.setState({page: 1, currentMovie: cardId});
  }

  _onMovieTitleClick(cardId) {
    this.setState({page: 1, currentMovie: cardId});
  }

  _onGenreChanged(genre) {
    this.props.getMovieGenre(genre);
  }

  _renderApp() {
    const {movies, comments} = this.props;
    const {page} = this.state;
    if (page <= -1) {
      return (
        <WelcomeScreen
          movies={movies}
          onMovieImgClick={this._onMovieImgClick}
          onMovieTitleClick={this._onMovieTitleClick}
          getMovieGenre={this._onGenreChanged}
        />
      );
    } else if (page >= 0) {
      return <MoviePage movie={movies.find((mov) => mov.id === this.state.currentMovie)} movies={movies} comments={comments} onMovieImgClick={this._onMovieImgClick}
        onMovieTitleClick={this._onMovieTitleClick}/>;
    }
    return null;
  }


  render() {

    return (
      <BrowserRouter>
        <Route exact path="/" render={() => this._renderApp()}/>
        <Route path="/movie-page/:id?" render={() => <MoviePage movies={this.props.movies[this.state.currentMovie]}/>}/>
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
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    comments: state.comments
  };
};


const AppContainer = connect(mapStateToProps, {getMovieGenre})(App);

export default AppContainer;
