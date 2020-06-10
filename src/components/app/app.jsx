import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieName, genre, year} = props;
  return (
    <WelcomeScreen
      movieName={movieName}
      genre={genre}
      year={year}

    />
  );
};


export default App;
