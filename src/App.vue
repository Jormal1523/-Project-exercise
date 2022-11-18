<template>
  <div>
    <navbarComponent />
    <router-view v-slot="{ Component }" :key="key">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
    <footerComponent />
  </div>
</template>

<script>
import navbarComponent from "@/components/BaseComponent/navbarComponent.vue";
import footerComponent from "@/components/BaseComponent/footerComponent.vue";
export default {
  components: {
    navbarComponent,
    footerComponent,
  },
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
