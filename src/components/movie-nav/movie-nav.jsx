import React from "react";
import PropTypes from "prop-types";


const MovieNav = (props) => {
  const {movieTabs, activeTab, mouseLeaveCard} = props;


  return (<ul className="movie-nav__list">
    {movieTabs.map((tabIn) => {
      const activeMovieTab = activeTab === tabIn ? `movie-nav__item--active` : ``;
      return <li className={`movie-nav__item ${activeMovieTab}`} key={tabIn}>
        <a href="#"
          className="movie-nav__link"
          onClick={() => mouseLeaveCard(tabIn)}

        >{tabIn}</a>
      </li>;
    })
    }</ul>
  );
};

MovieNav.propTypes = {
  movieTabs: PropTypes.arrayOf(PropTypes.string
  ).isRequired,
  mouseLeaveCard: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};


export default MovieNav;
