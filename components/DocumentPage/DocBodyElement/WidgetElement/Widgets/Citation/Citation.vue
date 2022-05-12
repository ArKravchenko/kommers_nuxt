<template>

  <div class="doc__thought">

    <template v-if="getCitationTitle">
      <DocBodyElement v-for="(child ,i) in getCitationTitle"
                      :key="'title'+i"
                      :doc-body-element="child"
                      :para-wrapper-tag="'p'"
      />
    </template>

    <template v-if="getCitationText">
      <DocBodyElement v-for="(child ,j) in getCitationText"
                      :key="'text'+j"
                      :doc-body-element="child"
                      :para-wrapper-tag="'p'"
      />
    </template>

  </div>

</template>

<script src="./Citation.ts" lang="ts"></script>
<!--<style src="./Citation.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/doc_thought.scss" lang="scss"></style>-->


