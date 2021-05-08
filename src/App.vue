<template>
  <Nav />
  <About />
  <Services />
  <Education />
  <Certifications />
  <Skills />
  <Experiences />
  <Social />
</template>

<script>
import About from './components/About.vue';
import Certifications from './components/Certifications.vue';
import Education from './components/Education.vue';
import Experiences from './components/Experiences.vue';
import Nav from './components/Nav.vue';
import Services from './components/Services.vue';
import Skills from './components/Skills.vue';
import Social from './components/Social.vue';
import './scss/main.scss';

export default {
  name: 'App',
  components: {
    About,
    Certifications,
    Education,
    Experiences,
    Nav,
    Services,
    Skills,
    Social,
  },
};
</script>