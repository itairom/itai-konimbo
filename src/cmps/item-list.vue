<template>
  <ul v-if="items" class="item-list clean-list flex wrap justify-center">
    <li v-for="item in items" :key="item.id">
      <item-preview :item="item" />
    </li>
  </ul>
</template>

<script>
import ItemPreview from './item-preview.vue';
export default {
  created() {
      // console.log('items',this.items);
  },
  components: {
    ItemPreview
  },

  props: {
    items: Array,
  },
  methods: {

  },
  computed:{

  }
};
</script>

