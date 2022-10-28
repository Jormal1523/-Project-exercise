<template>
  <div class="mainContainer">
    <navbarComponent />
    <h1>Login Page</h1>
    <footerComponent />
  </div>
</template>

<script>
import navbarComponent from "@/components/BaseComponent/navbarComponent.vue";
import footerComponent from "@/components/BaseComponent/footerComponent.vue";

export default {
  name: "LoginView",
  components: {
    navbarComponent,
    footerComponent,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap");
.mainContainer {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
}
</style>
