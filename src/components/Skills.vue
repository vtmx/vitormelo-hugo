<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="skills" v-for="skill in skills" :key="skill">
        <div>{{ skill }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from '../data/skills.json';
export default {
  name: 'Skills',

  data() {
    return {
      title: 'Habilidades',
      skills,
    };
  },
};
</script>

<style scoped>
</style>