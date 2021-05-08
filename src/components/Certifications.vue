<template>
  <section id="certifications" class="section">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="certifications" v-for="certification in certifications" :key="certification.name">
        <div class="certification">
          <div class="name">{{ certification.name }}</div>
          <div class="org">{{ certification.org_name }}</div>
          <div class="time">{{ certification.year }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import certifications from '../data/certifications.json';
export default {
  name: 'Certification',

  data() {
    return {
      title: 'Certificações',
      certifications,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
