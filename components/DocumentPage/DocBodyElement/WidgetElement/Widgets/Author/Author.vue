<template>

  <p class="doc__text document_authors" v-if="getAuthorBodyElements">
    <DocBodyElement v-for="(child, i) in getAuthorBodyElements"
                    :key="'author'+i"
                    :doc-body-element="child"
    />
  </p>

</template>

<script src="./Author.ts" lang="ts"></script>
<!--<style src="./Author.scss" lang="scss"></style>-->


