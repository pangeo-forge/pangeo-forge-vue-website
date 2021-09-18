<template>
  <div class="LayoutDefault">
    <section class="hero is-primary is-bold">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="../assets/pangeo-forge-text-only-white.png" alt="Pangeo Forge Logo">
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
                <router-link class="navbar-item" to="/docs">Documentation</router-link>
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
      <slot name="hero" />
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
