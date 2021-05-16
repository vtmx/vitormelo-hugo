<template>
  <div class="page-control">
    <a href="#" class="btn-icon" title="Página anterior" @click="prevPage"><i class="fas fa-chevron-left"></i></a>
    <a href="#" class="btn-icon" title="Próxima página" @click="nextPage"><i class="fas fa-chevron-right"></i></a>
  </div>
</template>

<script>
export default {
  name: 'PageControl',

  data() {
    return {};
  },
  methods: {
    nextPage() {
      alert('next page');
    },
    prevPage() {
      alert('prev page');
    },
  },
};
</script>

<style lang="scss" scoped>
.page-control {
  grid-area: page;
  display: flex;
  gap: 8px;
  line-height: 0;
}
</style>
