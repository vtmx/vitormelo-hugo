<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="title">{{ about.title }}</h2>
      <img class="avatar" :src="about.image" :alt="about.alt" />
      <p>{{ about.text }}</p>
    </div>
  </section>
</template>

<script>
import about from '../data/about.json';
export default {
  name: 'About',

  data() {
    return {
      about,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
