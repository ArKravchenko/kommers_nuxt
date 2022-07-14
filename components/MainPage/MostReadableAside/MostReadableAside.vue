<template>

  <section class="most_readable" ref="observer">
    <div v-if="mostReadableAsideData && getDocs"
         class="section_header section_header--aside most_readable__header slided_title">
      <h3 class="section_name">
        Самое читаемое
      </h3>
    </div>

    <div v-if="mostReadableAsideData && getDocs"
         class="most_readable__content most_readable__shadow">
      <article class="most_readable__item">
        <div class="most_readable__photo stretch_photo">
          <Picture
            :src="getDocImg(getDocs[0]).src"
            :alt="getDocImg(getDocs[0]).alt"
            :img-class="'most_readable__img'"
            :noscript-string="getNoscriptString(getDocs[0])"
            :webp-src-set="getDocImg(getDocs[0]).webpSrcSet"
            :jpeg-src-set="getDocImg(getDocs[0]).jpegSrcSet"
            :sizes="'(min-width: 1198px) 300px, (min-width: 640px) 640px'"
          />
        </div>
        <div class="most_readable__text">
          <h4 v-if="getDocViews(getDocs[0])" class="most_readable__tag">
            <span class="most_readable__number">{{ getDocViews(getDocs[0]) }}</span>
            <span class="vicon vicon--eye">
						<svg class="vicon__body">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-eye"></use>
						</svg>
					</span>
          </h4>
          <h2 class="most_readable__name">
            <a v-if="getDocHref(getDocs[0])"
               :href="getDocHref(getDocs[0])"
               class="most_readable__link link ">
              {{ getDocTitle(getDocs[0]) }}
            </a>
            <template v-else>
              {{ getDocTitle(getDocs[0]) }}
            </template>
          </h2>
        </div>
      </article>


      <template v-for="(doc, index) in getDocs.slice(1)">
        <article class="most_readable__item" :key="index">
          <div class="most_readable__text">
            <h4 class="most_readable__tag" v-if="getDocViews(doc)">
              <span class="most_readable__number">{{ getDocViews(doc) }}</span>
              <span class="vicon vicon--eye">
                <svg class="vicon__body">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-eye"></use>
                </svg>
              </span>
            </h4>
            <h2 class="most_readable__name">
              <a v-if="getDocHref(doc)" :href="getDocHref(doc)" class="most_readable__link link ">
                {{ getDocTitle(doc) }}
              </a>
              <template v-else>
                {{ getDocTitle(doc) }}
              </template>
            </h2>
          </div>
        </article>
      </template>
    </div>
  </section>


</template>

<script src="./MostReadableAside.ts" lang="ts"></script>
<style src="./MostReadableAside.scss" lang="scss" scoped></style>


