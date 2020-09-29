import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieNav from "../movie-nav/movie-nav.jsx";
import MoviePageDetails from "../movie-nav/movie-page-details/movie-page-details.jsx";
import MoviePageOverview from "../movie-nav/movie-page-overview/movie-page-overview.jsx";
import MoviePageReviews from "../movie-nav/movie-page-reviews/movie-page-reviews.jsx";
import MoviePageContent from "../movie-nav/movie-page-content/movie-page-content.jsx";
import Player from "../player/player.jsx";
import {Link} from "react-router-dom";


const movieTabType = {
  overview: `Overview`,
  details: `Details`,
  reviews: `Reviews`
};

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
    this._handlePlayClick = this._handlePlayClick.bind(this);

    this.state = {
      page: -1,
    };
  }

  _handlePlayClick(on) {
    this.setState({page: on});
  }

  render() {
    const {name, src, poster, genre, released} = this.props.movie;
    const {onMovieImgClick, onMovieTitleClick, activeTab, clickOnTab} = this.props;

    const movieTabs = Object.values(movieTabType);
    if (this.state.page < 1) {
      return (
        <div>
          <section className="movie-card movie-card--full">
            <div className="movie-card__hero">
              <div className="movie-card__bg">
                <img src={poster} alt={name} />
              </div>
              <h1 className="visually-hidden">WTW</h1>
              <header className="page-header movie-card__head">
                <div className="logo">
                  <Link to="/" className="logo__link">
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                  </Link>
                </div>
                <div className="user-block">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </div>
              </header>
              <div className="movie-card__wrap">
                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{name}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{genre}</span>
                    <span className="movie-card__year">{released}</span>
                  </p>
                  <div className="movie-card__buttons">
                    <button onClick={() => this._handlePlayClick(1)} className="btn btn--play movie-card__button" type="button">
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use href="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    <button className="btn btn--list movie-card__button" type="button">
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use href="#add"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                    <a href="add-review.html" className="btn movie-card__button">Add review</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">
                <div className="movie-card__poster movie-card__poster--big">
                  <img src={src} alt="The Grand Budapest Hotel poster" width="218" height="327" />
                </div>
                <div className="movie-card__desc">
                  <nav className="movie-nav movie-card__nav">
                    <MovieNav
                      movieTabs={movieTabs}
                      activeTab={activeTab}
                      clickOnTab={clickOnTab}
                    />
                  </nav>
                  {activeTab === movieTabType.details && <MoviePageDetails movies={this.props.movie}/>}
                  {activeTab === movieTabType.overview && <MoviePageOverview movies={this.props.movie}/>}
                  {activeTab === movieTabType.reviews && <MoviePageReviews comments={this.props.comments}/>}
                </div>
              </div>
            </div>
          </section>
          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <div className="catalog__movies-list">

                <MoviePageContent
                  movies={this.props.movies}
                  genre={genre}
                  onMovieImgClick={onMovieImgClick}
                  onMovieTitleClick={onMovieTitleClick}/>
              </div>
            </section>
            <footer className="page-footer">
              <div className="logo">
                <a href="main.html" className="logo__link logo__link--light">
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
    } else if (this.state.page >= 0) {
      return <Player handlePlayClick={this._handlePlayClick} {...this.props.movie}/>;
    }
    return null;
  }
}


MoviePage.propTypes = {
  movie: PropTypes.shape({
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
    starring: PropTypes.arrayOf(PropTypes.string
    )
  }
  ),
  movies: PropTypes.arrayOf(PropTypes.object

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
  onMovieImgClick: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  clickOnTab: PropTypes.func.isRequired,
};


export default MoviePage;
