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
export default {
  name: 'Stats',
  data: function () {
    return {
      feedstocks: 10,
      recipes: 20,
      datasets: 30
    }
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
