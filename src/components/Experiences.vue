<template>
  <section id="experiences" class="section">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="experience" v-for="experience in experiences" :key="experience.name">
        <div class="name">{{ experience.name }}</div>
        <div class="org">
          <span>{{ experience.org_name }}</span>
        </div>
        <div class="time">
          <span>{{ experience.date_start }}</span> &ndash; <span>{{ experience.date_end }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import experiences from '../data/experiences.json';
export default {
  name: 'Experiences',

  data() {
    return {
      title: 'Experiências',
      experiences,
    };
  },
};
</script>

<style scoped>
</style>