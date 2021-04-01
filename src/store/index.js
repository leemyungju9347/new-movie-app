import Vue from 'vue';
import Vuex from 'vuex';
import {
  movieSchApi,
  boxOfficeApi,
  getTheMovieSearch,
  getTheMovieDetail,
  getTheMovieImages,
} from '@/api/index';
import { getTitleFromCookie, getOptionFromCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Input
    inputValue: getTitleFromCookie() || '',
    option: getOptionFromCookie() || '',
    // Result
    movieResult: [],
    movieData: [],
    // Detail
    detailItem: [],
    detailTitle: '',
    // keword
    keyword: '',
    keyData: [],
    keyResult: [],
    // boxOffice
    boxOfficeList: [],
    theMovieList: [],
    theMovieDetail: [],
    movieImages: [],
  },
  mutations: {
    //Movie Search Form Page
    set_value(state, inputValue) {
      state.inputValue = inputValue;
    },
    set_option(state, option) {
      state.option = option;
    },
    // Movie List Page
    set_movieList(state, data) {
      state.movieResult = data.Data[0].Result;
      state.movieData = data;
    },
    // Movie Detail Info Page
    set_detailItem(state, data) {
      state.detailItem = data;
    },
    set_detailTitle(state, title) {
      state.detailTitle = title;
    },
    // Keyword
    set_keyword(state, keyword) {
      state.keyword = keyword;
    },
    set_keyList(state, data) {
      state.keyData = data;
      state.keyResult = data.Data[0].Result;
    },
    // boxOffice
    set_boxOffice(state, data) {
      state.boxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    },
    clear_data(state) {
      state.movieResult = [];
      state.movieData = [];
      state.inputValue = '';
      state.option = '';
    },
    set_theMovie(state, data) {
      state.theMovieList = data.results;
    },
    set_theMovieDetail(state, data) {
      state.theMovieDetail = data;
    },
    set_movieImages(state, data) {
      state.movieImages = data;
    },
  },
  actions: {
    FETCH_LIST({ commit }, value) {
      return movieSchApi(value)
        .then(res => {
          commit('set_movieList', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_KEYWORD({ commit }, value) {
      return movieSchApi(value)
        .then(res => {
          commit('set_keyList', res.data);
          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // boxOffice
    FETCH_BOXOFFICE({ commit }, date) {
      return boxOfficeApi(date)
        .then(res => {
          commit('set_boxOffice', res.data);

          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_THEMOVIELIST({ commit }, value) {
      return getTheMovieSearch(value)
        .then(res => {
          commit('set_theMovie', res.data);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_THEMOVIEDETAIL({ commit }, value) {
      return getTheMovieDetail(value)
        .then(res => {
          commit('set_theMovieDetail', res.data);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_MOVIEIMAGES({ commit }, value) {
      return getTheMovieImages(value)
        .then(res => {
          commit('set_movieImages', res.data);
          console.log(res.data);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  modules: {},
});
