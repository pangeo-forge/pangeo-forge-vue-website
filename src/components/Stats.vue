<template>
  <section>
    <nav id="stats" class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Recipes</p>
          <p class="title has-text-link">{{ recipes }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Datasets</p>
          <p class="title has-text-link">{{ datasets }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Contributors</p>
          <p class="title has-text-link">{{ contributors }}</p>
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
      recipes: 0,
      datasets: 0,
      contributors: 0
    }
  }
}
</script>

<style lang="scss">

// info bar
nav#stats {
  padding-top: 20px;
}

</style>
