import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common.Authorization = AUTH_TOKEN;

export async function featchPopularMovies() {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${AUTH_TOKEN}`,
    );
    console.log('result :>> ', response.data.results);
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}

export async function featchMovieInSearch(movieName) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${AUTH_TOKEN}&query=${movieName}`,
    );
    console.log('result :>> ', response.data.results);
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}

export async function featchMovieInfo(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${AUTH_TOKEN}`);
    // console.log('response :>> ', response.data);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function featchMovieCast(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${AUTH_TOKEN}`,
    );
    console.log('cast :>> ', response.data.cast);
    return response.data.cast;
  } catch (error) {
    alert(error.message);
  }
}

export async function featchMovieRewiews(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${AUTH_TOKEN}`,
    );
    console.log('response :>> ', response.data.results);
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}
