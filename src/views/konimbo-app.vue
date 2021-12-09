<template>
  <section class="main-container item-app">
    <div class="filter-bar flex">
      <item-filter @filtered="setFilter" />
    </div>
    <div class="item-category flex">
      <div v-if="this.currCategory" class="category-btn">
        <span @click="setCategory('')" class="remove-btn"> X </span>
        <span>{{ this.currCategory }}</span>
      </div>
    </div>
    <div class="item-grid flex">
      <item-list v-if="items" :items="itemsToShow" />
      <item-categories :categories="setCategories" @setCategory="setCategory" />
    </div>
  </section>
</template>

<script>
import itemService from "@/services/item.service.js";
import itemList from "@/cmps/item-list";
import itemFilter from "@/cmps/item-filter";
import itemCategories from "@/cmps/item-categories";

export default {
  components: {
    itemList,
    itemFilter,
    itemCategories,
  },
  data() {
    return {
      items: null,
      filterBy: { title: "" },
      categories: [],
      currCategory: "",
    };
  },
  created() {
    this.loadItems();
  },
  methods: {
    async loadItems() {
      this.items = await itemService.query();
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    setCategory(category) {
      this.currCategory = category;
    },
  },
  computed: {
    itemsToShow() {
      if (this.currCategory || this.filterBy) {
        const filterByTitle = this.items.filter((item) => {
          if (
            item.store_category_title.includes(this.currCategory) &&
            item.title.toLowerCase().includes(this.filterBy.title.toLowerCase())
          ) {
            return item;
          }
        });
        return filterByTitle;
      } 
    },
    setCategories() {
      const categories = this.items.map((item) => {
        return item.store_category_title;
      });
      const categoriesSet = [...new Set(categories)];
      return categoriesSet;
    },
  },
};
</script>
