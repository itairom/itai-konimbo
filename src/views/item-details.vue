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
      <information-modal v-show="this.isNarrow" />
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
        <div class="mobile-information" v-show="!this.isNarrow">
          <information-modal />
        </div>
      </div>

  </section>
  <section v-else class="loading">Loading</section>
</template>

<script>
import itemService from "@/services/item.service.js";
import { Utils } from "./../services/utils.service";
import { Carousel, Slide } from "vue-carousel";
import InformationModal from "@/cmps/information-modal";

export default {
  components: {
    Carousel,
    Slide,
    InformationModal,
  },
  
  async created() {
    const { id } = this.$route.params;
    this.item = await itemService.getItemById(id);
    this.currImage = this.item.images[0].url;
    this.onLoad();
  },
  data() {
    return {
      item: null,
      currImage: null,
      isNarrow: null,
    };
  },
  updated(){
    console.log("in");
  },
  methods: {
    onLoad() {
      window.addEventListener("resize", this.widthListner);
    },

    widthListner() {
      let pageWidth = window.innerWidth;
      console.log(
        "🚀 ~ file: item-details.vue ~ line 95 ~ widthListner ~ pageWidth",
        pageWidth
      );
      if (pageWidth > 500) {
        this.isNarrow = true;
      } else {
        this.isNarrow = false;
      }
      console.log( this.isNarrow)
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

