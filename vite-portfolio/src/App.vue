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

<style lang="scss">
@use 'src/assets/sass/constants.scss';

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.app-page {
  margin: constants.$content-margin;
}
</style>