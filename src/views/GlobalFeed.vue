<template>
  <div class="home-page">
    <app-loading v-if="isLoading" />
    <app-error v-if="error" :message="'custom error'" />
    <app-banner />

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <app-feed-toggler />
          <app-feed :api-url="apiUrl" />
        </div>
        <div class="col-md-3">
          <app-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appFeed from '@/components/Feed';
import appTags from '@/components/Tags';
import appBanner from '@/components/Banner';
import appLoading from '@/components/Loading';
import appError from '@/components/Error';
import appFeedToggler from '@/components/FeedToggler';

export default {
  name: 'appGlobalFeed',
  components: {
    appFeed,
    appTags,
    appBanner,
    appLoading,
    appError,
    appFeedToggler,
  },
  data() {
    return {
      apiUrl: '/articles',
    };
  },
};
</script>
