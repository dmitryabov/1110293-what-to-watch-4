import React from "react";
import PropTypes from "prop-types";


const CatalogButton = (props) => {

  return <button onClick={() => {
    props.clickOnButton();
  }}
  className="catalog__button"
  type="button">Show more
  </button>;
};

CatalogButton.propTypes = {
  clickOnButton: PropTypes.func.isRequired,
};


export default CatalogButton;
