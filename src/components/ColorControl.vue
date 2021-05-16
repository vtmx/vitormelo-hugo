<template>
  <div class="color-control">
    <a href="#" class="btn-icon" title="Modo escuro" @click="toggleColorSheme"><i class="fas fa-moon"></i></a>
    <a href="#" class="btn-icon" title="Escolha cor">
      <i class="fas fa-palette"></i>
    </a>
    <a href="#" class="btn-icon" title="Alto contraste" @click="toggleHighCoontrast"><i class="fas fa-adjust"></i></a>
  </div>
</template>

<script>
export default {
  name: 'ColorControl',

  data() {
    return {};
  },
  methods: {
    toggleColorSheme() {
      document.body.classList.toggle('color-scheme-dark');
    },
    toggleHighCoontrast() {
      alert('contrast');
    },
  },
};
</script>

<style lang="scss" scoped>
.color-control {
  grid-area: color;
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 0;
}
</style>
