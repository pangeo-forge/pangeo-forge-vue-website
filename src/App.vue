<!--
We try to follow this formula for layouts
https://markus.oberlehner.net/blog/dynamic-vue-layout-components/
-->

<template>
  <component :is="layout">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<style lang="scss">
@import "scss/pangeo-style.scss";
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      layout: 'div',
    };
  },
};
</script>
