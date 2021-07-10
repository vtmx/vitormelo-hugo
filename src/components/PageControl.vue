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
  mounted() {
    const container = document.querySelector("main");
    const pages = container.querySelectorAll("main section");
    const prevPageButton = document.querySelector("#prev-page");
    const nextPageButton = document.querySelector("#next-page");

    let firstPage = 0;
    let lastPage = pages.length - 1;
    let currentPage = firstPage;
    pages[currentPage].classList.add("active");

    function removeActive() {
      container.querySelector(".active").classList.remove("active");
    }

    function activePage() {
      pages[currentPage].classList.add("active");
    }

    prevPageButton.addEventListener("click", () => {
      removeActive();
      if (currentPage > firstPage) {
        currentPage--;
      } else {
        currentPage = lastPage;
      }
      activePage();
    });

    nextPageButton.addEventListener("click", () => {
      removeActive();
      if (currentPage < lastPage) {
        currentPage++;
      } else {
        currentPage = firstPage;
      }
      activePage();
    });
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
