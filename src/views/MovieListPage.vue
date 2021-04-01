<template>
  <!-- <MovieList></MovieList> -->
  <MovieSearchList></MovieSearchList>
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import MovieSearchList from '@/components/MovieSearchList.vue';
import spinnerMixins from '@/mixins/spinnerMixins';

export default {
  components: { MovieSearchList },
  mixins: [spinnerMixins],
};
</script>

<style></style>
