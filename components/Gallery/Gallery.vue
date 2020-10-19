<template>
  <div class="gallery-horizontal">
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      @ready="swiperTopReady"
    >
      <swiper-slide
        v-for="(href, index) in imagesList"
        :key="index"
        class="gallery-top__slide"
      >
        <div class="content">
          <img :src="href" class="gallery-top__picture" />
        </div>
      </swiper-slide>
      <button slot="button-next" type="button" class="swiper-button-next">
        next
      </button>
      <button slot="button-prev" type="button" class="swiper-button-prev">
        prev
      </button>
    </swiper>

    <div class="gallery-horizontal__progress">
      {{ activeSlideIndex + 1 }} / {{ countSlides }}
    </div>

    <template v-if="activeSlide">
      <div class="gallery-horizontal__source">
        {{ activeSlide }}
      </div>
    </template>

    <div v-if="preview" class="gallery-thumbs">
      <swiper
        :options="swiperOptionThumbs"
        class="swiper gallery-thumbs__swiper"
        @ready="swiperThumbsReady"
      >
        <swiper-slide
          v-for="(href, index) in imagesList"
          :key="index"
          class="gallery-thumbs__slide"
        >
          <img :src="href" class="gallery-top__picture" />
        </swiper-slide>

        <button slot="button-next" type="button" class="swiper-button-next" />
        <button slot="button-prev" type="button" class="swiper-button-prev" />
      </swiper>
    </div>
  </div>
</template>

<script src="./Gallery.ts" lang="ts"></script>
<style src="./Gallery.scss" lang="scss" scoped></style>
