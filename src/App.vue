<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/nav";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
#app {
}
</style>
