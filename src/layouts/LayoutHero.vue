<template>
  <layout-default>
    <template v-slot:hero>
      <div class="hero-body">
        <div class="container has-text-centered">
          <img id="logo" alt="Pangeo Forage Logo" src="../assets/pangeo-forge-logo-white.png">
          <h2 class="subtitle">
            A cloud-native data repository for ocean, weather, and climate science.
          </h2>
        </div>
        <!-- disable search bar and stats until we actually have content -->
        <!-- <SearchBar /> -->
      </div>
    </template>
    <slot />
  </layout-default>
</template>


<script>
import LayoutDefault from './LayoutDefault.vue';

export default {
    name: 'Home',
    components: {
      LayoutDefault,
    },
};
</script>
