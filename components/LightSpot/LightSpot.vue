<template>
  <section class="light_spot">
    <swiper
      class="swiper light_spot_slider"
      :options="swiperOption"
      @ready="swiperReady"
    >
      <swiper-slide v-for="slide in slideList" :key="slide.id">
        <component :is="slide"></component>
      </swiper-slide>
    </swiper>
    <button
      slot="button-next"
      type="button"
      class="light_spot_slider__nav light_spot_slider__nav--next ui-button"
    >
      <span class="vicon vicon--rarrow light_spot_slider__nav_icon">
        <svg class="vicon__body">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#vicon-rarrow"
          ></use>
        </svg>
      </span>
    </button>
    <button
      slot="button-prev"
      type="button"
      class="light_spot_slider__nav light_spot_slider__nav--prev ui-button"
    >
      <span class="vicon vicon--larrow light_spot_slider__nav_icon">
        <svg class="vicon__body">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#vicon-rarrow"
          ></use>
        </svg>
      </span>
    </button>

    <!-- <div class="light_spot_slider">
      <div class="light_spot_slider__nav light_spot_slider__nav--prev">
        <a href="#" class="light_spot_slider__link">
          <span class="vicon vicon--larrow light_spot_slider__nav_icon">
            <svg class="vicon__body">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#vicon-rarrow"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <VideoOfTheDay />
      <div class="light_spot_slider__nav light_spot_slider__nav--next">
        <a href="#" class="light_spot_slider__link">
          <span class="vicon vicon--rarrow light_spot_slider__nav_icon">
            <svg class="vicon__body">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#vicon-rarrow"
              ></use>
            </svg>
          </span>
        </a>
      </div>
    </div> -->
  </section>
</template>

<script src="./LightSpot.ts" lang="ts"></script>
<style src="./LightSpot.scss" lang="scss" scoped></style>
