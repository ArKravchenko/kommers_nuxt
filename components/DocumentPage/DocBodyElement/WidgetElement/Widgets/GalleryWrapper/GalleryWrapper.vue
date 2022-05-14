<template>

  <div  v-if="getIsExternal"
        class="incut incut--wide incut--media">
    <h3 class="incut__title">
      Фотогалерея
    </h3>

    <h2 class="incut__wide_name"  v-if="getTitle">
      <a :href="getIsExternalHref">

        <DocBodyElement v-for="(child, i) in getTitle"
                        :key="'title'+i"
                        :doc-body-element="child"
        />

      </a>
    </h2>

<!--    <Gallery :gallery-widget-data="galleryWrapperWidgetData"/>-->
    <GallerySwiperTest :gallery-widget-data="galleryWrapperWidgetData"/>

<!--    <client-only>-->
<!--      <GallerySwiperTest :gallery-widget-data="galleryWrapperWidgetData"/>-->

<!--      <template #placeholder>-->
<!--        <Gallery :gallery-widget-data="galleryWrapperWidgetData"/>-->
<!--      </template>-->
<!--    </client-only>-->

    <p class="incut__more incut__more--media">
      <a :href="getIsExternalHref" class="link">
        Смотреть
        <span class="vicon vicon--rarrow incut__arrow incut__arrow--big" aria-hidden="true">
												<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use></svg>
											</span>
      </a>
    </p>
  </div>

<!--    <Gallery v-else :gallery-widget-data="galleryWrapperWidgetData"/>-->
    <GallerySwiperTest v-else :gallery-widget-data="galleryWrapperWidgetData"/>

<!--  <client-only v-else>-->
<!--    <GallerySwiperTest :gallery-widget-data="galleryWrapperWidgetData"/>-->

<!--    <template #placeholder>-->
<!--      <Gallery :gallery-widget-data="galleryWrapperWidgetData"/>-->
<!--    </template>-->
<!--  </client-only>-->


</template>

<script src="./GalleryWrapper.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


