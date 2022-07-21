import axios from "axios";

const key = process.env.REACT_APP_TMDB_API_KEY;

export async function getTrendings() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`
    );
    return data.results.slice(0, 10);
  } catch (error) {
    return [];
  }
}

export async function getCredits(id, mediaType) {
  try {
    const { data } = await axios.get(` 
   https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${key}`);
    return data.cast;
  } catch (error) {
    return [];
  }
}

export async function getGenres(mediaType) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${key}&language=en-US`
    );
    return data.genres;
  } catch (error) {
    return [];
  }
}

export async function getData(id, mediaType) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${key}&page=1`
    );
    return data;
  } catch (error) {
    return [];
  }
}
export async function getSimilarMovies(id, mediaType) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=${key}`
    );
    return data.results.slice(0, 5);
  } catch (error) {
    return [];
  }
}

export async function getVideos(id, mediaType) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${key}`
    );
    return data.results[0].key;
  } catch (error) {
    return [];
  }
}

export async function getMovieAPI(genreforURL, page) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&page=${page}&language=en-US&sort_by=popularity.desc&with_genres=${genreforURL}`
    );
    return data.results;
  } catch (error) {
    return [];
  }
}

export async function getNowPlayingMovies() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=1`
    );
    return data.results.slice(0, 6);
  } catch (error) {
    return [];
  }
}

export async function getNowPlayingSeries() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&page=1`
    );
    return data.results.slice(0, 6);
  } catch (error) {
    return [];
  }
}

export async function getTopRatedMovies() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=1`
    );
    return data.results.slice(0, 6);
  } catch (error) {
    return [];
  }
}

export async function getTrailerMovies(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`
    );
    return data.results[0]?.key;
  } catch (error) {
    return [];
  }
}

export async function getMovieDetail(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    );
    return data;
  } catch (error) {
    return {};
  }
}
