<template>
  <section id="skills">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="skills">
        <template v-for="skill in skills" :key="skill">
          <div class="skill">{{ skill }}</div>
        </template>
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