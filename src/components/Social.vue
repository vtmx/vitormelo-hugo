<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div class="social" v-for="social in social" :key="social.name">
      <a class="social-link" target="_blank" :href="social.link" :title="social.name">{{ social.name }}</a>
    </div>
  </div>
</template>

<script>
import social from '../data/social.json';
export default {
  name: 'Social',

  data() {
    return {
      title: 'Social',
      social,
    };
  },
};
</script>

<style scoped>
</style>
