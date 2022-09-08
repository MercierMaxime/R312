<script>
import Logo from "./icones/Logo.vue";
import Navigation from "./icones/Navbar.vue";

export default {
  components: { Logo, Navigation },
};
</script>

<template>
  <header class="border-b-2 border-indigo-100 bg-white">
    <div class="m-6 flex justify-between">
      <Logo />
      <Navigation />
    </div>
  </header>
</template>
