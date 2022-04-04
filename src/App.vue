<template>
  <app-topbar />
  <router-view />
</template>

<script>
import appTopbar from '@/components/Topbar';
import {actionTypes} from '@/store/modules/auth';

export default {
  name: 'app',
  components: {
    appTopbar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
  },
};
</script>
