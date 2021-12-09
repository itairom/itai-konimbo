<template>
  <section v-if="item" class="main-container item-details">
    <div class="image-container">
      <div class="main-image">
        <img alt="`item image`" :src="currImage" />
      </div>
      <div class="preview-images">
        <!-- <img
          v-for="img in item.images"
          :src="img.url"
          @click="setCurrImage(img.url)"
          v-bind:key="getId"
        /> -->
        <carousel :centerMode="true">
          <slide v-for="img in item.images">
            <img
              :src="img.url"
              :alt="item.title"
              @click="setCurrImage(img.url)"
              v-bind:key="getId"
            />
          </slide>
        </carousel>
      </div>
    </div>
    <div class="info-section">
      <h1>{{ item.title }}</h1>
      <h1>{{ item.desc }}</h1>
      <div class="flex column">
        <div class="purchase-section flex">
          <div class="flex column">
            <h1 class="origin-price" v-if="item.origin_price">
              {{ item.origin_price }} ₪
            </h1>
            <h1>{{ item.price }} ₪</h1>
          </div>
          <div class="btn">קנה עכשיו</div>
          <div class="btn">הוסף לסל</div>
        </div>
        <div class="purchase-info">
          <div class="shipping">
            <img :src="require('@/assets/img/shipped.png')" alt="map" />
            <p>משלוח מהיר בקנייה מעל ₪200</p>
          </div>
          <div class="map">
            <img :src="require('@/assets/img/map.png')" alt="map" />
            <p>אפשרות איסוף מנקודות רבות ברחבי הארץ</p>
          </div>
          <div class="payment">
            <img :src="require('@/assets/img/credit-card.png')" alt="map" />
            <p>אפשרות לעד 24 תשלומים ללא ריבית</p>
          </div>
        </div>
      </div>
    </div>
  <button 
  @click="postDetails">שלח</button>
  </section>
  <section v-else class="loading">Loading</section>
</template>

<script>
import itemService from "@/services/item.service.js";
import { Utils } from "./../services/utils.service";
import { Carousel, Slide } from "vue-carousel";

export default {
  async created() {
    const { id } = this.$route.params;
    this.item = await itemService.getItemById(id);
    this.currImage = this.item.images[0].url;
  },
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      item: null,
      currImage: null,
    };
  },
  methods: {
    postDetails(){
itemService.postDetails()
    },
    getId() {
      return Utils.getRandomId();
    },
    setCurrImage(img) {
      this.currImage = img;
    },
  },
  computed: {},
};
</script>

