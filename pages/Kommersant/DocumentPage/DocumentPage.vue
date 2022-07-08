<template>
  <div>
<!--    <pre>-->
<!--      {{JSON.stringify(docPageData,null,2)}}-->
<!--    </pre>-->
    <!-- simple article zone start -->
    <!-- Блок 1 -->
    <div class="layout js-lenta-article">
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

          <!-- 1.4. Блок вовлечения -- Картина дня -->
          <div style="min-height: 150px;background-color: red">
            Картина дня
            <% include inc/article/doc_picture_of_the_day.html %>
          </div>


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

    <!-- Блок 2 -->
    <div class="layout" :key="lazyDocIndex" v-for="(lazyDoc,lazyDocIndex) in lazyDocs">
      <div class="main grid">
        <div class="grid-col grid-col-s3">
          <!-- article long content  -->
          <ArticlePreview v-if="lazyDoc" :article-long-content="lazyDoc"/>
<!--          <div class="lenta_top_doc">-->
<!--            <ArticleLongContent v-if="lazyDoc" :article-long-content="lazyDoc"/>-->
<!--          </div>-->

          <!-- 1.3. Бизнес-анонс 1 (платная публикация) 300Х300 -->
          <div class="hide_desktop">
            <Promo/>
          </div>

          <!-- 1.4. Блок вовлечения -- Картина дня -->
          <div style="min-height: 250px;background-color: red">
            Картина дня
            <% include inc/article/doc_picture_of_the_day.html %>
          </div>


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
    <div ref="visibilityTarget"></div>
    <!-- Блок 2 end -->

    <!-- Новости компаний -->
    <div class="layout">
      <div class="lenta_ba">
        <CompanyNews :company-news-data="{}"/>
      </div>
    </div>
    <!-- Новости компаний end-->

  </div>
</template>

<script src="./DocumentPage.ts" lang="ts"></script>

<style src="./DocumentPage.scss" scoped lang="scss"></style>
