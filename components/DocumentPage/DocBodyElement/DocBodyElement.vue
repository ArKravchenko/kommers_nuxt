<template>

  <span v-if="getType === 'string'">
    {{ docBodyElement }}
  </span>

  <WidgetElement v-else-if="getType === 'widget'"
                 :widget-element="docBodyElement"
                 :para-wrapper-class="paraWrapperClass"
                 :para-wrapper-tag="paraWrapperTag"
  />

  <HtmlTagElement v-else-if="getType === 'tag'"
                  :html-tag-element="docBodyElement"/>


</template>

<script src="./DocBodyElement.ts" lang="ts"></script>
<!--<style src="./DocBodyElement.scss" lang="scss"></style>-->


