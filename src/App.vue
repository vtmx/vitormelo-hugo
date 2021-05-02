<template>
  <About />
  <Certifications />
  <Education />
  <Experiences />
  <Services />
  <Skills />
  <Social />
</template>

<script>
import About from './components/About.vue';
import Certifications from './components/Certifications.vue';
import Education from './components/Education.vue';
import Experiences from './components/Experiences.vue';
import Services from './components/Services.vue';
import Skills from './components/Skills.vue';
import Social from './components/Social.vue';

export default {
  name: 'App',
  components: {
    About,
    Certifications,
    Education,
    Experiences,
    Services,
    Skills,
    Social,
  },
};
</script>