import React from "react";
import PropTypes from "prop-types";


const GenreList = (props) => {
  const {movieGenreTabs, activeTab, onGenreTabClick, getMovieGenre} = props;


  return (
    <ul className="catalog__genres-list">
      {movieGenreTabs.map((genreType, index) => {
        const activeGenreTab = activeTab === genreType ? `catalog__genres-item--active` : ``;
        return <li className={`catalog__genres-item + ${activeGenreTab}`} key={index}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={() => {
              onGenreTabClick(genreType);
              getMovieGenre(genreType);
            }}
          >{genreType}</a>
        </li>;
      })
      }</ul>
  );
};

GenreList.propTypes = {
  movieGenreTabs: PropTypes.arrayOf(PropTypes.string
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  getMovieGenre: PropTypes.func.isRequired,
};


export default GenreList;
