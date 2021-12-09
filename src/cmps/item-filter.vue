<template>
  <section class="item-filter">
    <form>
      <input
        v-model="filterBy.title"
        @input="filter"
        type="text"
        placeholder="חפש"
      />
      <img :src="require('@/assets/img/loupe.png')" alt="חפש" />
    </form>
    <div @click="toggleCategory()" class="menu-btn">
      <img
        class="menu-btn"
        :src="require('@/assets/svg/menu.svg')"
        alt="menu"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        title: "",
        isMenuOpen: false,
      },
    };
  },
  updated() {},
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
    toggleCategory() {
      const categorySelector = document.querySelector(".item-categories");
      categorySelector.classList.toggle("toggle-menu");
    },
  },
};
</script>
