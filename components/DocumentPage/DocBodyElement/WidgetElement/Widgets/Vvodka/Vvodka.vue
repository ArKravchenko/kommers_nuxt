<template>

    <p v-if="getVvodkaElements"
       class="doc__text doc__intro"
    >
      <span style="color: red">
        Vvodka has PARA inside
      </span>
         <DocBodyElement v-for="(child ,i) in getVvodkaElements"
                         :key="i"
                         :doc-body-element="child"
         />
   </p>

</template>

<script src="./Vvodka.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


