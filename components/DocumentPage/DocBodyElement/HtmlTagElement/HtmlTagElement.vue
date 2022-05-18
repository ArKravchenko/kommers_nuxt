<template><!--

  --><component v-if="htmlTagElement"
             :is="htmlTagElement.tagName"
             v-bind="getAttributes"
             ref="root"
  ><!--
    --><template v-if="getChildren"><!--
      --><template v-for="(child ,i) in getChildren"><!--
      --><template v-if="typeof child === 'string'">{{ child }}</template><!--
      --><HtmlTagElement v-else :key="i" :html-tag-element="child"/><!--
      --></template><!--
      --></template><!--
    --></component><!--

--></template>

<script src="./HtmlTagElement.ts" lang="ts"></script>
<style src="./HtmlTagElement.scss" lang="scss"></style>


