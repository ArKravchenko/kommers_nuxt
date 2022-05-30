<template>

  <article class="photd">
    <h4 class="photd__tag">
      {{ graphOfTheDayData.content.plashka }}
    </h4>
    <div class="photd__photo stretch_photo">

      <Picture
        :img-class="'photd__img slider-img'"
        :src="getGraphOfTheDayImageSrc"
        :alt="getGraphOfTheDayImageAlt"
        :noscript-string="getNoscriptString"
      />

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

