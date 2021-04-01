<template>
  <div class="detail-page-wrap">
    <div class="info-contents">
      <SummaryInfoArea></SummaryInfoArea>
      <DetailInfoArea></DetailInfoArea>
    </div>
    <!-- 비슷한 컨텐츠 -->
  </div>
</template>

<script>
import MovieDetailInfo from '@/components/MovieDetailInfo.vue';
import SimilarContents from '@/components/SimilarContents.vue';
import spinnerMixins from '@/mixins/spinnerMixins';
import SummaryInfoArea from '@/components/SummaryInfoArea.vue';
import DetailInfoArea from '@/components/DetailInfoArea.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    SummaryInfoArea,
    DetailInfoArea,
  },
  created() {
    const movieId = this.$route.params.id;
    console.log(movieId);
    this.FETCH_THEMOVIEDETAIL(movieId);
    this.FETCH_MOVIEIMAGES(movieId);
  },
  mixins: [spinnerMixins],
  methods: {
    ...mapActions(['FETCH_THEMOVIEDETAIL', 'FETCH_MOVIEIMAGES']),
  },
};
</script>

<style></style>
