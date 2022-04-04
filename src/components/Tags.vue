<template>
  <div class="sidebar">
    <p>Popular Tags</p>

    <app-loading v-if="isLoading" />
    <app-error v-if="error" />

    <div class="tag-list" v-if="tags">
      <router-link
        v-for="tag in tags"
        :key="tag"
        class="tag-default tag-pill"
        :to="{name: 'tagFeed', params: {slug: tag}}"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionsTypes} from '@/store/modules/tags';
import appLoading from '@/components/Loading';
import appError from '@/components/Error';

export default {
  name: 'appTags',
  components: {
    appLoading,
    appError,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.tags.tagsLoading,
      error: (state) => state.tags.error,
      tags: (state) => state.tags.data,
    }),
  },
  mounted() {
    this.$store.dispatch(actionsTypes.getPopularTags);
  },
};
</script>
