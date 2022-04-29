<template>

    <h2 v-if="getTitle2Elements"
       class="document_inner_title"
    >
      <span style="color: red">
        Title2 has PARA inside
      </span>
      <template v-for="(child ,i) in getTitle2Elements">

        <DocBodyElement :key="i" :doc-body-element="child"/>
      </template>
   </h2>

</template>

<script src="./Title2.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


