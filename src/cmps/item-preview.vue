<template>
  <router-link class="link" :to="`/${item.id}`">
    <article class="item-preview flex">
      <img v-if="item.images[0]" :src="item.images[0].url" :alt="item" />
    <img v-else :src="require('@/assets/img/not-found.png')" alt="not-found" />

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
  props: {
    item: Object,
  },
  computed: {},
};
</script>