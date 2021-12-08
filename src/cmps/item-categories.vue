<template>
  <section v-if="categories" class="item-categories">
    <h1>קטגוריות</h1>
    <ul class="categories-list">
      <li
        v-for="category in categories"
        :key="category"
        @click="setCategory(category)"
      >
        {{ category }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  created() {
    console.log(this.categories, "categories");
  },
  data() {
    return {
      filterBy: {
        title: "",
        category: "",
      },
    };
  },
  props: {
    categories: Array,
  },
  methods: {
    setCategory(category) {
      this.$emit("setCategory", category);
    },
  },
};
</script>
