<template>
  <picture v-if="src">

    <source v-if="webpSrcSet && sizes"
            :class="sourceClass"
            :data-srcset="webpSrcSet"
            type="image/webp"
            :sizes="sizes"
    >
    <source v-if="jpegSrcSet && sizes"
            :class="sourceClass"
            :data-srcset="jpegSrcSet"
            :sizes="sizes"
    >
    <img :class="imgClass"
         :src="$imgPlaceholder"
         :data-src="src"
         :alt="alt"
         v-lazytest
    >
    <noscript v-if="noscriptString" v-html="noscriptString">
    </noscript>
  </picture>


</template>

<script src="./Picture.ts" lang="ts"></script>
<!--<style src="./Picture.scss" lang="scss" scoped></style>-->

