<template>
  <nav>
    <h1 class="logo">
      <a href="#">Vitor Melo</a>
    </h1>
    <div class="menu">
      <h2 class="invisible">Menu</h2>
      <template v-for="item in nav" :key="item.name">
        <a :href="item.link" :class="{ active: isActive }" @click="toggleActive($event)"><i :class="item.icon" class="invisible"></i> {{ item.name }}</a>
      </template>
    </div>

    <div class="social">
      <template v-for="social in social" :key="social.name">
        <a class="btn-icon" :href="social.link" :title="social.name" :class="{ active: isActive }" target="_blank"
          ><i :class="social.icon"></i> <span class="invisible">{{ social.name }}</span></a
        >
      </template>
    </div>
  </nav>
</template>

<script>
import nav from '../data/nav.json';
import social from '../data/social.json';

export default {
  name: 'NavSocial',

  data() {
    return {
      nav,
      social,
      isActive: false,
    };
  },
  methods: {
    toggleActive(e) {
      let menuItems = document.querySelectorAll('.menu a');
      menuItems.forEach((item) => {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  //position: fixed;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 24vw;
  height: 100vh;
}

.logo a {
  display: flex;
  height: 80px;
  padding: 32px;
  font-weight: bold;
  color: var(--grey800);
  font-size: 24px;
}

.menu {
  a {
    display: block;
    flex-direction: column;
    padding: 16px 32px;
    color: var(--menu-fg);

    &:hover {
      text-indent: 4px;
      color: var(--menu-fg-hover);
    }

    &:active {
      color: var(--menu-fg-active);
      transition: none;
    }
  }

  .active {
    text-indent: 4px;
    color: var(--primary);
  }
}

.social {
  display: flex;
  gap: 8px;
  margin: 16px;
  line-height: 0;
}
</style>

