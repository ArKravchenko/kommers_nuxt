<template>

  <div>
<!--    <ArticleLongContent :preview="preview" :article-long-content="articleLongContent"/>-->
    <ArticleLongContent v-if="docPageData && !getIsRawHtml" :preview="preview" :article-long-content="docPageData"/>
    <ArticleLongContentRawHTML v-else-if="docPageData && getIsRawHtml" :preview="preview" :article-long-content="docPageData"/>
    <button v-if="preview"
            class="ui-button ui-button--standart doc_button"
            @click="showFullClickHandler"
    >
      Читать полностью
      <span class="doc_button__icon">
						<span class="vicon doc_button__arrow">
							<svg class="vicon__body">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
							</svg>
						</span>
					</span>
    </button>
  </div>

</template>

<script src="./ArticlePreview.ts" lang="ts"></script>
<!--<style src="./ArticlePreview.scss" lang="scss" scoped></style>-->

