<template>
  <div>
<!--    <pre>-->
<!--      {{JSON.stringify(docPageData,null,2)}}-->
<!--    </pre>-->
    <!-- simple article zone start -->
    <!-- Блок 1 -->
    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">
          <!-- article long content  -->
          <div class="lenta_top_doc">
            <template v-if="docPageData">
              <ArticleLongContent v-if="!getIsRawHtml" :article-long-content="docPageData"/>
              <ArticleLongContentRawHTML v-else-if="getIsRawHtml" :article-long-content="docPageData"/>
            </template>
          </div>

          <!-- 1.3. Бизнес-анонс 1 (платная публикация) 300Х300 -->
          <div class="hide_desktop">
            <Promo/>
          </div>

          <div v-if="multimediaData"
               class="lenta_multimedia">
            <Multimedia narrow :multimedia-data="multimediaData"/>
          </div>


        </div>
        <div class="grid-col grid-col-l hide_mobile">
          <!-- 1.3. ADV вертикальная справа 300Х600 -->
          <div class="adv_300x250">
            <client-only>
              <Banner :place-id="300300"/>
            </client-only>
          </div>
          <div class="adv_300x250">
            <client-only>
              <Banner :place-id="300300"/>
            </client-only>
          </div>
          <!-- 1.4. Бизнес-анонс 1 (платная публикация) справа 300X300 -->
          <div class="sticky">
            <div class="lenta_promo">
              <Promo/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- Блок 1 end -->


    <div ref="visibilityTarget"/>

    <!-- Новости компаний -->
    <div class="layout">
      <div class="lenta_ba">
        <CompanyNews :company-news-data="companyNewsData"/>
      </div>

      <div class="adv_layer adv_300x250 hide_desktop">
        <client-only>
          <Banner :place-id="300300"/>
        </client-only>
      </div>

      <div class="adv_section hide_mobile">
        <!-- перетяжка -->
        <div class="adv_980x240">
          <client-only>
            <Banner :place-id="970250"/>
          </client-only>
        </div>
      </div>
    </div>
    <!-- Новости компаний end-->

  </div>
</template>

<script src="./GalleryPage.ts" lang="ts"></script>
