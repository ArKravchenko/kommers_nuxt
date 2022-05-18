<template>


  <div class="incut incut--wide" ref="visibilityTarget">
    <div v-if="getRawHtml && visible" v-html="getRawHtml">
<!--      <h3>Зашлушка свободного вреза,-->
<!--        свободный врез не будет работать без-->
<!--        скриптов со старого сайта</h3>-->
<!--      {{ getRawHtml }}-->
    </div>
  </div>


</template>

<script src="./Free.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


