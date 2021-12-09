<template>
  <router-link class="link" :to="`/${item.id}`">
    <article class="item-preview flex">
      <img :src="this.item.images[0].url" :alt="item" />
      <p class="title">{{ item.title }}</p>
      <div class="price-container">
        <p v-if="item.origin_price" class="origin-price">₪  {{ item.origin_price }}</p>
        <p class="price">₪ {{ item.price }}</p>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  created() {},
  props: {
    item: Object,
  },
  computed: {},
};
</script>