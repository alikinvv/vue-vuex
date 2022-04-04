<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" alt="" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <span v-if="isAuthor">
            <router-link
              :to="{name: 'editArticle', params: {slug: article.slug}}"
              class="btn btn-outline-secondary btn-sm"
            >
              <i class="ion-edit"></i>
              Edit Article
            </router-link>
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i>
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <app-loading v-if="isLoading" />
      <app-error v-if="error" :message="'custom error'" />

      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <p>{{ article.body }}</p>

          TAGLIST
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {actionsTypes as articleActionTypes} from '@/store/modules/article';
import {getterTypes as authGetterTypes} from '@/store/modules/auth';
import {mapState, mapGetters} from 'vuex';
import appLoading from '@/components/Loading';
import appError from '@/components/Error';

export default {
  name: 'appArticle',
  conponents: {
    appLoading,
    appError,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
      article: (state) => state.article.data,
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser,
    }),
    isAuthor() {
      if (!this.currentUser || !this.article) {
        return false;
      }

      return this.currentUser.username === this.article.author.username;
    },
  },
  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug,
    });
  },
};
</script>
