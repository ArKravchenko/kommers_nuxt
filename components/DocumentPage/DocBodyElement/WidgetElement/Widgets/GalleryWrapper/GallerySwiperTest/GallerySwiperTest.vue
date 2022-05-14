<template>


  <!-- Slider main container -->
  <div class="swiper doc_media"
       v-if="getGalleryItems">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="doc_media__item slider-item swiper-slide"
             v-for="(item, index) in getGalleryItems"
             :key="'slide_'+index"
             data-slider-id="id2083689">
          <figure class="doc_media__figure">
            <div class="photo">
              <picture>
                <source class="slider-img" type="image/webp"
                        :data-srcset="item.img.webpSrcSet"
                        :sizes="`(min-width: ${$scssVars.desktop1}px) ${$scssVars.main_width - $scssVars.cell_size_large - $scssVars.desktop_gap - 10}px, (min-width: ${$scssVars.mobile_width + $scssVars.mobile_gap*2}px) ${$scssVars.mobile_width + $scssVars.mobile_gap  * 2}px`"
                >
                <source class="slider-img"
                        :data-srcset="item.img.jpegSrcSet"
                        :sizes="`(min-width: ${$scssVars.desktop1}px) ${$scssVars.main_width - $scssVars.cell_size_large - $scssVars.desktop_gap - 10}px, (min-width: ${$scssVars.mobile_width + $scssVars.mobile_gap*2}px) ${$scssVars.mobile_width + $scssVars.mobile_gap  * 2}px`"
                >
                <img class="doc_media__media slider-img"
                     :src="$imgPlaceholder"
                     :alt="item.img.alt"
                     :data-src="item.img.src"
                     v-lazytest
                >

<!--                :data-srcset="item.img.jpegSrcSet"-->
<!--                :sizes="`(min-width: ${$scssVars.desktop1}px) ${$scssVars.main_width - $scssVars.cell_size_large - $scssVars.desktop_gap - 10}px, (min-width: ${$scssVars.mobile_width + $scssVars.mobile_gap*2}px) ${$scssVars.mobile_width + $scssVars.mobile_gap  * 2}px`"-->

              </picture>
              <noscript v-html="getNoscriptString(item)">

<!--                <img class="doc_media__media fallback_image"-->
<!--                     :src="item.img.src"-->
<!--                     :alt="item.img.alt"-->
<!--                >-->
              </noscript>
            </div>
            <figcaption
              :class="['doc_media__caption ui-modal__hide js-search-mark ui-collapse',{'doc_media__caption_limit':!isCredentialsOpen}]"
              data-toggle-id="doc_media_123456_description2"
              data-toggle-class-checked="ui-collapse--show"
              data-toggle-class-unchecked="doc_media__caption_limit"
              data-toggle-class-animated="ui-collapse--animated">

              <p class="doc_media__text slider-gallery-description"
                 v-if="getGalleryItemCaption(item)">
                <template v-for="(child ,i) in getGalleryItemCaption(item)">
                  <template v-if="typeof child === 'string'">
                    {{ child }}
                  </template>
                  <HtmlTagElement v-else :key="'caption_'+i" :html-tag-element="child"/>
                </template>
              </p>

              <p class="doc_media__text doc_media__src" v-if="getGalleryItemCredentials(item)">
                <template v-if="getGalleryItemCredentials(item).photoKind">
                  {{ getGalleryItemCredentials(item).photoKind }}:
                </template>

                <template v-if="getGalleryItemCredentialsAuthor(item)">
                  <template v-for="(child ,j) in getGalleryItemCredentialsAuthor(item)">
                    <template v-if="typeof child === 'string'">
                      {{ child }}
                    </template>
                    <HtmlTagElement v-else :key="'credentials'+j" :html-tag-element="child"/>
                  </template>
                </template>

                <template v-if="getGalleryItemCredentialsOwner(item)">
                  <template v-if="getGalleryItemCredentialsAuthor(item)">
                    {{ '&nbsp;/&nbsp;' }}
                  </template>
                  <a v-if="getGalleryItemCredentialsOwnerHref(item)"
                     :href="getGalleryItemCredentialsOwnerHref(item)"
                     target="_blank"
                     rel="nofollow">

                    <template v-for="(child ,k) in getGalleryItemCredentialsOwner(item)">
                      <template v-if="typeof child === 'string'">
                        {{ child }}
                      </template>
                      <HtmlTagElement v-else :key="'owner'+k" :html-tag-element="child"/>
                    </template>

                  </a>
                  <template v-else>

                    <template v-for="(child ,k) in getGalleryItemCredentialsOwner(item)">
                      <template v-if="typeof child === 'string'">
                        {{ child }}
                      </template>
                      <HtmlTagElement v-else :key="'owner'+k" :html-tag-element="child"/>
                    </template>
                  </template>

                </template>

                <template v-if="getGalleryItemCredentialsPurchaseHref(item)">
                  <template v-if="getGalleryItemCredentialsAuthor(item) || getGalleryItemCredentialsOwner(item)">
                    {{ '&nbsp;/&nbsp;' }}
                  </template>
                  <a v-if="getGalleryItemCredentialsPurchaseHref(item)"
                     :href="getGalleryItemCredentialsPurchaseHref(item)"
                     target="_blank"
                     rel="nofollow">
                    купить фото
                  </a>
                </template>
              </p>
            </figcaption>
          </figure>
        </div>
    </div>


    <!-- slider previous navigation button -->
    <div class="doc_media__nav_button slider-nav_button doc_media__nav--prev slider-prev">
      <span class="doc_media__nav_link slider-link" tabindex="-1">
            <span class="vicon vicon--larrow doc_media__nav_icon slider-nav_icon">
                <svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                              xlink:href="#vicon-rarrow"></use></svg>
            </span>
        <span class="vh">Предыдущая фотография</span>
      </span>
    </div>
    <!-- slider previous navigation button end -->

    <!-- slider next navigation button -->
    <div class="doc_media__nav_button slider-nav_button doc_media__nav--next slider-next">
      <span class="doc_media__nav_link slider-link" tabindex="-1">
            <span class="vicon vicon--rarrow doc_media__nav_icon slider-nav_icon">
                <svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                              xlink:href="#vicon-rarrow"></use></svg>
            </span>
        <span class="vh">Следующая фотография</span>
      </span>
    </div>
    <!-- slider next navigation button -->

    <!-- slides counter -->
    <div v-if="getGalleryItems"
         class="doc_media__counter slider-gallery-number" style="z-index: 1">
      <span class="slider-number-current">1</span>
      /
      <span class="slider-number-total">{{ getGalleryItems.length }}</span>
    </div>
    <!-- slides counter end -->

    <input class="vh doc_media__description_trigger"
           type="checkbox"
           :id="inputUniqueId"
           v-model="isCredentialsOpen"
           data-state-id="doc_media_123456_description2">
    <label class="vicon vicon--rarrow vicon--gull_left doc_media__caption_limit_toggle js-state-item"
           aria-hidden="true"
           :for="inputUniqueId"
           @click="isCredentialsOpenToggle"
           data-state-id="doc_media_123456_description2"
           data-state-class-focus-visible="ui-state--focused">
      <svg class="vicon__body">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
      </svg>
    </label>

    <!--    &lt;!&ndash; If we need scrollbar &ndash;&gt;-->
    <!--    <div class="swiper-scrollbar"></div>-->
  </div>


</template>

<script src="./GallerySwiperTest.ts" lang="ts"></script>
<style src="./GallerySwiperTest.scss" lang="scss"></style>


