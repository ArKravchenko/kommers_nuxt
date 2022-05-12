<template>


  <article class="doc">

    <DocHeader :title="getTitle" :subtitle="getSubtitle" :pub-date="getPubDate" :breadcrumb="getBreadcrumb" />

    <div class="doc__body">
      <div class="hide_mobile">
        <ArticleSharing/>
      </div>


      <template v-if="!getIsRawHtml && getDocBodyElements">
        <template v-for="(child, i) in getDocBodyElements">
          <DocBodyElement :key="i" :doc-body-element="child" :para-wrapper-tag="'p'" :para-wrapper-class="'doc__text'"/>
        </template>
      </template>

      <template v-else-if="getIsRawHtml">
        <div style="overflow-y: auto; overflow-x: visible; padding: 10px 0 0"
             v-if="getRawHtml"
             v-html="getRawHtml"/>
      </template>

    </div>

    <!-- 1.2. ADV 600Х250 (в конце статьи, перед блоком подписок) -->
    <div class="adv_600x240 hide_mobile">
<!--      <div style="width: 600px; height: 240px; background-color: grey">-->
<!--        600x240-->
<!--      </div>-->
      <client-only>
        <Banner :place-id="600240"/>
      </client-only>
    </div>

    <!-- 1.2. Под статьей перед блоком подписок ADV 300X250 -->
    <div class="adv_300x250 hide_desktop">
<!--      <div style="width: 300px; height: 250px; background-color: grey">-->
<!--        300x250-->
<!--      </div>-->
      <client-only>
        <Banner :place-id="300300"/>
      </client-only>
    </div>

    <DocFooter v-if="getFooterData" :footer-data="getFooterData" />

<!--    <button class="ui-button ui-button&#45;&#45;standart doc_button doc_button__loading">-->
<!--      Обсудить-->
<!--      <span class="doc_button__icon">-->
<!--        <span class="vicon doc_button__arrow">-->
<!--          <svg class="vicon__body">-->
<!--            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>-->
<!--          </svg>-->
<!--        </span>-->
<!--        <span class="ui-loader ui-loader&#45;&#45;white" aria-hidden="true"></span>-->
<!--      </span>-->
<!--    </button>-->

<!--    <% include doc_comments.html %>-->

  </article>


</template>

<script src="./ArticleLongContent.ts" lang="ts"></script>
<style src="./ArticleLongContent.scss" lang="scss"></style>


