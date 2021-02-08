<template>
  <div>
    <h1>Home</h1>
    <button @click="getPlayerName">
      PlayerName
    </button>
  </div>
</template>

<script>
import store from '../store';
export default {
  setup() {
    const getPlayerName = () => {
      return store.getters;
    };

    return {
      getPlayerName
    }
  }
}
</script>