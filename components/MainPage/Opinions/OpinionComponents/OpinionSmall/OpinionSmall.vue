<template>

  <article class="opinion">
    <div class="opinion__text">
      <p class="opinion__tag">{{ opinionData.tag }}</p>
      <h2 class="opinion__name">
        <a :href="opinionData.href" class="link link_overlay_wide">
          {{ opinionData.title }}
        </a>
      </h2>
    </div>
    <div class="opinion__photo stretch_photo stretch_photo--cover">
      <img class="opinion__img fallback_image"
           :src="cdnUrl+opinionData.img.src"
           :alt="opinionData.img.alt">
    </div>
  </article>

</template>

<script src="./OpinionSmall.ts" lang="ts"></script>
<style src="./OpinionSmall.scss" lang="scss" scoped></style>


