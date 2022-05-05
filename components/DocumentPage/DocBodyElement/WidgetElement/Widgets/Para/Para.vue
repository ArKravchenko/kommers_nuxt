<template>

  <component :is="paraWrapperTag" v-if="paraWrapperTag && getParaElements" :class="paraWrapperClass">
    <template v-for="(child ,i) in getParaElements">
      <template v-if="typeof child === 'string'">
        {{ child }}
      </template>
      <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
    </template>
  </component>

  <Fragment v-else-if="getParaElements">
    <template v-for="(child ,i) in getParaElements">
      <template v-if="typeof child === 'string'">
        {{ child }}
      </template>
      <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
    </template>
  </Fragment>

</template>

<script src="./Para.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


