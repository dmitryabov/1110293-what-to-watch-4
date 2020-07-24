import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import CatalogButton from "../catalog-button/catalog-button.jsx";


const Movie = {
  name: `Fantastic Beasts`,
  genre: `Dramas`,
  released: `2014`
};


class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: `All genres`,
      countMovie: 8
    };
    this._handlerClickOnTab = this._handlerClickOnTab.bind(this);
    this._onGenreChanged = this._onGenreChanged.bind(this);
    this._handlerClickOnButton = this._handlerClickOnButton.bind(this);
  }


  _handlerClickOnTab(tab) {
    this.setState({
      activeTab: tab
    });
  }

  _handlerClickOnButton() {
    this.setState({
      countMovie: this.state.countMovie + 8
    });
  }

  _onGenreChanged(tab) {
    this.props.getMovieGenre(tab);
  }

  render() {
    const {movies, onMovieImgClick, onMovieTitleClick} = this.props;
    const arr = [`All genres`];
    movies.map((mov) => {
      arr.push(mov.genre);
    });

    const movieGenreTabs = Array.from(new Set(arr));
    const activeTab = this.props.activeGenre;
    const filteredMovie = activeTab === `All genres` ? movies : movies.filter((movie) => movie.genre === activeTab);


    return (<div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="Horror" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">
                {Movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{Movie.genre}</span>
                <span className="movie-card__year">{Movie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList
            movieGenreTabs={movieGenreTabs}
            activeTab={activeTab}
            onGenreTabClick={this._handlerClickOnTab}
            getMovieGenre={this._onGenreChanged}
          />
          <div className="catalog__movies-list">
            <MovieList movies={filteredMovie.slice(0, this.state.countMovie)}
              onMovieImgClick={onMovieImgClick}
              onMovieTitleClick={onMovieTitleClick}/>
          </div>
          <div className="catalog__more">
            { filteredMovie.length <= this.state.countMovie ? `` : <CatalogButton clickOnButton={this._handlerClickOnButton}/>}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
    );
  }
}

WelcomeScreen.propTypes = {
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
  onMovieImgClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  getMovieGenre: PropTypes.func,
};

export default WelcomeScreen;
