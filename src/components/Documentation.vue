<template>
  <section class="section" id="dochome">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-quarters-tablet is-three-quarters-desktop">
        <div class="block">
          <h1 class="title is-2">Documentation</h1>
          <p>Resources for using Pangeo Forge</p>
        </div>
        <div class="block">
          <h2 class="subtitle is-3">First steps</h2>
          <p>New to Pangeo Forge?  Start here!</p>
          <ul>
              <li><strong><a class="has-text-link" href=https://pangeo-forge.readthedocs.io/en/latest/what_is_pangeo_forge.html>What is Pangeo Forge?</a></strong> - Read more about what Pangeo Forge is and
              how it works.</li>
              <li><strong><a class="has-text-link" href=https://github.com/pangeo-forge/roadmap>Pangeo Forge Roadmap</a></strong> - Read more about the origin and direction of Pangeo Forge.</li>
              <li><strong><a class="has-text-link" href=https://pangeo-forge.readthedocs.io/en/latest/intro_tutorial.html>Introduction Tutorial</a></strong> - Ready to code?  Walk through creating and
              deploying your first data transformation.</li>
          </ul>
        </div>
        <div class="block">
          <h2 class="subtitle is-3">How the documentation is organized</h2>
          <p>Pangeo Forge is made up of many interdependent repositories, but the
              <a class="has-text-link" href="https://pangeo-forge.readthedocs.io/en/latest/">Pangeo Forge Recipes documentation</a>
              is the primary resource for learning about ecosystem-level concepts.  Here is where you will find
              the Introduction Tutorial or more in-depth technical descriptions of the Pangeo Forge architecture.
              This documentation also contains User Guides and Reference Pages for creating recipes.</p>
        </div>
        <div class="block">
          <h2 class="subtitle is-3">Repository reference</h2>
          <p>There are many respositories that make up Pangeo Forge. Here are links to some of the most prominent ones.</p>
          <ul>
              <li><code>pangeo-forge-recipes</code> - <a class="has-text-link" href=https://github.com/pangeo-forge/pangeo-forge-recipes>Repository</a></li>
              <li><code>pangeo-forge-azure-bakery</code> - <a class="has-text-link" href=https://github.com/pangeo-forge/pangeo-forge-azure-bakery>Respository</a></li>
              <li><code>staged-recipes</code> - <a class="has-text-link" href=https://github.com/pangeo-forge/staged-recipes>Repository</a></li>
              <li><code>pangeo-forge-catalog</code> - <a class="has-text-link" href=https://github.com/pangeo-forge/pangeo-forge-catalog>Repository</a></li>
          </ul>
        </div>
        <div class="block">
          <h2 class="subtitle is-3">Connecting to the community</h2>
          <p>Pangeo Forge is a community run effort.  There are multiple roles that people play to support the effort:</p>
          <ol>
              <li>recipe contributors — contributors who write recipes to define the data conversions.  This can be anyone with a desire to create analysis ready cloud-optimized (ARCO) data</li>
              <li>bakery maintainers — contributors who deploy bakeries on cloud infrastructure to process and host the transformed data. This is typically an organization with a grant to fund the infrastructure</li>
          </ol>
              <blockquote>
              The safety and security of all community members is our top priority.
              Please familiarize yourself with our
              <a  class="has-text-link" href="https://github.com/pangeo-forge/roadmap/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a>.
              </blockquote>
          <p>If you are new to Pangeo Forge and looking to get involved, we suggest getting started with recipe
          contribution.  You can do in two ways:</p>
          <ol>
              <li>Open a ticket with a dataset request (no code required!) - Get started here (link) </li>
              <li>Write a recipe for a dataset you'd like to see transformed - See recipe creation docs</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';

export default {
  name: 'DocHome',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
}
</script>
