<template>
      <article v-if="!hide" class="aside_news__item">
        <div class="aside_news__text">
          <h2 class="aside_news__date">
            <span v-if="tag"
                  v-html="tag"
            />

          </h2>
          <h3 v-if="title"
              class="aside_news__name">
            <a :href="href"
               :target="getLinkTarget"
               class="link link_overlay"
               v-html="title"
            />
          </h3>
          <h4 v-if="subtitle"
              class="aside_news__subheader">
            <a :href="href"
               :target="getLinkTarget"
               class="aside_news__link"
               v-html="subtitle"
            />
          </h4>
        </div>
      </article>
</template>
<script src="./CommercialAnnounce.ts" lang="ts"></script>