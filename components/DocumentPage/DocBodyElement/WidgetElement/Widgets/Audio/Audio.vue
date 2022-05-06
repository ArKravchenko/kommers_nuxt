<template>

  <div class="incut_audio" v-if="getAudioHref">
    <audio :src="getAudioHref" controls="" class="incut_audio__player"></audio>
    <p class="incut_audio__text" v-if="getAudioCaption">
      Возможная подпись
    </p>
  </div>


</template>

<script src="./Audio.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


