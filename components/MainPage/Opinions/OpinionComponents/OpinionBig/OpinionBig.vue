<template>

  <article class="opinion_big">

    <div class="opinion_big__text">
      <p class="opinion_big__tag">{{ opinionData.tag }}</p>
      <h2 class="opinion_big__name">
        <a :href="opinionData.href" class="link link_overlay_wide">{{ opinionData.title }}</a>
      </h2>
    </div>
    <div class="opinion_big__photo stretch_photo stretch_photo--cover">
      <img class="opinion_big__img fallback_image"
           :data-src="cdnUrl+opinionData.img.src"
           v-lazytest
           :src="$imgPlaceholder"
           :alt="opinionData.img.alt">
<!--      <component v-if="$isServer" is="noscript">-->
<!--        <img class="opinion_big__img fallback_image"-->
<!--             :src="cdnUrl+opinionData.img.src"-->
<!--             :alt="opinionData.img.alt"-->
<!--        >-->
<!--      </component>-->
    </div>
  </article>

</template>

<script src="./OpinionBig.ts" lang="ts"></script>
<style src="./OpinionBig.scss" lang="scss" scoped></style>


