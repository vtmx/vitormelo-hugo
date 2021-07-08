<template>
  <div class="color-control">
    <a href="#" class="btn-icon" title="Modo escuro" @click="toggleColorSheme"
      ><i class="fas fa-moon"></i
    ></a>
    <a href="#" class="btn-icon" title="Escolha cor">
      <i class="fas fa-palette"></i>
    </a>
    <a
      href="#"
      class="btn-icon"
      title="Alto contraste"
      @click="toggleHighCoontrast"
      ><i class="fas fa-adjust"></i
    ></a>
  </div>
</template>

<script>
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.querySelector("body").classList.add("dark");
  localStorage.theme = "dark";
} else {
  document.querySelector("body").classList.remove("dark");
  localStorage.theme = "";
}

export default {
  name: "ColorControl",

  data() {
    return {};
  },
  methods: {
    toggleColorSheme(e) {
      e.preventDefault();
      if (localStorage.theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        localStorage.theme = "";
      } else {
        document.querySelector("body").classList.add("dark");
        localStorage.theme = "dark";
      }
    },
    toggleHighCoontrast() {
      alert("contrast");
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
