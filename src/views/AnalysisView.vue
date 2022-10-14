<template>
  <div>
    <navbarComponent/>
    <AnalysisComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AnalysisComponent from '@/components/AnalysisComponent.vue'
import navbarComponent from '@/components/BaseComponent/navbarComponent.vue'

export default {
  name: 'AnalysisView',
  components: {
    AnalysisComponent,
    navbarComponent
  }
}
</script>

<style scoped>

</style>