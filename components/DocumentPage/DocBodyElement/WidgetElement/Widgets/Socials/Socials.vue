<template>

  <div class="scrolldiv" ref="visibilityTarget">
    <Tg v-if="getSocialType === 'tg'  && visible"
        :socials-widget-data="socialsWidgetData"
    />
    <Vk v-else-if="getSocialType === 'vk' && visible"
        :socials-widget-data="socialsWidgetData"
    />
    <Youtube v-else-if="getSocialType === 'youtube' && visible"
             :socials-widget-data="socialsWidgetData"
    />
    <Twitter v-else-if="getSocialType === 'twitter' && visible"
             :socials-widget-data="socialsWidgetData"
    />
    <Simplecast v-else-if="getSocialType === 'simplecast' && visible"
                :socials-widget-data="socialsWidgetData"
    />
  </div>

</template>

<script src="./Socials.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


