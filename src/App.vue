<template>
  <div class="container">
    <!-- this component will always render the active page based on the route the user is visiting -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "assets/style.css";
</style>
