<template>

    <p v-if="getParaElements"
       class="doc__text"
    >
       <template v-for="(child ,i) in getParaElements">
         <template v-if="typeof child === 'string'">
           {{ child }}
         </template>
         <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
       </template>
   </p>

</template>

<script src="./Para.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


