<template>
  <section class="item-filter">
    <form>
      <input
        v-model="filterBy.title"
        @input="filter"
        type="text"
        placeholder="חפש"
      />
    </form>
    <div 
    @click="toggleCategory()"
    class="menu-btn">BTN</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        title: "",
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
    toggleCategory() {
      console.log('in');
      const categorySelector = document.querySelector(".item-categories");
      categorySelector.classList.toggle("toggle-menu");
    },
  },
};
</script>
