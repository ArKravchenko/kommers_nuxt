<template>


  <div class="incut incut--wide">
    <div v-if="getRawHtml" style="height: 200px; background-color: gray">
      <h3>Зашлушка свободного вреза,
        свободный врез не будет работать без
        скриптов со старого сайта</h3>
      {{ getRawHtml }}
    </div>
  </div>


</template>

<script src="./Free.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


