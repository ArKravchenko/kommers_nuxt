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

      <Picture
        :img-class="'slider-img'"
        :src="getVideoOfTheDayImageSrc"
        :alt="getVideoOfTheDayImageAlt"
        :noscript-string="getNoscriptString"
      />

    </div>
    <h2 class="photd__name">
      <a :href="videoOfTheDayData.content.href" class="link link_overlay">
        {{ videoOfTheDayData.content.caption }}
      </a>
    </h2>
  </article>


</template>

<script src="./VideoOfTheDay.ts" lang="ts"></script>
<style src="./VideoOfTheDay.scss" lang="scss" scoped></style>

