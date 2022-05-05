<template>


  <component :is="getListKind === 'ordered'? 'ol' : 'ul'"
             v-if="getListKind"
  >

    <template v-if="getListElements">
      <li v-for="(listElement, i) in getListElements">
        <template v-if="getListElementBodyElements(listElement)">
          <DocBodyElement v-for="(child ,j) in getListElementBodyElements(listElement)"
                          :key="`li${i}body${j}`"
                          :doc-body-element="child"
          />
        </template>
      </li>
    </template>
  </component>


</template>

<script src="./List.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


