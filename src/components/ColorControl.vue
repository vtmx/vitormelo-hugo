<template>
  <div class="color-control">
    <a href="#" title="Modo escuro" @click="toggleColorSheme"><i class="fas fa-moon"></i></a>
    <a href="#" title="Alto contraste" @click="toggleHighCoontrast"><i class="fas fa-adjust"></i></a>
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
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 0;

  a {
    padding: 16px;
    font-size: 16px;
    background: var(--grey100);
    color: var(--grey500);

    &:hover {
      background: var(--primary);
      color: var(--white);
    }

    &:active {
      background: var(--grey800);
      color: var(--white);
      transition: none;
    }
  }
}
</style>
