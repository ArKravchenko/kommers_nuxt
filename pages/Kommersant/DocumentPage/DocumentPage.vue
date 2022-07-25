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

<!--          &lt;!&ndash; 1.4. Блок вовлечения &#45;&#45; Картина дня &ndash;&gt;-->
<!--          <div style="min-height: 150px;background-color: red">-->
<!--            Картина дня-->
<!--            <% include inc/article/doc_picture_of_the_day.html %>-->
<!--          </div>-->


        </div>
        <div class="grid-col grid-col-l hide_mobile">
          <!-- 1.3. ADV вертикальная справа 300Х600 -->
          <div class="adv_300x600">
<!--            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>-->
            <client-only>
              <Banner :place-id="300600"/>
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

    <JustAgo v-if="renderJustAgo" :region-id="getRegionId">
      <template #default>
        <PictureOfTheDay :region-id="getRegionId"/>
      </template>
    </JustAgo>

    <!-- Блок 2 -->
    <LazyLenta v-if="renderLazyDocs" :region-id="getRegionId" :lazy-docs-ids="lazyDocsIds" />
    <div ref="visibilityTarget"/>
    <!-- todo вынести lazyDocs в отдельный компонент -->
    <!-- Блок 2 -->
<!--    <div class="layout" :key="lazyDocIndex" v-for="(lazyDoc,lazyDocIndex) in lazyDocs">-->
<!--      <div class="main grid">-->
<!--        <div class="grid-col grid-col-s3">-->
<!--          &lt;!&ndash; article long content  &ndash;&gt;-->
<!--          <ArticlePreview v-if="lazyDoc" :article-long-content="lazyDoc"/>-->
<!--&lt;!&ndash;          <div class="lenta_top_doc">&ndash;&gt;-->
<!--&lt;!&ndash;            <ArticleLongContent v-if="lazyDoc" :article-long-content="lazyDoc"/>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->

<!--          &lt;!&ndash; 1.3. Бизнес-анонс 1 (платная публикация) 300Х300 &ndash;&gt;-->
<!--          <div class="hide_desktop">-->
<!--            <Promo/>-->
<!--          </div>-->


<!--          <div class="lenta_multimedia">-->
<!--            <Multimedia in-doc :multimedia-data="multimediaData"/>-->
<!--          </div>-->
<!--          &lt;!&ndash; 1.4. Блок вовлечения &#45;&#45; Картина дня &ndash;&gt;-->
<!--&lt;!&ndash;          <div v-else style="min-height: 250px;background-color: red">&ndash;&gt;-->
<!--&lt;!&ndash;            Картина дня&ndash;&gt;-->
<!--&lt;!&ndash;            <% include inc/article/doc_picture_of_the_day.html %>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->


<!--        </div>-->
<!--        <div class="grid-col grid-col-l hide_mobile">-->
<!--          &lt;!&ndash; 1.3. ADV вертикальная справа 300Х600 &ndash;&gt;-->
<!--          <div class="adv_300x600">-->
<!--            &lt;!&ndash;            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>&ndash;&gt;-->
<!--            <client-only>-->
<!--              <Banner :place-id="300600"/>-->
<!--            </client-only>-->
<!--          </div>-->
<!--          &lt;!&ndash; 1.4. Бизнес-анонс 1 (платная публикация) справа 300X300 &ndash;&gt;-->
<!--          <div class="sticky">-->
<!--            <div class="lenta_promo">-->
<!--              <Promo/>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <!-- Блок 2 end -->

    <!-- Новости компаний -->
    <div class="layout">
      <div class="lenta_ba">
        <CompanyNews :company-news-data="companyNewsData"/>
      </div>
    </div>
    <!-- Новости компаний end-->

  </div>
</template>

<script src="./DocumentPage.ts" lang="ts"></script>

<style src="./DocumentPage.scss" scoped lang="scss"></style>
