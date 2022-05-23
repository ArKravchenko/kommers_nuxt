<template>

  <article
      v-if="placeholder"
      class="aside_news__item"
  >
    <div class="aside_news__text">
      <h4 class="aside_news__date aside_news__placeholder inline_placeholder"></h4>
      <h2 class="aside_news__name aside_news__placeholder inline_placeholder"></h2>
      <h3 class="aside_news__subheader aside_news__placeholder inline_placeholder"></h3>
      <h3 class="aside_news__subheader aside_news__placeholder_middle inline_placeholder"></h3>
    </div>
  </article>

  <article
      v-else
      class="aside_news__item">
    <div class="aside_news__text">
      <h2 class="aside_news__date">
        <time v-if="time && date"
              class="aside_news__time"
              :datetime="date"
        >
          {{ time }}
        </time>
        <span v-if="tag"
              :class="{'aside_news__tag':!!time}"
              v-html="tag"
        />

      </h2>
      <h3 v-if="title"
          class="aside_news__name">
        <a :href="href"
           class="link link_overlay"
           v-html="title"
        />
      </h3>
      <h4 v-if="subtitle"
          class="aside_news__subheader">
        <a :href="href"
           class="aside_news__link"
           v-html="subtitle"
        />
      </h4>
    </div>
  </article>

</template>
<script src="./ArticleVertical.ts" lang="ts"></script>
<!--<style src="./BusinessAnnounce.scss"></style>-->
