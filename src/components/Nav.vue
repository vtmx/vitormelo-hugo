<template>
  <nav>
    <div class="logo">
      <a href="#">Vitor Melo</a>
    </div>
    <div class="menu">
      <h2 class="invisible">Menu</h2>
      <a v-for="item in nav" :key="item.name" :href="item.link"><i :class="item.icon" class="invisible"></i> {{ item.name }}</a>
    </div>

    <div class="social">
      <a v-for="social in social" :key="social.name" :href="social.link" :title="social.name" target="_blank"
        ><i :class="social.icon"></i> <span class="invisible">{{ social.name }}</span></a
      >
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
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
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
  &:hover a {
    color: var(--grey600);
  }

  a {
    display: block;
    flex-direction: column;
    padding: 16px 32px;

    &:hover {
      text-indent: 4px;
      // background: linear-gradient(90deg, var(--grey100) 0%, var(--white) 100%);
      color: var(--primary);
    }

    &:active {
      text-indent: 0;
      color: var(--grey800);
      transition: none;
    }
  }
}

.social {
  display: flex;
  gap: 8px;
  margin: 16px;
  line-height: 0;

  a {
    padding: 8px;
    font-size: 24px;
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

