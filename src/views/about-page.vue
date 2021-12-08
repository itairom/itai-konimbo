<template>
  <section class="about-page main-container">
    <h3 :style="{fontSize:`${fSize}px`}">about sweet about</h3>
    <p>
      <router-link to="/about/team">About our team</router-link>
    </p>
    <p>
      <router-link to="/about/product">About our product</router-link>
    </p>
    <transition name="fade">
      <router-view />
    </transition>
    <button @click="callBus">Call the bus!</button>
    <button @click="fSize+=2">Bigger?</button>
  </section>
</template>

<script>
import { eventBus } from '@/services/event-bus.service.js';
export default {
  data() {
    return {
      fSize: 22,
    };
  },
  methods: {
    callBus() {
      eventBus.$emit('puk');
    },
  },
  watch: {
    fSize(newVal, oldVal) {
        console.log(this.fSize,'fsizee');
        console.log('new',newVal);
        console.log('old',oldVal);
    },
    '$route.params.id'(newVal, oldVal) {
        // load!
        console.log('new',newVal);
        console.log('old',oldVal);
    },
  },
};
</script>