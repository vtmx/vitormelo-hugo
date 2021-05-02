<template>
  <section id="education" class="section">
    <div class="container">
      <h2 class="title">{{ title }}</h2>

      <div class="education" v-for="education in education" :key="education.name">
        <div class="name">
          <a :href="education.file" target="_blank">{{ education.name }}</a>
        </div>
        <div class="org">
          {{ education.org_name }}
        </div>
        <div class="time">
          <span>{{ education.year_start }}</span> &ndash; <span>{{ education.year_end }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import education from '../data/education.json';
export default {
  data() {
    return {
      title: 'Formação',
      education,
    };
  },
};
</script>

<style scoped>
</style>
