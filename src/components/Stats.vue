<template>
  <section>
    <nav id="stats" class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Feedstocks</p>
          <p class="subtitle is-4">{{ feedstocks }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Recipes</p>
          <p class="subtitle is-4">{{ recipes }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Datasets</p>
          <p class="subtitle is-4">{{ datasets }}</p>
        </div>
      </div>
    </nav>
  </section>
</template>


<script>

import axios from 'axios';

export default {
  name: 'Stats',
  data: function () {
    return {
      feedstocks: "-",
      recipes: "-",
      datasets: "-",
      loading: true,
      errored: false
    }
  },
  mounted () {
  axios
    .get('http://api-staging.pangeo-forge.org/stats/recipe_runs')
    .then(response => {
      this.recipes = response.data.count
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
}
</script>

<style lang="scss">

// info bar
nav#stats {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #eee;
  color: #222;
}

nav#stats p.subtitle {
  color: #e50051
}

</style>
