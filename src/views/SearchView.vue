<template>
  <div>
    <navbarComponent/>
    <SearchComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchComponent from '@/components/SearchComponent.vue'
import navbarComponent from '@/components/BaseComponent/navbarComponent.vue'

export default {
  name: 'SearchView',
  components: {
    SearchComponent,
    navbarComponent
  }
}
</script>

<style scoped>

</style>