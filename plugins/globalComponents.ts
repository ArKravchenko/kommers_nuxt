import Vue from "vue"
// import Picture from "@/components/general/Picture/Picture.vue";
const Picture = () => import(
  /* webpackChunkName: "Picture." */
  /* webpackMode: "eager" */
  "@/components/general/Picture/Picture.vue");
const Banner = () => import(
  /* webpackChunkName: "Banner." */
  /* webpackMode: "eager" */
  "@/components/general/Banner/Banner.vue");


Vue.component('Picture',Picture)
Vue.component('Banner',Banner)

