<template>
  <div class="app-navigation">
    <div class="avatar-container">
      <img src="/src/assets/justin-avatar.png">
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

<style>
.app-navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-navigation a {
  padding: 10px;
}

.app-navigation .avatar-container img {
  border-radius: 50%;
}
</style>