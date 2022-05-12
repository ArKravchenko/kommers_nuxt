<template>

  <div :class="['doc_media',getIllustrationAlignClassName]">
    <figure class="doc_media__figure">
      <div class="photo">
        <img class="doc_media__media"
             v-if="getIllustrationImg"
             :src="$imgPlaceholder"
             v-lazy="getIllustrationImg.src"
             :alt="getIllustrationImg.alt">

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



