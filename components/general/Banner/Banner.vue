<template>

  <div ref="scripts">
    <div v-if="getRawHtml && visible"
         style="display: flex; justify-content: center"
         v-html="getRawHtml">
    </div>
  </div>

</template>

<script src="./Banner.ts" lang="ts"></script>
<!--<style src="./Banner.scss" lang="scss" scoped></style>-->

