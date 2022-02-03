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

  </div>
</template>

<style lang="css">

// banner image
img#logo {
  margin-bottom: 20px;
}

</style>

<script>
import $ from 'jquery'

export default {
  name: 'Layout',
  mounted () {
    // https://bulma.io/documentation/components/navbar/
    $(document).ready(function() {

      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");

      });
    });
  }
}

</script>
