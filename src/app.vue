<template>
  <section class="app">
    <app-header />
    <router-view />
  </section>
</template>

<script>
import appHeader from '@/cmps/app-header';

export default {
  components: {
    appHeader,
  },
};
</script>

