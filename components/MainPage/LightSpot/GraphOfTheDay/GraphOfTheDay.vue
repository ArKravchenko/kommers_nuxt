<template>

  <article class="photd">
    <h4 class="photd__tag">
      {{ graphOfTheDayData.content.plashka }}
    </h4>
    <div class="photd__photo stretch_photo">
<!--      <picture>-->
<!--        <source class="slider-img" type="image/webp" srcset="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvDwACAAdQ97rXvf+BiOh/AAA=" data-slider-srcset="https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t241_212237.webp 1200w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t240_212237.webp 1035w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t239_212237.webp 990w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t250_212237.webp 870w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t238_212237.webp 690w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t237_212237.webp 660w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t236_212237.webp 600w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t235_212237.webp 580w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t234_212237.webp 550w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t233_212237.webp 480w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t232_212237.webp 370w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t231_212237.webp 360w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t230_212237.webp 300w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t229_212237.webp 250w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t228_212237.webp 240w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t227_212237.webp 180w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t226_212237.webp 160w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t225_212237.webp 143w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t224_212237.webp 120w" sizes="(min-width: <%= desktop1 %>px) 430px">-->
<!--        <source class="slider-img" srcset="data:image/gif;base64,R0lGODlhEAAJAIAAAO7u7gAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" data-slider-srcset="https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t241_212237.jpg 1200w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t240_212237.jpg 1035w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t239_212237.jpg 990w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t250_212237.jpg 870w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t238_212237.jpg 690w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t237_212237.jpg 660w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t236_212237.jpg 600w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t235_212237.jpg 580w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t234_212237.jpg 550w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t233_212237.jpg 480w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t232_212237.jpg 370w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t231_212237.jpg 360w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t230_212237.jpg 300w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t229_212237.jpg 250w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t228_212237.jpg 240w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t227_212237.jpg 180w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t226_212237.jpg 160w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t225_212237.jpg 143w, https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t224_212237.jpg 120w" sizes="(min-width: <%= desktop1 %>px) 430px">-->
<!--        <img class="photd__img slider-img" src="data:image/gif;base64,R0lGODlhEAAJAIAAAO7u7gAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" data-slider-src="https://im.kommersant.ru/Issues.photo/CORP/2021/01/14/KMO_111307_34415_1_t218_212237.jpg" alt="">-->
<!--      </picture>-->
      <img class="photd__img slider-img"
           :src="$imgPlaceholder"
           v-lazy="cdnUrl+graphOfTheDayData.content.img.src"
           :alt="graphOfTheDayData.content.img.alt">

    </div>
    <h2 class="photd__name photd__name--wide">
      <a :href="graphOfTheDayData.content.href" class="link link_overlay">
        {{ graphOfTheDayData.content.caption }}
      </a>
    </h2>
  </article>


</template>

<script src="./GraphOfTheDay.ts" lang="ts"></script>
<style src="./GraphOfTheDay.scss" lang="scss" scoped></style>

