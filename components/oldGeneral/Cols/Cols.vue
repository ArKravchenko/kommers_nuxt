<template>
  <h1 :class="$style.h1" @click="logthis">
    Cols component shows how css modules work in nuxt {{ count }}
  </h1>
</template>

<script src="./Cols.ts" lang="ts"></script>
<style src="./Cols.scss" lang="scss" module></style>
