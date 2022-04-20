<template>

  <article class="photd">
    <h4 class="photd__tag">
      {{ videoOfTheDayData.content.plashka }}
    </h4>
    <div class="photd__photo stretch_photo stretch_photo--cover photd__photo--angled">
      <a :href="videoOfTheDayData.content.href" class="vicon photd__play">
        <span class="vh">Проиграть</span>
        <svg class="vicon__body" aria-hidden="true">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-round_play"></use>
        </svg>
      </a>
<!--      <picture>-->
<!--        <source class="slider-img" type="image/webp" srcset="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvDwACAAdQ97rXvf+BiOh/AAA=" data-slider-srcset="https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t241_105019.webp 1200w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t240_105019.webp 1035w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t239_105019.webp 990w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t250_105019.webp 870w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t238_105019.webp 690w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t237_105019.webp 660w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t236_105019.webp 600w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t235_105019.webp 580w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t234_105019.webp 550w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t233_105019.webp 480w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t232_105019.webp 370w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t231_105019.webp 360w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t230_105019.webp 300w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t229_105019.webp 250w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t228_105019.webp 240w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t227_105019.webp 180w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t226_105019.webp 160w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t225_105019.webp 143w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t224_105019.webp 120w" sizes="(min-width: <%= desktop1 %>px) 460px">-->
<!--        <source class="slider-img" srcset="data:image/gif;base64,R0lGODlhEAAJAIAAAO7u7gAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" data-slider-srcset="https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t241_105019.jpg 1200w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t240_105019.jpg 1035w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t239_105019.jpg 990w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t250_105019.jpg 870w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t238_105019.jpg 690w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t237_105019.jpg 660w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t236_105019.jpg 600w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t235_105019.jpg 580w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t234_105019.jpg 550w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t233_105019.jpg 480w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t232_105019.jpg 370w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t231_105019.jpg 360w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t230_105019.jpg 300w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t229_105019.jpg 250w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t228_105019.jpg 240w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t227_105019.jpg 180w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t226_105019.jpg 160w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t225_105019.jpg 143w, https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t224_105019.jpg 120w" sizes="(min-width: <%= desktop1 %>px) 460px">-->
<!--        <img class="slider-img" src="data:image/gif;base64,R0lGODlhEAAJAIAAAO7u7gAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" data-slider-src="https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t218_105019.jpg" alt="">-->
<!--      </picture>-->
      <img class="slider-img"
           v-lazy="cdnUrl+videoOfTheDayData.content.img.src"
           :alt="videoOfTheDayData.content.img.alt"
           :src="$imgPlaceholder"
      >

    </div>
    <h2 class="photd__name">
      <a :href="videoOfTheDayData.content.href" class="link link_overlay">
        {{videoOfTheDayData.content.caption}}
      </a>
    </h2>
  </article>


</template>

<script src="./VideoOfTheDay.ts" lang="ts"></script>
<style src="./VideoOfTheDay.scss" lang="scss" scoped></style>

