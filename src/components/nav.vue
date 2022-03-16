<template lang="">
  <header class="flex justify-between p-5 max-w-7xl mx-auto">
    <div class="flex items-center space-x-5">
      <router-link to="/">
        <img
          class="w-40 object-contain cursor-pointer"
          alt="logo"
          src="@/assets/logo.png"
        />
      </router-link>
      <div class="hidden md:inline-flex items-center space-x-5">
        <h3>About</h3>
        <h3>Contact</h3>
        <h2 class="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h2>
      </div>
    </div>

    <div class="flex items-center space-x-4 text-green-600">
      <h3>Sign In</h3>
      <h3 class="border border-green-600 rounded-full py-1 px-4">
        Get Started
      </h3>
    </div>
  </header>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang=""></style>
