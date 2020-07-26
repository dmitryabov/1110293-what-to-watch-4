import React from "react";
import PropTypes from "prop-types";


const GenreList = (props) => {
  const {activeTab, movieTabs, clickOnTab} = props;

  return (
    <ul className="catalog__genres-list">
      {movieTabs.map((tabIn, index) => {
        const activeGenreTab = activeTab === tabIn ? `catalog__genres-item--active` : ``;
        return <li className={`catalog__genres-item + ${activeGenreTab}`} key={index}>
          <a href="#"
            className="catalog__genres-link"
            onClick={() => clickOnTab(tabIn)}
          >{tabIn}</a>
        </li>;
      })
      }</ul>
  );
};


GenreList.propTypes = {
  movieTabs: PropTypes.arrayOf(PropTypes.string
  ).isRequired,
  activeTab: PropTypes.string,
  clickOnTab: PropTypes.func.isRequired,
};


export default GenreList;
