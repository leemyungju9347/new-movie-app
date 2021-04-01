<template>
  <div class="header">
    <h1 class="main_logo">
      <router-link to="/">Movies</router-link>
    </h1>
    <span>영화 검색 서비스</span>
    <ul class="genres-select">
      <li v-for="(item, index) in genres" :key="index">
        {{ item }}
      </li>
    </ul>
    <!-- <div class="favorite-box">
      <a href="">
        <i class="fas fa-heart"></i>
        내가 찜한 컨텐츠
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [
        '로맨스',
        '스릴러',
        '애니메이션',
        '공포',
        '드라마',
        '판타지',
        '액션',
        'SF',
      ],
    };
  },
  methods: {
    prevPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.genres-select {
  position: absolute;
  right: 0;
  bottom: 28px;
  display: none;
}

.genres-select > li {
  display: inline-block;
}

.genres-select > li + li {
  margin-left: 5px;
}
</style>
