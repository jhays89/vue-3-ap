<template>
  <div class="app-navigation">
    <div class="avatar-container">
      <router-link to="/">
        <img src="/src/assets/justin-avatar.png">
      </router-link>
    </div>
    <div class="link-container">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about-me">
        About Me
      </router-link>
      <router-link to="/builder">
        Game Builder
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@use 'src/assets/sass/constants.scss';

.app-navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: constants.$base-color;
  height: constants.$bar-height;
}

.app-navigation a {
  padding: 10px;
}

.app-navigation .avatar-container img {
  border-radius: 50%;
}
</style>