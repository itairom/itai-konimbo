import Vue from 'vue';
import VueRouter from 'vue-router';
import konimboApp from '@/views/konimbo-app';
import itemDetails from '@/views/item-details';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: konimboApp
  },
  {
    path: '/:id',
    component: itemDetails
  },
];

const router = new VueRouter({ routes });

export default router;
