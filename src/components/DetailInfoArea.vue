<template>
  <div class="detail-area"></div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['theMovieDetail', 'movieImages']),
  },
};
</script>

<style></style>
