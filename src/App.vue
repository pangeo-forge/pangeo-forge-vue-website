<template>
  <div>
    <section class="hero is-primary is-bold">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> -->
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Recipes
                </a>
                <a class="navbar-item">
                  Catalog
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <i class="mdi mdi-github mdi-24px"></i>
                    </span>
                    <span>Repo</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <img id="logo" alt="Pangeo Forage Logo" src="./assets/pangeo-forge-logo-white.png">
          <h2 class="subtitle">
            A cloud-native data repository for ocean, weather, and climate science.
          </h2>
        </div>
        <SearchBar />
      </div>
    </section>
    <Stats />
  </div>
</template>

<script>
import Stats from './components/Stats.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    Stats,
    SearchBar
  }
}
</script>

<style lang="scss">
@import "./scss/pangeo-style.scss";

// banner image
img#logo {
  margin-bottom: 20px;
}

</style>
