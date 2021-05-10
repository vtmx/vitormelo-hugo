<template>
  <div class="page-control">
    <a href="#"><i class="fas fa-chevron-left"></i></a>
    <a href="#"><i class="fas fa-chevron-right"></i></a>
  </div>
</template>

<script>
export default {
  name: 'PageControl',

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.page-control {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  line-height: 0;

  a {
    padding: 12px 16px;
    font-size: 18px;
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