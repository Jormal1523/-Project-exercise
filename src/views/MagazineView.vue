<template>
  <div>
    <navbarComponent/>
    <MagazineComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import MagazineComponent from '@/components/MagazineComponent.vue'
import navbarComponent from '@/components/BaseComponent/navbarComponent.vue'

export default {
  name: 'MagazineView',
  components: {
    MagazineComponent,
    navbarComponent
  }
}
</script>

<style scoped>

</style>