<template>
  <section id="services" class="section">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="services">
        <div class="service" v-for="service in services" :key="service.name">
          <div class="circle">
            <i :class="service.icon"></i>
          </div>
          <h3 class="name">{{ service.name }}</h3>
          <p class="description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../data/services.json';
export default {
  name: 'Services',

  data() {
    return {
      title: 'Serviços',
      services,
    };
  },
};
</script>

<style scoped>
</style>