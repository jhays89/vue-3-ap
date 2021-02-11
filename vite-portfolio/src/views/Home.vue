<template>
  <div>
    <h1>Home: {{ playerName }}</h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    return {
      playerName: computed(() => store.getters.getPlayerName)
    }
  }
}
</script>