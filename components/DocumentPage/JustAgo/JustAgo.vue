<template>

  <!-- Блок 2 -->
  <div class="layout">
    <div v-if="docPageData" class="main grid" >
      <div class="grid-col grid-col-s3">
        <div class="section_header slided_title section_header--link_to_all section_header--right_now">
          <h3 class="section_name section_name--link_to_all">
            Только что
          </h3>
          <h4 class="section_name section_name--link_to_all">
            <a href="/lenta?from=lenta_doc2" class="no_decor">Вся лента</a>
          </h4>
        </div>
        <!-- article long content  -->
        <template>
          <ArticleLongContent v-if="!getIsRawHtml" :article-long-content="docPageData"/>
          <ArticleLongContentRawHTML v-else-if="getIsRawHtml" :article-long-content="docPageData"/>
        </template>

        <!-- 1.3. Бизнес-анонс 1 (платная публикация) 300Х300 -->
        <div class="hide_desktop">
          <Promo/>
        </div>


        <slot name="default">
        </slot>
        <!-- 1.4. Блок вовлечения -- Картина дня -->
        <!--          <div v-else style="min-height: 250px;background-color: red">-->
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
    <div ref="visibilityTarget"></div>
  </div>

  <!-- Блок 2 end -->

</template>

<script src="./JustAgo.ts" lang="ts"></script>

<style src="./JustAgo.scss" scoped lang="scss"></style>
