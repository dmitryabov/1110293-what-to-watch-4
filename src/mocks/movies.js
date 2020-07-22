const movies = [
  {
    id: 1,
    runTime: 111,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`,
    genre: `comedy`,
    released: `2012`,
    rating: `3.3`,
    count: `2113`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Ivan Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 2,
    runTime: 181,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    genre: `comedy`,
    released: `1912`,
    rating: `5.5`,
    count: `255`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Dima Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 3,
    runTime: 511,
    src: `img/macbeth.jpg`,
    poster: `img/macbeth.jpg`,
    name: `Macbeth`,
    genre: `anime`,
    released: `2222`,
    rating: `2.2`,
    count: `222`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 4,
    runTime: 1,
    src: `img/aviator.jpg`,
    poster: `img/aviator.jpg`,
    name: `Aviator`,
    genre: `anime`,
    released: `2066`,
    rating: `6.6`,
    count: `2003`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Dasha Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 5,
    runTime: 441,
    src: `img/we-need-to-talk-about-kevin.jpg`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    name: `We need to talk about Kevin`,
    genre: `drama`,
    released: `2012`,
    rating: `6.4`,
    count: `133`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 6,
    runTime: 11,
    src: `img/what-we-do-in-the-shadows.jpg`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    name: `What We Do in the Shadows`,
    genre: `drama`,
    released: `2002`,
    rating: `7.7`,
    count: `277`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Edvard Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 7,
    runTime: 111,
    src: `img/johnny-english.jpg`,
    poster: `img/johnny-english.jpg`,
    name: `Johnny English`,
    genre: `drama`,
    released: `2000`,
    rating: `8.8`,
    count: `288`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `I Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 8,
    runTime: 111,
    src: `img/shutter-island.jpg`,
    poster: `img/shutter-island.jpg`,
    name: `Shutter Island`,
    genre: `drama`,
    released: `1999`,
    rating: `9.4`,
    count: `299`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wester Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

export default movies;
