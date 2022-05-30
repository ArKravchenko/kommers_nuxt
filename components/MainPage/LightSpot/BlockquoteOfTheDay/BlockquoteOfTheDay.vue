<template>

  <article class="bqotd">
    <h4 class="bqotd__tag">
      {{ blockquoteOfTheDayData.content.plashka }}
    </h4>
    <div class="bqotd__text">
      <h2 class="bqotd__name">
        <a :href="blockquoteOfTheDayData.content.href" class="link">
          {{ blockquoteOfTheDayData.content.quote }}
        </a>
      </h2>
    </div>
    <div class="bqotd__footer">
      <h3 class="bqotd__subtitle">
        <a :href="blockquoteOfTheDayData.content.href" class="link link_overlay">
          <span class="bqotd__author">{{ blockquoteOfTheDayData.content.person.caption }}</span>
        </a>
      </h3>
      <a :href="blockquoteOfTheDayData.content.href" class="bqotd__photo">
        <Picture
          :img-class="'stretch'"
          :src="getBlockquoteOfTheDayImageSrc"
          :alt="getBlockquoteOfTheDayImageAlt"
          :noscript-string="getNoscriptString"
        />

      </a>
    </div>
  </article>


</template>

<script src="./BlockquoteOfTheDay.ts" lang="ts"></script>
<style src="./BlockquoteOfTheDay.scss" lang="scss" scoped></style>

