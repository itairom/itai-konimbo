<template>
  <router-link class="link" :to="`/${item.id}`">
    <article class="item-preview flex">
      <p class="title">{{ item.title }}</p>
      <img :src="this.item.images[0].url" :alt="item" />
      <!-- <p class="origin-price">{{ item.origin_price }}</p> -->
      <p class="price">₪ {{ item.price }}</p>
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