<template>

  <p class="doc__thought">
    <span style="color: red">
        Citation has PARA inside
    </span>

    <template v-if="getCitationTitle">

      <DocBodyElement v-for="(child ,i) in getCitationTitle"
                      :key="'title'+i"
                      :doc-body-element="child"
      />

    </template>


    <template v-if="getCitationText">

      <DocBodyElement v-for="(child ,j) in getCitationText"
                      :key="'text'+j"
                      :doc-body-element="child"
      />

    </template>

  </p>

</template>

<script src="./Citation.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


