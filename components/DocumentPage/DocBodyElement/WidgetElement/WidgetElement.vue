<template>


<!--  Похоже что Para элемент нельзя гидратировать ленивым образом,
    это вызывает поднятие ошибки вверх на всех элементах где есть невалидный HTML,
    и как следтствие краш ассоциированного корневого <DocBodyElement/>,
    то есть потерю всего контента соответствующего абзаца
    -->
  <Para v-if="widgetElement && widgetElement.widgetType === 'para'"
        :para-widget-data="widgetElement"
        :para-wrapper-tag="paraWrapperTag"
        :para-wrapper-class="paraWrapperClass"
  />


  <LazyHydrate when-idle v-else-if="widgetElement && widgetElement.widgetType === 'vvodka'">
    <!--  TODO Vvodka has PARA inside that causes differences between browser dom and SSR dom-->
    <Vvodka
      :vvodka-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'title2'">
    <!--  TODO Title2 has PARA inside that causes differences between browser dom and SSR dom-->
    <Title2
      :title2-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'incut'">
    <Incut
      :incut-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'list'">
    <List
      :list-widget-data="widgetElement"/>
  </LazyHydrate>


  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'spravka'">
    <!--  TODO Spravka has PARA inside that causes differences between browser dom and SSR dom-->
    <Spravka
      :spravka-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'adaptive_photo'">
    <AdaptivePhoto
      :adaptive-photo-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'citation'">
    <!--  TODO Citation has PARA inside that causes differences between browser dom and SSR dom-->
    <Citation
      :citation-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'illustration'">
    <Illustration
      :illustration-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'gallery'">
    <!--  TODO been made client-only to avoid collision with Title2 and Vvodka-->
    <GalleryWrapper
      :gallery-wrapper-widget-data="widgetElement"/>
  </LazyHydrate>


  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'collapse'">
    <Collapse
      :collapse-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'author'">
    <Author
      :author-widget-data="widgetElement"/>
  </LazyHydrate>

  <client-only v-else-if="widgetElement && widgetElement.widgetType === 'free'">
    <Free
      :free-widget-data="widgetElement"/>
  </client-only>

  <client-only v-else-if="widgetElement && widgetElement.widgetType === 'video'">
    <Video
      :video-widget-data="widgetElement"/>
  </client-only>

  <client-only v-else-if="widgetElement && widgetElement.widgetType === 'socials'">
    <Socials
      :socials-widget-data="widgetElement"/>
  </client-only>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'audio'">
    <Audio
      :audio-widget-data="widgetElement"/>
  </LazyHydrate>

  <LazyHydrate :when-visible="lazyHydrateWhenVisibleParams"
               v-else-if="widgetElement && widgetElement.widgetType === 'table'">
    <Table
      :table-widget-data="widgetElement"/>
  </LazyHydrate>


  <h2 v-else-if="widgetElement" style="margin-top: 30px; margin-bottom: 30px; color: red">
    WidgetElement {{ widgetElement.widgetType }}
  </h2>


</template>

<script src="./WidgetElement.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/doc_media.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/article_incuts.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/doc_widget.scss" lang="scss"></style>-->


