import React from "react";
import PropTypes from "prop-types";


const MovieNav = (props) => {
  const {activeTab, movieTabs, clickOnTab} = props;

  return (
    <ul className="movie-nav__list">
      {movieTabs.map((tabIn, index) => {
        const activeMovieTab = activeTab === tabIn ? `movie-nav__item--active` : ``;
        return <li className={`movie-nav__item ${activeMovieTab}`} key={index}>
          <a href="#"
            className="movie-nav__link"
            onClick={() => clickOnTab(tabIn)}
          >{tabIn}</a>
        </li>;
      })
      }</ul>
  );
};

MovieNav.propTypes = {
  movieTabs: PropTypes.arrayOf(PropTypes.string
  ).isRequired,
  clickOnTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};


export default MovieNav;
