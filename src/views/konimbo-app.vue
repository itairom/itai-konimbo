<template>
  <section class="main-container item-app">
    <div class="fiter-bar flex">
      <item-filter @filtered="setFilter" />
    </div>
    <div class="item-category flex">
      <div v-if="this.currCategory" class="category-btn">
        
        <span @click="setCategory('')" class="remove-btn"> X </span>
        <span>{{ this.currCategory }}</span>
      </div>
    </div>
    <div class="item-grid flex">
      <item-list :items="itemsToShow" />
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
      console.log(
        "🚀 ~ file: konimbo-app.vue ~ line 39 ~ setFilter ~ filterBy",
        filterBy
      );
      this.filterBy = filterBy;
    },
    setCategory(category) {
      this.currCategory = category;
    },
  },
  computed: {
    // itemsToShow() {
    //   console.log("set");
    //   if (!this.filterBy) return this.items;
    //   const filterByTitle = this.items.map((item) => {
    //     return item.title.include(this.filterBy.title);
    //     //   && item.store_category_title.include(this.category)
    //   });

    //   return filterByTitle;
    // },
    itemsToShow() {
      // if (!this.filterBy) return this.items;

      if (this.currCategory !== "") {
        const regexTitle = new RegExp(this.filterBy.title, "i");
        const filterByTitle = this.items.filter((item) =>
          regexTitle.test(item.title)
        );
        return filterByTitle;
      }

      if (this.currCategory !== "") {
        console.log("categoryy");
        const regexCategory = new RegExp(this.currCategory, "i");
        const filterByCategory = filterByTitle.filter((item) =>
          regexCategory.test(item.store_category_title)
        );
        return filterByCategory;
      }
      return this.items;
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
