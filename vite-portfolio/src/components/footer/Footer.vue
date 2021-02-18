<template>
  <div class="app-footer">
    Copyright 2021
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@use 'src/assets/sass/constants.scss';

.app-footer {
  width: 100%;
  display: flex;
  align-items: center;
  color: constants.$base-accent-color;
  background-color: constants.$primary-color;
  padding: 0 constants.$content-padding;
  height: constants.$bar-height;
}
</style>