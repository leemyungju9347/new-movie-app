<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view class="router-area"></router-view>
    <!-- <loadingSpinner v-if="loadingStatus"></loadingSpinner> -->
  </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import { mapState, mapActions } from 'vuex';
import loadingSpinner from '@/components/common/loadingSpinner.vue';
import bus from '@/utils/bus';

export default {
  components: { AppHeader },
  data() {
    return {
      loadingStatus: true,
    };
  },
  computed: {
    ...mapState(['theMovie']),
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);

    // this.FETCH_THEMOVIELIST('해리포터');
  },
  mounted() {
    bus.$emit('start:spinner');
  },
  beforeDestroy() {
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  },
  methods: {
    ...mapActions(['FETCH_THEMOVIELIST']),
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
};
</script>

<style>
@import './assets/css/common.css';
@import './assets/css/reset.css';
@import './assets/css/loadingSpinner.css';
</style>
