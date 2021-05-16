<template>
  <nav>
    <h1 class="logo">
      <a href="#">Vitor Melo</a>
    </h1>
    <div class="menu">
      <h2 class="invisible">Menu</h2>
      <template v-for="item in nav" :key="item.id">
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
    display: block;
    flex-direction: column;
    padding: var(--gap2) var(--gap3);
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

