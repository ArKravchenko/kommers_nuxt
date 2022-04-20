<template>
  <article class="photd">
    <h4 class="photd__tag">
      {{ photoOfTheDayData.content.plashka }}
    </h4>
    <div class="photd__photo stretch_photo stretch_photo--cover photd__photo--angled">
<!--      <picture>-->
<!--        <source class="slider-img" type="image/webp" srcset="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvDwACAAdQ97rXvf+BiOh/AAA=" data-slider-srcset="https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t241_205716.webp 1200w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t240_205716.webp 1035w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t239_205716.webp 990w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t250_205716.webp 870w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t238_205716.webp 690w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t237_205716.webp 660w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t236_205716.webp 600w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t235_205716.webp 580w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t234_205716.webp 550w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t233_205716.webp 480w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t232_205716.webp 370w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t231_205716.webp 360w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t230_205716.webp 300w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t229_205716.webp 250w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t228_205716.webp 240w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t227_205716.webp 180w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t226_205716.webp 160w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t225_205716.webp 143w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t224_205716.webp 120w" sizes="(min-width: <%= desktop1 %>px) 460px">-->
<!--        <source class="slider-img" srcset="data:image/gif;base64,R0lGODlhEAAJAIAAAO7u7gAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" data-slider-srcset="https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t241_205716.jpg 1200w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t240_205716.jpg 1035w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t239_205716.jpg 990w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t250_205716.jpg 870w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t238_205716.jpg 690w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t237_205716.jpg 660w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t236_205716.jpg 600w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t235_205716.jpg 580w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t234_205716.jpg 550w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t233_205716.jpg 480w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t232_205716.jpg 370w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t231_205716.jpg 360w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t230_205716.jpg 300w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t229_205716.jpg 250w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t228_205716.jpg 240w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t227_205716.jpg 180w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t226_205716.jpg 160w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t225_205716.jpg 143w, https://im.kommersant.ru/Issues.photo/DAILY/2021/008/KMO_148816_00008_1_t224_205716.jpg 120w" sizes="(min-width: <%= desktop1 %>px) 460px">-->
<!--        <img class="slider-img" src="data:image/gif;base64,R0lGODlhEAAJAIAAAO7u7gAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" data-slider-src="https://im.kommersant.ru/Issues.photo/CORP/2020/10/23/KMO_096855_23915_1_t218_105019.jpg" alt="">-->
<!--      </picture>-->
        <img class="slider-img"
             v-lazy="cdnUrl+photoOfTheDayData.content.img.src"
             :src="$imgPlaceholder"
             :alt="photoOfTheDayData.content.img.alt">
    </div>
    <h2 class="photd__name">
      <a :href="photoOfTheDayData.content.href" class="link link_overlay">
        {{ photoOfTheDayData.content.caption }}
      </a>
    </h2>
  </article>

</template>

<script src="./PhotoOfTheDay.ts" lang="ts"></script>
<style src="./PhotoOfTheDay.scss" lang="scss" scoped></style>

