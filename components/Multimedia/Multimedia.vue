<template>
  <section id="multimedia" class="multimedia">
    <SectionHeader section-name="Мультимедиа" is-multimedia />
    <div class="multimedia__slider swiper">
      <button
        slot="button-prev"
        type="button"
        class="multimedia__nav multimedia__nav--prev"
      >
        <span class="vicon vicon--larrow multimedia__nav_icon">
          <svg class="vicon__body">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#vicon-rarrow"
            ></use>
          </svg>
        </span>
      </button>
      <div
        class="multimedia__scroll_indicator multimedia__scroll_indicator--prev multimedia__scroll_indicator--inactive"
      ></div>
      <swiper
        class="multimedia__canvas swiper"
        :options="swiperOptionTop"
        @ready="swiperTopReady"
      >
        <swiper-slide v-for="item in 8" :key="item.id" class="multimedia__item">
          <Uho has-photo has-tag />
        </swiper-slide>
      </swiper>
      <div
        class="multimedia__scroll_indicator multimedia__scroll_indicator--next"
      ></div>
      <button
        slot="button-next"
        type="button"
        class="multimedia__nav multimedia__nav--next"
      >
        <span class="vicon vicon--rarrow multimedia__nav_icon">
          <svg class="vicon__body">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#vicon-rarrow"
            ></use>
          </svg>
        </span>
      </button>
    </div>
  </section>
</template>

<script src="./Multimedia.ts" lang="ts"></script>
<style src="./Multimedia.scss" lang="scss" scoped></style>
