<template>
  <div class="LayoutDefault">
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
                <router-link class="navbar-item" to="/">Home</router-link>
                <a class="navbar-item" href="https://pangeo-forge.readthedocs.io/en/latest/recipe_box.html">
                  Recipes
                </a>
                <router-link class="navbar-item" to="/catalog">Catalog</router-link>
                <a class="navbar-item" href="https://pangeo-forge.readthedocs.io/en/latest/">
                  Documentation
                </a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted"
                      href="https://github.com/pangeo-forge">
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
          <img id="logo" alt="Pangeo Forage Logo" src="../assets/pangeo-forge-logo-white.png">
          <h2 class="subtitle">
            A cloud-native data repository for ocean, weather, and climate science.
          </h2>
        </div>
        <!-- disable search bar and stats until we actually have content -->
        <!-- <SearchBar /> -->
      </div>
    </section>
    <!-- <About /> -->
      <main>
        <slot/>
      </main>
    <!-- <Stats /> -->
  </div>
</template>

<style lang="scss">
@import "../scss/pangeo-style.scss";

// banner image
img#logo {
  margin-bottom: 20px;
}

</style>
