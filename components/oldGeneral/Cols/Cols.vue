<template>
  <div>
    <h1 :class="$style.h1" @click="logthis">
      Cols component shows how css modules work in nuxt {{ count }}
    </h1>
    <h1 @click="logthis">
      Cols component shows how css scoped work in nuxt {{ count }}
    </h1>
  </div>
</template>

<script src="./Cols.ts" lang="ts"></script>
<style src="./Cols.scss" lang="scss" module scoped></style>
