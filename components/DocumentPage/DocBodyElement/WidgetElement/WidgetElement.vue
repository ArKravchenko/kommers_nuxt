<template>


  <Para v-if="widgetElement && widgetElement.widgetType === 'para'"
        :para-widget-data="widgetElement"/>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'vvodka'">
    <!--  TODO Vvodka has PARA inside that causes differences between browser dom and SSR dom-->
    <Vvodka
            :vvodka-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'title2'">
    <!--  TODO Title2 has PARA inside that causes differences between browser dom and SSR dom-->
    <Title2
            :title2-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'incut'">
    <Incut
           :incut-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'list'">
    <List
          :list-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'spravka'">
    <!--  TODO Spravka has PARA inside that causes differences between browser dom and SSR dom-->
    <Spravka
             :spravka-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'adaptive_photo'">
    <AdaptivePhoto
                   :adaptive-photo-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'citation'">
    <!--  TODO Citation has PARA inside that causes differences between browser dom and SSR dom-->
    <Citation
              :citation-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate never v-else-if="widgetElement && widgetElement.widgetType === 'illustration'">
    <Illustration
                  :illustration-widget-data="widgetElement"/>
  </LazyHydrate>

  <h2 v-else-if="widgetElement" style="margin-top: 30px; margin-bottom: 30px; color: red">
    WidgetElement {{ widgetElement.widgetType }}
  </h2>


</template>

<script src="./WidgetElement.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


