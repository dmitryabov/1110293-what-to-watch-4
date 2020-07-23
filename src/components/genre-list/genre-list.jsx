import React from "react";
import PropTypes from "prop-types";


const GenreList = (props) => {
  const {movieGenreTab, activeTab, onGenreTabClick, getMovieGenre} = props;


  return (
    <ul className="catalog__genres-list">
      {movieGenreTab.map((movie) => {
        const activeGenreTab = activeTab === movie ? `catalog__genres-item--active` : ``;
        return <li className={`catalog__genres-item + ${activeGenreTab}`} key={movie}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={() => {
              onGenreTabClick(movie);
              getMovieGenre(movie);
            }}
          >{movie}</a>
        </li>;
      })
      }</ul>
  );
};

GenreList.propTypes = {
  movieGenreTab: PropTypes.arrayOf(PropTypes.string
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  getMovieGenre: PropTypes.func.isRequired,
};


export default GenreList;
