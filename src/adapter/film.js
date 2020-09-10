
const filmAdapter = (film) => ({
  id: film.id,
  name: film.name,
  poster: film.preview_image,
  src: film.poster_image,
  bg: film.background_image,
  bgc: film.background_color,
  video: film.video_link,
  previewSrc: film.preview_video_link,
  description: film.description,
  rating: film.rating,
  count: film.scores_count,
  director: film.director,
  starring: film.starring,
  runTime: film.run_time,
  genre: film.genre,
  released: film.released,
  isFavorite: film.is_favorite,
});

export default filmAdapter;
