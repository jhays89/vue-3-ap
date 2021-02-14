<template>
  <Navigation />
  <router-view class="app-page" />
  <Footer />
</template>

<script>
import Navigation from './components/navigation/Navigation.vue';
import Footer from './components/footer/Footer.vue';

export default {
  components: {
    Navigation,
    Footer
  },
  setup() {
    return {

    }
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>