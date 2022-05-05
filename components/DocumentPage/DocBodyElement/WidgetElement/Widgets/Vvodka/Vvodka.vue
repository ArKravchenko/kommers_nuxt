<template>

  <Fragment>
    <DocBodyElement v-for="(child ,i) in getVvodkaElements"
                    :key="i"
                    :doc-body-element="child"
                    :para-wrapper-tag="'p'"
                    :para-wrapper-class="'doc__text doc__intro'"
    />
  </Fragment>


</template>

<script src="./Vvodka.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


