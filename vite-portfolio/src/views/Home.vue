<template>
  <div>
    <Hero :configuration="heroStyles">
      <template #heading>
        <h1>Justin Hays: Portfolio</h1>
      </template>
    </Hero>
    <h2>H2 Heading</h2>
    <h3>H3 Heading</h3>
    <h4>H4 Heading</h4>
    <h5>H5 Heading</h5>
    <h6>H6 Heading</h6>
    <p>Paragraph</p>
    <a href="https://www.google.com">Link</a>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import Hero from '../components/layout/hero/Hero.vue';
import { HeroConfiguration } from '../components/layout/hero/Hero';

export default {
  components: {
    Hero
  },

  setup() {
    const store = useStore();
    const heroStyles: HeroConfiguration = {

    };

    return {
      playerName: computed(() => store.getters.getPlayerName)
    }
  }
}
</script>