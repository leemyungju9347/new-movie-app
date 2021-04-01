import axios from 'axios';

const config = {
  baseURL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&sort=prodYear,1&',
  themovieURLUpcoming:
    'https://api.themoviedb.org/3/movie/upcoming?api_key=e7638a32d5dab5f71c53ca3627e15d57&language=ko-KR&page=1',
  themovieURLNow:
    'https://api.themoviedb.org/3/movie/now_playing?api_key=e7638a32d5dab5f71c53ca3627e15d57&language=ko-KR&page=1',
  theMovieSearch: 'https://api.themoviedb.org/3/search/movie?query=',
  theMovieDetail: 'https://api.themoviedb.org/3/movie/',
  theMovieApikey: 'api_key=e7638a32d5dab5f71c53ca3627e15d57',
  theMovieImages: 'https://api.themoviedb.org/3/movie/',
  weeklyBoxOfficeUrl:
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?',
  serviceKey: '3380MTF8585C14F620J3',
  boxOfficeUrl:
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?',
  boxOfficeKey: 'f1af63e1b7f2684fa30f2c8bc0b6df08',
};

function getTheMovieSearch(inputValue) {
  return axios.get(
    `${config.theMovieSearch}${inputValue}&${config.theMovieApikey}&language=ko-KR&page=1`,
  );
}

function getTheMovieDetail(movieId) {
  return axios.get(
    `${config.theMovieDetail}${movieId}?${config.theMovieApikey}&language=ko-KR&page=1`,
  );
}

function getTheMovieImages(movieId) {
  return axios.get(
    `${config.theMovieImages}${movieId}/images?${config.theMovieApikey}`,
  );
}

function movieSchApi(inputValue) {
  return axios.get(
    `${config.baseURL}${inputValue}&ServiceKey=${config.serviceKey}`,
  );
}

function boxOfficeApi(date) {
  return axios.get(
    `${config.boxOfficeUrl}key=${config.boxOfficeKey}&targetDt=${date}`,
  );
}

export {
  movieSchApi,
  boxOfficeApi,
  getTheMovieSearch,
  getTheMovieDetail,
  getTheMovieImages,
};
