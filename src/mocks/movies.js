const movies = [
  {
    id: 1,
    runTime: 111,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`,
    genre: `Comedies`,
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
    runTime: 111,
    src: `img/shutter-island.jpg`,
    poster: `img/shutter-island.jpg`,
    name: `Shutter Island`,
    genre: `Crime`,
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
  {
    id: 3,
    runTime: 3,
    src: `img/macbeth.jpg`,
    poster: `img/macbeth.jpg`,
    name: `Macbeth`,
    genre: `Documentary`,
    released: `3`,
    rating: `3.2`,
    count: `3`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 4,
    runTime: 4,
    src: `img/aviator.jpg`,
    poster: `img/aviator.jpg`,
    name: `Aviator`,
    genre: `Dramas`,
    released: `4`,
    rating: `6.6`,
    count: `4`,
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
    genre: `Horror`,
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
    genre: `Kids & Family`,
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
    genre: `Romance`,
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
    runTime: 1,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    genre: `Sci-Fi`,
    released: `1`,
    rating: `5.5`,
    count: `1`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European 
    ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a 
    junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Dima Andreson`,
    starring: [`El Murray`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 9,
    runTime: 111,
    src: `img/shutter-island.jpg`,
    poster: `img/shutter-island.jpg`,
    name: `Shutter Island`,
    genre: `Sci-Fi`,
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
