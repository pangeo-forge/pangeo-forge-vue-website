<template>
  <section class="section" id="stats">

    <div class="columns is-mobile is-centered">
      <div class="column is-three-quarters-tablet is-half-desktop has-text-centered">
        <div class="block">
          <h1 class="title is-1">About Pangeo Forge</h1>
          <p>Pangeo Forge is an open source platform for data Extraction, Transformation, and Loading (ETL).
          The goal of Pangeo Forge is to make it easy to extract data from traditional data repositories and deposit in cloud object storage in analysis-ready, cloud-optimized (ARCO) format.
          Pangeo Forge is inspired directly by Conda Forge, a community-led collection of recipes for building conda packages. We hope that Pangeo Forge can play the same role for datasets.
          </p>
        </div>
        <div class="block">
          <h2 class="title is-2">How it works</h2>
          <figure class="image is-3x2">
            <img src="../assets/pangeo-forge-diagram.png">
          </figure>
          </div>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
        name: 'About',
    }
</script>
