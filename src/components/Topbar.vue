<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'globalFeed'}">
        Medium Clone
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            :to="{name: 'globalFeed'}"
            class="nav-link"
            active-class="active"
            exact
          >
            Home
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link
              :to="{name: 'createArticle'}"
              class="nav-link"
              active-class="active"
            >
              <i class="ion-compose"></i> &nbsp; New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'settings'}"
              class="nav-link"
              active-class="active"
            >
              <i class="ion-gear-a"></i> &nbsp; Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'globalFeed', params: {slug: currentUser.username}}"
              class="nav-link"
              active-class="active"
            >
              <img :src="currentUser.image" alt="" class="user-pic" /> &nbsp;
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>

        <template v-if="isAnonymus">
          <li class="nav-item">
            <router-link
              :to="{name: 'login'}"
              class="nav-link"
              active-class="active"
            >
              Sign in
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'register'}"
              class="nav-link"
              active-class="active"
            >
              Sign Up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
import {getterTypes} from '@/store/modules/auth';

export default {
  name: 'appTopbar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymus: getterTypes.isAnonymus,
    }),
  },
};
</script>
