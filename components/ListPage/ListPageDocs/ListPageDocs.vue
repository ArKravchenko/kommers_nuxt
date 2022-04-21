<template>

  <div v-if="getDocs" class="rubric_lenta">
    <template v-for="doc in getDocs">
        <article class="uho rubric_lenta__item">
          <p class="uho__tag rubric_lenta__item_tag hide_desktop">
            {{ formatDate(doc.pubDate) }}
          </p>


          <div v-if="doc.img  && doc.img.src" class="rubric_lenta__thumbs">
            <a :href="doc.href" class="rubric_lenta__thumbs_photo stretch_photo">
              <img class="fallback_image"
                   v-lazy="cdnUrl+doc.img.src"
                   :src="$imgPlaceholder"
                   :alt="doc.img.alt">
            </a>
          </div>


          <div class="uho__text rubric_lenta__item_text">
            <p class="uho__tag rubric_lenta__item_tag hide_mobile">
              {{ formatDate(doc.pubDate) }}
            </p>
            <h2 class="uho__name rubric_lenta__item_name">
              <a :href="doc.href" class="link_overlay_wide link">
                {{ doc.title }}
              </a>
            </h2>

            <h3 v-if="doc.subtitle" class="uho__subtitle rubric_lenta__item_subtitle">
              <a :href="doc.href" class="link">{{ doc.subtitle }}</a>
            </h3>


          </div>

          <SharingList :read-time="doc.readTime" :sharing-href="doc.href"/>

          <ul v-if="doc.tags" class="crumbs tag_list">

            <template v-if="doc.tags.main">
              <li class="crumbs__item tag_list__item">
                <a :href="doc.tags.main.href"
                   class="tag_list__link"
                >{{ doc.tags.main.text }}</a>
              </li>
            </template>
            <template v-if="doc.tags.rest && doc.tags.rest.length">
              <li v-for="tag in doc.tags.rest" class="crumbs__item tag_list__item">
                <a :href="tag.href"
                   class="tag_list__label"
                >{{ tag.text }}</a>
              </li>
            </template>



          </ul>
        </article>
    </template>
  </div>

</template>

<script src="./ListPageDocs.ts" lang="ts"></script>
<style src="./ListPageDocs.scss" lang="scss" scoped></style>
<style src="./TagList.scss" lang="scss" scoped></style>
<style src="./../Crumbs/Crumbs.scss" lang="scss" scoped></style>

