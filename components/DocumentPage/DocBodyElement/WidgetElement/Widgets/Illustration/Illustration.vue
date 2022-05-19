<template>

  <div :class="['doc_media',getIllustrationAlignClassName]">
    <figure class="doc_media__figure">
      <div class="photo">
        <Picture
          :src="getIllustrationImg.src"
          :alt="getIllustrationImg.alt"
          :img-class="'doc_media__media'"
          :noscript-string="getNoscriptString"
          :webp-src-set="getIllustrationImg.webpSrcSet"
          :jpeg-src-set="getIllustrationImg.jpegSrcSet"
          :sizes="getSizes"
        />
<!--        <picture>-->
<!--          <source v-if="getIllustrationImg.webpSrcSet"-->
<!--                  type="image/webp"-->
<!--                  :data-srcset="getIllustrationImg.webpSrcSet"-->
<!--                  :sizes="getSizes"-->
<!--          >-->
<!--          <source v-if="getIllustrationImg.jpegSrcSet"-->
<!--                  :data-srcset="getIllustrationImg.jpegSrcSet"-->
<!--                  :sizes="getSizes"-->
<!--          >-->
<!--          <img class="doc_media__media"-->
<!--               v-if="getIllustrationImg"-->
<!--               :src="$imgPlaceholder"-->
<!--               :data-src="getIllustrationImg.src"-->
<!--               :alt="getIllustrationImg.alt"-->
<!--               v-lazytest-->
<!--          >-->
<!--        </picture>-->
<!--        <noscript v-if="getNoscriptString" v-html="getNoscriptString">-->
<!--        </noscript>-->

      </div>
      <figcaption class="doc_media__caption">
        <p class="doc_media__text" v-if="getIllustrationCaption">
          <template v-for="(child ,i) in getIllustrationCaption">
            <template v-if="typeof child === 'string'">
              {{ child }}
            </template>
            <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
          </template>
        </p>

        <p class="doc_media__text doc_media__src" v-if="getIllustrationCredentials">
          <template v-if="getIllustrationCredentials.photoKind">
            {{ getIllustrationCredentials.photoKind }}:
          </template>

          <template v-if="getIllustrationCredentialsAuthor">
            <template v-for="(child ,i) in getIllustrationCredentialsAuthor">
              <template v-if="typeof child === 'string'">
                {{ child }}
              </template>
              <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
            </template>
          </template>

          <template v-if="getIllustrationCredentialsOwner">
            <template v-if="getIllustrationCredentialsAuthor">
              {{'&nbsp;/&nbsp;'}}
            </template>
            <a v-if="getIllustrationCredentialsOwnerHref"
                            :href="getIllustrationCredentialsOwnerHref"
                            target="_blank"
                            rel="nofollow">

            <template v-for="(child ,i) in getIllustrationCredentialsOwner">
              <template v-if="typeof child === 'string'">
                {{ child }}
              </template>
              <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
            </template>

          </a>
            <template v-else>

              <template v-for="(child ,i) in getIllustrationCredentialsOwner">
                <template v-if="typeof child === 'string'">
                  {{ child }}
                </template>
                <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
              </template>
            </template>

          </template>

          <template v-if="getIllustrationCredentialsPurchaseHref">
            <template v-if="getIllustrationCredentialsAuthor || getIllustrationCredentialsOwner">
              {{'&nbsp;/&nbsp;'}}
            </template>
            <a v-if="getIllustrationCredentialsPurchaseHref"
                            :href="getIllustrationCredentialsPurchaseHref"
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

<script src="./Illustration.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->
<!--<style src="@/components/DocumentPage/ArticleLongContent/allArticleStyles/illustration.scss" lang="scss"></style>-->



