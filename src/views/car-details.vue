<template>
  <section v-if="car" class="car-details main-container flex column align-center">
    <h3>Car Details</h3>
    <div class="car-info">
      <p>Vendor:{{car.vendor}}</p>
      <p>Speed:{{car.speed}}</p>
    </div>
    <router-link to="/car">Back</router-link>
  </section>
  <section v-else class="loading">Loading</section>
</template>

<script>
import itemService from '@/services/item.service.js';
export default {
  data() {
    return {
      car: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.car = await itemService.get(id);
  },
};
</script>

