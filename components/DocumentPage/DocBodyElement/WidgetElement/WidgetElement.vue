<template>


  <Para v-if="widgetElement && widgetElement.widgetType === 'para'"
        :para-widget-data="widgetElement"
        :para-wrapper-tag="paraWrapperTag"
        :para-wrapper-class="paraWrapperClass"
  />

  <!--  TODO Vvodka has PARA inside that causes differences between browser dom and SSR dom-->
  <Vvodka v-else-if="widgetElement && widgetElement.widgetType === 'vvodka'"
          :vvodka-widget-data="widgetElement"/>

  <!--  TODO Title2 has PARA inside that causes differences between browser dom and SSR dom-->
  <Title2 v-else-if="widgetElement && widgetElement.widgetType === 'title2'"
          :title2-widget-data="widgetElement"/>


  <Incut v-else-if="widgetElement && widgetElement.widgetType === 'incut'"
         :incut-widget-data="widgetElement"/>


  <List v-else-if="widgetElement && widgetElement.widgetType === 'list'"
        :list-widget-data="widgetElement"/>


  <!--  TODO Spravka has PARA inside that causes differences between browser dom and SSR dom-->
  <Spravka v-else-if="widgetElement && widgetElement.widgetType === 'spravka'"
           :spravka-widget-data="widgetElement"/>

  <AdaptivePhoto v-else-if="widgetElement && widgetElement.widgetType === 'adaptive_photo'"
                 :adaptive-photo-widget-data="widgetElement"/>

  <!--  TODO Citation has PARA inside that causes differences between browser dom and SSR dom-->
  <Citation v-else-if="widgetElement && widgetElement.widgetType === 'citation'"
            :citation-widget-data="widgetElement"/>


  <Illustration v-else-if="widgetElement && widgetElement.widgetType === 'illustration'"
                :illustration-widget-data="widgetElement"/>

  <!--  TODO been made client-only to avoid collision with Title2 and Vvodka-->
  <GalleryWrapper v-else-if="widgetElement && widgetElement.widgetType === 'gallery'"
                  :gallery-wrapper-widget-data="widgetElement"/>


  <Collapse v-else-if="widgetElement && widgetElement.widgetType === 'collapse'"
            :collapse-widget-data="widgetElement"/>


  <Author v-else-if="widgetElement && widgetElement.widgetType === 'author'"
          :author-widget-data="widgetElement"/>

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

  <Audio v-else-if="widgetElement && widgetElement.widgetType === 'audio'"
         :audio-widget-data="widgetElement"/>

  <Table v-else-if="widgetElement && widgetElement.widgetType === 'table'"
         :table-widget-data="widgetElement"/>


  <h2 v-else-if="widgetElement" style="margin-top: 30px; margin-bottom: 30px; color: red">
    WidgetElement {{ widgetElement.widgetType }}
  </h2>


</template>

<script src="./WidgetElement.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/doc_media.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/article_incuts.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/doc_widget.scss" lang="scss"></style>-->


