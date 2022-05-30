<template>
  <article class="photd">
    <h4 class="photd__tag">
      {{ photoOfTheDayData.content.plashka }}
    </h4>
    <div class="photd__photo stretch_photo stretch_photo--cover photd__photo--angled">

      <Picture
        :img-class="'slider-img'"
        :src="getPhotoOfTheDayImageSrc"
        :alt="getPhotoOfTheDayImageAlt"
        :noscript-string="getNoscriptString"
      />

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

