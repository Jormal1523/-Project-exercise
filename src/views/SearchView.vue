<template>
  <div>
    <navbarComponent/>
    <div class="hello">
      <h1>Search</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbarComponent from '@/components/BaseComponent/navbarComponent.vue'

export default {
  name: 'SearchView',
  components: {
    navbarComponent
  }
}
</script>

<style scoped>

</style>