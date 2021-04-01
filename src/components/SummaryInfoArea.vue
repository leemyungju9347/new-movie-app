<template>
  <div class="movie-info">
    <div class="poster">
      <img
        :src="
          `https://image.tmdb.org/t/p/original${theMovieDetail.poster_path}`
        "
        alt=""
      />
    </div>
    <div class="summary-area">
      <div class="subject">
        <h4>{{ theMovieDetail.title }}</h4>
        <span class="eng-title" v-if="engTitleFilter">{{
          theMovieDetail.original_title
        }}</span>
      </div>
      <div class="summary"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['theMovieDetail']),
    engTitleFilter() {
      return this.theMovieDetail.original_language === 'en';
    },
  },
};
</script>

<style></style>
