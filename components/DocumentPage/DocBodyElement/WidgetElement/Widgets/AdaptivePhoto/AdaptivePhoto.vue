<template>

  <div class="doc_media">
    <figure class="doc_media__figure">
      <!-- mobile infographics -->
      <div class="photo photo--free hide_desktop"
           v-if="getAdaptivePhotoMobileImg"
      >

        <img class="doc_media__media_free"
             :src="$imgPlaceholder"
             :alt="getAdaptivePhotoMobileImg.alt"
             v-lazy="getAdaptivePhotoMobileImg.src"
        >
        <noscript>
          <img class="doc_media__media_free"
               :src="getAdaptivePhotoMobileImg.src"
               :alt="getAdaptivePhotoMobileImg.alt"
          >
        </noscript>

      </div>
      <!-- mobile infographics end -->

      <!-- desktop infographics -->
      <div class="photo photo--free hide_mobile ui-modal__hide"
           v-if="getAdaptivePhotoDesktopImg"
      >
        <!-- первой в списке идет большая фотка для modal'а с 1120w (увеличенная), второй идет обычная фотка с 720w. -->
        <img class="doc_media__media_free"
             :src="$imgPlaceholder"
             :alt="getAdaptivePhotoDesktopImg.alt"
             v-lazy="getAdaptivePhotoDesktopImg.src"
        >
        <noscript>
          <img class="doc_media__media_free"
               :src="getAdaptivePhotoMobileImg.src"
               :alt="getAdaptivePhotoMobileImg.alt"
          >
        </noscript>
      </div>
      <!-- desktop infographics end -->

      <figcaption class="doc_media__caption ui-modal__hide">
        <p class="doc_media__text" v-if="getAdaptivePhotoCaption">

          <template v-for="(child ,i) in getAdaptivePhotoCaption">
            <template v-if="typeof child === 'string'">
              {{ child }}
            </template>
            <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
          </template>

        </p>

        <p class="doc_media__text doc_media__src" v-if="getAdaptivePhotoCredentials">
          <template v-if="getAdaptivePhotoCredentials.photoKind">
            {{ getAdaptivePhotoCredentials.photoKind }}:
          </template>

          <template v-if="getAdaptivePhotoCredentialsAuthor">
            <template v-for="(child ,i) in getAdaptivePhotoCredentialsAuthor">
              <template v-if="typeof child === 'string'">
                {{ child }}
              </template>
              <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
            </template>
          </template>

          <template v-if="getAdaptivePhotoCredentialsOwner">
            <template v-if="getAdaptivePhotoCredentialsAuthor">
              {{'&nbsp;/&nbsp;'}}
            </template>
            <a v-if="getAdaptivePhotoCredentialsOwnerHref"
                            :href="getAdaptivePhotoCredentialsOwnerHref"
                            target="_blank"
                            rel="nofollow">

            <template v-for="(child ,i) in getAdaptivePhotoCredentialsOwner">
              <template v-if="typeof child === 'string'">
                {{ child }}
              </template>
              <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
            </template>

          </a>
            <template v-else>

              <template v-for="(child ,i) in getAdaptivePhotoCredentialsOwner">
                <template v-if="typeof child === 'string'">
                  {{ child }}
                </template>
                <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
              </template>
            </template>

          </template>

          <template v-if="getAdaptivePhotoCredentialsPurchaseHref">
            <template v-if="getAdaptivePhotoCredentialsAuthor || getAdaptivePhotoCredentialsOwner">
              {{'&nbsp;/&nbsp;'}}
            </template>
            <a v-if="getAdaptivePhotoCredentialsPurchaseHref"
                            :href="getAdaptivePhotoCredentialsPurchaseHref"
                            target="_blank"
                            rel="nofollow">
            купить фото
          </a>
          </template>
        </p>
      </figcaption>
    </figure>
  </div>

</template>

<script src="./AdaptivePhoto.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


