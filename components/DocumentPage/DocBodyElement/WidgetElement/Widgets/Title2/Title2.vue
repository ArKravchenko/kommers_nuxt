<template>

    <h2 v-if="getTitle2Elements"
       class="document_inner_title"
    >
      <template v-for="(child ,i) in getTitle2Elements">
        <DocBodyElement :key="i" :doc-body-element="child"/>
      </template>
   </h2>

</template>

<script src="./Title2.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


