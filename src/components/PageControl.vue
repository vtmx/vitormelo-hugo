<template>
  <div class="page-control">
    <a
      href="#"
      id="prev-page"
      class="btn-icon"
      title="Página anterior"
      @click="prevPage"
      ><i class="fas fa-chevron-left"></i
    ></a>
    <a
      href="#"
      id="next-page"
      class="btn-icon"
      title="Próxima página"
      @click="nextPage"
      ><i class="fas fa-chevron-right"></i
    ></a>
    <a
      href="#"
      id="to-top"
      class="btn-icon"
      title="Próxima página"
      @click="toTop"
      ><i class="fas fa-chevron-up"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "PageControl",

  data() {
    return {};
  },
  methods: {
    removeActive() {},
    nextPage() {},
    prevPage() {},
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
