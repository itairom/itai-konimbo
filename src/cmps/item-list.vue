<template>
  <ul v-if="items" class="item-list clean-list flex wrap justify-center">
    <li v-for="item in items" :key="item.id">
      <item-preview :item="item" />
    </li>
  </ul>
</template>

<script>
import ItemPreview from "./item-preview.vue";
export default {
  components: {
    ItemPreview,
  },
  props: {
    items: Array,
  },
};
</script>

