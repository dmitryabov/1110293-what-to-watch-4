import axios from "axios";
import filmAdapter from "../adapter/film";


const instance = axios.create({
  baseURL: `https://4.react.pages.academy/wtw/`,
  timeout: 5000,
  withCredentials: true
});


export const movieAPI = {
  getMovies() {
    return instance.get(`films`).then((response) => {
      return response.data.map((film) => filmAdapter(film));
    });
  }
};
