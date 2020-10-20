<template>
  <section class="most_readable">
    <SectionHeader section-name="Самое читаемое" is-aside />

    <div class="most_readable__content most_readable__shadow">
      <article
        v-for="news in mostReadableNews"
        :key="news.id"
        class="most_readable__item"
      >
        <span v-if="news.hasPhoto" class="most_readable__photo">
          <img class="most_readable__img" :src="news.photoSrc" alt="" />
        </span>
        <div class="most_readable__text">
          <h4 class="most_readable__tag">
            <span class="most_readable__number">{{ news.counter }}</span>
            <span class="vicon vicon--eye">
              <svg class="vicon__body">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#vicon-eye"
                ></use>
              </svg>
            </span>
          </h4>
          <h2 class="most_readable__name">
            <nuxt-link class="most_readable__link" to="/">
              {{ news.title }}
            </nuxt-link>
          </h2>
        </div>
      </article>
    </div>
  </section>
</template>

<script src="./MostReadable.ts" lang="ts"></script>
<style src="./MostReadable.scss" lang="scss" scoped></style>
