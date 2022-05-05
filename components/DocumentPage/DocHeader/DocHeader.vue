<template>

  <header class="doc_header">

    <Crumbs :breadcrumb="breadcrumb"/>
    <div class="doc_header__time">
      <time v-if="getArticlePublishedDate"
            :datetime="getArticlePublishedDate"
            class="doc_header__publish_time">
        {{ formatDate(getArticlePublishedDate) }}
      </time>
      <span v-if="getArticleUpdatedDate"
            :datetime="getArticleUpdatedDate"
            class="doc_header__publish_update">
        Обновлено {{ formatDate(getArticleUpdatedDate) }}
      </span>
    </div>

    <div class="hide_desktop">
      <ArticleSharing/>
    </div>

    <h1 v-if="getTitle" class="doc_header__name">
      <template v-for="(child ,i) in getTitle">
        <DocBodyElement :key="i" :doc-body-element="child"/>
      </template>
    </h1>
    <h2 v-if="getSubtitle"
        class="doc_header__subheader"
    >
      <template v-for="(child ,i) in getSubtitle">
        <DocBodyElement :key="i" :doc-body-element="child"/>
      </template>
    </h2>
  </header>

</template>

<script src="./DocHeader.ts" lang="ts"></script>
<!--<style src="./DocHeader.scss" lang="scss" scoped></style>-->

