<template>

<!--  <div class="scrolldiv">-->
<!--    <div class="doc__widget doc__widget&#45;&#45;yt fitvids"-->
<!--         v-html="getRawHtml">-->
<!--    </div>-->
<!--  </div>-->

    <div class="doc_media">

      <figure class="doc_media__figure">
        <div class="photo fitvids-video"
             v-html="getVideoEmbedHtml">
        </div>

        <figcaption class="doc_media__caption">

          <p class="doc_media__text" v-if="getVideoCaption">
            <template v-for="(child ,i) in getVideoCaption">
              <template v-if="typeof child === 'string'">
                {{ child }}
              </template>
              <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
            </template>
          </p>

          <p class="doc_media__text doc_media__src" v-if="getVideoCredentials">
            <template v-if="getVideoCredentials.photoKind">
              {{ getVideoCredentials.photoKind }}:
            </template>

            <template v-if="getVideoCredentialsAuthor">
              <template v-for="(child ,i) in getVideoCredentialsAuthor">
                <template v-if="typeof child === 'string'">
                  {{ child }}
                </template>
                <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
              </template>
            </template>

            <template v-if="getVideoCredentialsOwner">
              <template v-if="getVideoCredentialsAuthor">
                {{'&nbsp;/&nbsp;'}}
              </template>
              <a v-if="getVideoCredentialsOwnerHref"
                 :href="getVideoCredentialsOwnerHref"
                 target="_blank"
                 rel="nofollow">

                <template v-for="(child ,i) in getVideoCredentialsOwner">
                  <template v-if="typeof child === 'string'">
                    {{ child }}
                  </template>
                  <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
                </template>

              </a>
              <template v-else>

                <template v-for="(child ,i) in getVideoCredentialsOwner">
                  <template v-if="typeof child === 'string'">
                    {{ child }}
                  </template>
                  <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
                </template>
              </template>

            </template>

            <template v-if="getVideoCredentialsPurchaseHref">
              <template v-if="getVideoCredentialsAuthor || getVideoCredentialsOwner">
                {{'&nbsp;/&nbsp;'}}
              </template>
              <a v-if="getVideoCredentialsPurchaseHref"
                 :href="getVideoCredentialsPurchaseHref"
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

<script src="./Video.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


