<template>
  <section v-if="item" class="main-container item-details">
    <div class="image-container">
      <div class="main-image">
        <img alt="`item image`" :src="currImage" />
      </div>
      <div class="preview-images">
        <carousel :centerMode="true">
          <slide
            v-for="(img, index) in item.images"
            v-bind:key="getId + index + ''"
          >
            <img
              :src="img.url"
              :alt="item.title"
              @click="setCurrImage(img.url)"
              v-bind:key="getId + index + ''"
            />
          </slide>
        </carousel>
      </div>
    </div>
    <div class="info-section">
      <h1>{{ item.title }}</h1>
      <h1>{{ item.desc }}</h1>
      <div class="left-section flex column">
        <div class="purchase-section flex">
          <div class="price-container flex column">
            <h1 class="origin-price" v-if="item.origin_price">
              {{ item.origin_price }} ₪
            </h1>
            <h1>{{ item.price }} ₪</h1>
          </div>
          <div class="btn animate__headShake">קנה עכשיו</div>
          <div class="btn">הוסף לסל</div>
        </div>
        <div class="purchase-info">
          <div class="shipping">
            <img :src="require('@/assets/img/shipped.png')" alt="map" />
            <p>משלוח מהיר בקנייה מעל ₪200.</p>
          </div>
          <div class="map">
            <img :src="require('@/assets/img/map.png')" alt="map" />
            <p>אפשרות איסוף מנקודות רבות ברחבי הארץ.</p>
          </div>
          <div class="payment">
            <img :src="require('@/assets/img/credit-card.png')" alt="map" />
            <p>אפשרות לעד 24 תשלומים ללא ריבית.</p>
          </div>
        </div>
      </div>
      <newsletter-form />
      <a class="flex" href="./">
        <img :src="require('@/assets/img/back.png')" alt="map" />
        <span>חזרה</span>
      </a>
    </div>
  </section>
  <section v-else class="loading">Loading</section>
</template>

<script>
import itemService from "@/services/item.service.js";
import { Utils } from "./../services/utils.service";
import { Carousel, Slide } from "vue-carousel";
import newsletterForm from "@/cmps/newsletter-form";

export default {
  components: {
    Carousel,
    Slide,
    newsletterForm,
  },
  async created() {
    const { id } = this.$route.params;
    this.item = await itemService.getItemById(id);
    this.currImage = this.item.images[0].url;
  },
  data() {
    return {
      item: null,
      currImage: null,
    };
  },
  methods: {
    getId() {
      return Utils.getRandomId();
    },
    setCurrImage(img) {
      this.currImage = img;
    },
  },
};
</script>

