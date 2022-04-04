<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'appError',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Error...',
    },
  },
};
</script>
