<template>
  <nav>
    <h1 class="logo">
      <a href="#">Vitor Melo</a>
    </h1>
    <div class="menu">
      <h2 class="invisible">Menu</h2>
      <template v-for="item in nav" :key="item.id">
        <a :href="item.link" @click="toggleActive($event)"
          ><i :class="item.icon" class="invisible"></i> {{ item.name }}</a
        >
      </template>
    </div>

    <div class="social">
      <template v-for="social in social" :key="social.name">
        <a
          class="btn-icon"
          :href="social.link"
          :title="social.name"
          target="_blank"
          ><i :class="social.icon"></i>
          <span class="invisible">{{ social.name }}</span></a
        >
      </template>
    </div>
  </nav>
</template>

<script>
import nav from "../data/nav.json";
import social from "../data/social.json";
import { Ripple } from "../js/ripple.js";
const ripple = new Ripple();

export default {
  name: "Nav",

  data() {
    return {
      nav,
      social,
    };
  },
  mounted() {
    this.firstActive(".menu a");
  },
  methods: {
    firstActive(el) {
      const menuList = document.querySelectorAll(el);
      menuList[0].classList.add("active");
    },
    toggleActive(e) {
      this.removeActive(".menu a", "active");
      this.addActive(e, "active");
      ripple.start(e, "span", "ripple");
    },
    addActive(e, className) {
      e.target.classList.add(className);
    },
    removeActive(el, className) {
      document.querySelectorAll(el).forEach((item) => {
        item.classList.remove(className);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  grid-area: menu;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 24vw;
  height: 100vh;
}

.logo a {
  display: flex;
  align-items: center;
  padding: var(--gap3);
  font-weight: bold;
  font-size: 32px;
  line-height: 1;
  color: var(--logo-fg);
}

.menu {
  a {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    padding: var(--gap2) var(--gap3);
    color: var(--menu-fg);

    &:hover {
      transform: translate3d(4px, 0, 0);
      background: var(--menu-bg-hover);
      color: var(--menu-fg-hover);
    }

    &:active {
      background: var(--menu-bg-active);
      color: var(--menu-fg-active);
      transition: none;
    }
  }

  .active {
    transform: translate3d(4px, 0, 0);
    background: var(--menu-bg-active);
    color: var(--menu-fg-active);
  }
}

.social {
  display: flex;
  gap: 8px;
  margin: 16px;
  line-height: 0;
}
</style>

