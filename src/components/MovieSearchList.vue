<template>
  <div class="movieList-page">
    <ul class="movieList">
      <li class="movie-item" v-for="(item, index) in theMovieList" :key="index">
        <a
          href=""
          class="simple-info"
          @click.prevent="detailInfoPage(item.title, item.id)"
        >
          <img
            :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
            alt=""
          />
          <div class="txt-box">
            <p class="simple-plot">
              {{ item.overview }}
            </p>
            <span class="more">자세히 > </span>
          </div>
        </a>
        <div class="title-box">
          <strong class="movie-title titleNm">
            {{ item.title }}
          </strong>
          <span class="eng-title titleNm" v-if="engTitleFilter">{{
            item.original_title
          }}</span>
          <span class="date">{{ item.release_date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['inputValue', 'theMovieList']),
    engTitleFilter() {
      return this.theMovieList.original_language === 'en';
    },
  },
  created() {
    this.FETCH_THEMOVIELIST(this.inputValue);
  },
  methods: {
    ...mapActions(['FETCH_THEMOVIELIST']),
    detailInfoPage(title, movieId) {
      console.log(title);
      console.log(movieId);
      this.$router.push(`/movieDetail/${movieId}`);
    },
  },
};
</script>

<style></style>
