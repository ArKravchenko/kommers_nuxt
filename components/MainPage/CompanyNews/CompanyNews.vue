<template>

  <div class="ba">
    <LazyHydrate never>
      <span>{{ Math.random() }} CompanyNews component cache</span>
    </LazyHydrate>
    <div class="ba__text ba__text--shadow">
      <h2 class="ba__tag ba__tag--black" v-if="getTitle">
        {{ getTitle }}
        <span v-if="getHref" class="ba__link_more">
          <a :href="getHref" class="link decor">
            Все
          </a>
        </span>
      </h2>
      <ul class="ba__list">
        <template v-for="(item, index) in getNews">
          <li :key="index" class="ba__item">
            <h2 v-if="getItemPubDate(item)"
                class="ba__date">
              {{ formatDate(getItemPubDate(item)) }}
            </h2>
            <h3 v-if="getItemTitle(item)"
                class="ba__name ba__name--black">
              <a v-if="getItemHref(item)"
                 :href="getItemHref(item)"
                 class="link">
                {{ getItemTitle(item) }}
              </a>
              <template v-else>
                {{ getItemTitle(item) }}
              </template>
            </h3>
            <h4 v-if="getItemSubtitle(item)"
                class="ba__subtitle ba__subtitle--black">
              <a v-if="getItemHref(item)"
                 :href="getItemHref(item)"
                 class="link link_overlay">
                {{ getItemSubtitle(item) }}
              </a>
              <template v-else>
                {{ getItemSubtitle(item) }}
              </template>
            </h4>
          </li>
        </template>
      </ul>
    </div>
  </div>


</template>

<script src="./CompanyNews.ts" lang="ts"></script>
<style src="./CompanyNews.scss" lang="scss" scoped></style>


