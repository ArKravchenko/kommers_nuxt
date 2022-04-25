<template>

  <div class="sa sa--news">
    <!-- <div class="sa"> -->
    <div class="sa__cover">
      <div class="sa__photo">
        <img class="sa__img"
             v-lazy="cdnUrl+docSaData.content.img.src"
             :src="$imgPlaceholder"
             :alt="docSaData.content.img.alt">
      </div>
      <div class="sa__content">
        <p class="sa__tag hide_desktop">
          <a :href="docSaData.content.mainDoc.href"
             class="link">{{ docSaData.content.plashka }}
          </a>
        </p>
        <div class="sa__text sa__text--news">
          <h2 class="sa__name">
            <a :href="docSaData.content.mainDoc.href"
               class="link link_overlay">
              {{ docSaData.content.mainDoc.title }}
            </a>
          </h2>
          <h3 class="sa__subtitle sa__subtitle--story" v-if="getDocsList">
            <a :href="docSaData.content.mainDoc.href" class="link">
              {{ docSaData.content.mainDoc.subtitle }}
            </a>
          </h3>
        </div>

        <template v-if="!getDocsList">
          <p class="sa__tag hide_mobile">
            <a :href="docSaData.content.mainDoc.href" class="link">
              {{ docSaData.content.plashka }}
            </a>
          </p>
          <h3 class="sa__subtitle sa__subtitle--news">
            <a :href="docSaData.content.mainDoc.href" class="link">
              {{ docSaData.content.mainDoc.subtitle }}
            </a>
          </h3>
        </template>
      </div>

    </div>
    <div class="sa__chapter" v-if="getDocsList">
      <p class="sa__tag hide_mobile">
        <a :href="docSaData.content.mainDoc.href"
           class="link">
          {{ docSaData.content.plashka }}
        </a>
      </p>
      <ul class="sa__list">
        <li class="sa__item" v-for="(doc,index) in getDocsList">
          <p class="sa__time">
            <a :href="doc.href" class="link">
              {{ formatDate(doc.pubDate) }}
            </a>
          </p>
          <h2 class="sa__subname">
            <a :href="doc.href"
               class="link link_overlay">
              {{ doc.title }}
            </a>
          </h2>
        </li>
      </ul>
    </div>
  </div>

</template>

<script src="./DocSa.ts" lang="ts"></script>
<style src="./DocSa.scss" lang="scss" scoped></style>

