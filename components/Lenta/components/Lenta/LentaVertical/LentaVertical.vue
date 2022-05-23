<template>
  <section class="aside_news">
    <header class="aside_news__header">
      <h2 class="aside_news__header_name">
        <a :href="lentaHref" class="link aside_news__header_link">Лента</a>
      </h2>
      <div class="aside_news__options">
        <a
            :href="getAuthorized ?  null : adjustLentaHref"
            @click="personalLentaHandler"
            class="aside_news__small_name link"
            :style="{cursor: 'pointer'}"
        >{{ getAuthorized ? 'Показать' : 'Настроить' }} {{ getIsPersonalOnly ? 'всю' : 'свою' }}
        </a>
        <a :href="adjustLentaHref"
           :target="getAuthorized ? '_blank':'_self'"
           @click="gearHandler"
           class="vicon vicon--sprocket">
          <svg class="vicon__body">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-sprocket"></use>
          </svg>
        </a>
      </div>
      <!-- tumbler -->
      <input type="checkbox"
             class="ui-tumbler_trigger"
             id="business_lenta"
             :checked="getIsBusinessOnly"
             @input="selectBusinessOnlyHandler"
             :disabled="getIsPersonalOnly"
      >
      <label :disabled="!getArticles || !getArticles.length"
             :class="['ui-tumbler', 'aside_news__small_name', getIsPersonalOnly ? 'disabled' : '']" for="business_lenta"
      >
			<span class="ui-tumbler__name">
				Только деловые новости
			</span>
        <span class="ui-tumbler__box" aria-hidden="true">
				<span class="ui-tumbler__dot"></span>
			</span>
      </label>
    </header>
    <button class="ui-button ui-button--standart aside_news__button"
            type="button"
            v-show="!!getNewArticlesCounter || !!getIsLoading"
            @click="articlesDeliveredButtonHandler"
    >
      <template v-if="!getIsLoading">
        {{  `${getNewArticlesCounter < 20 ? `+ ${getNewArticlesCounter}` : `20 +`} новых`  }}
      </template>
      <template v-else>
        <span class="ui-loader" style="color: white; "/>
      </template>

    </button>

    <ArticleVertical
        v-if="!getArticles || !getArticles.length"
        :title="'В вашей ленте пока нет новостей.'"
    />

    <!--placeholder-->
    <ArticleVertical
        v-if="!getArticles || !getArticles.length"
        v-for="i in 10"
        :placeholder="true"
        :key="i"
    />


    <template v-for="(article, index) in getArticles"
              v-if="!!getArticles && !!getArticles.length"
    >

<!--      <CommercialAnnounce-->
<!--          v-if="index === 6"-->
<!--          :order="0"-->
<!--      />-->

<!--      <CommercialAnnounce-->
<!--          v-if="index === 12"-->
<!--          :order="1"-->
<!--      />-->
      <!--              :tag="'На правах рекламы prop'"-->
      <!--              :title="'Создавая новую историю prop'"-->
      <!--              :subtitle="'Истроительная  компания &quotГалс-Девелопмент&quot запустила новую рекламную компания под название &quotЭто совсем другая история&quot prop'"-->
      <!--              :href="'/yandex'"-->
      <!--          />-->

      <ArticleVertical
          :date="article.DateDoc ? getFormattedDate(article.DateDoc) : undefined"
          :time="article.DateDoc ? getFormattedTime(article.DateDoc) : undefined"
          :tag="article.CrumbName"
          :title="(article.SubtitleFirst ? article.Subtitle : article.Title) || ''"
          :subtitle="(!article.SubtitleFirst ? article.Subtitle : article.Title) || ''"
          :href="docUrlPrefix + (article.IsPhotogallery ? 'gallery/' : 'doc/') + article.DocId+'?from=lenta'"
      />


      <!--          <article class="aside_news__item">-->
      <!--                <div class="aside_news__text">-->
      <!--                    <h2 class="aside_news__date">-->
      <!--                        <time v-if="article.DateDoc"-->
      <!--                              class="aside_news__time"-->
      <!--                              :datetime="getFormattedDate(article.DateDoc)"-->
      <!--                        >-->
      <!--                            {{getFormattedTime(article.DateDoc)}}-->
      <!--                        </time>-->
      <!--                        <span v-if="article.CrumbName"-->
      <!--                              class="aside_news__tag"-->
      <!--                              v-html="article.CrumbName"-->
      <!--                        />-->
      <!--                    </h2>-->
      <!--                    <h3 class="aside_news__name">-->
      <!--                        <a :href="docUrlPrefix + article.DocId"-->
      <!--                           class="link link_overlay"-->
      <!--                           v-html="article.SubtitleFirst ? article.Subtitle : article.Title"-->
      <!--                        />-->
      <!--                    </h3>-->
      <!--                    <h4 class="aside_news__subheader">-->
      <!--                        <a :href="docUrlPrefix + article.DocId"-->
      <!--                           class="aside_news__link"-->
      <!--                           v-html="!article.SubtitleFirst ? article.Subtitle : article.Title"-->
      <!--                        />-->
      <!--                    </h4>-->
      <!--                </div>-->
      <!--            </article>-->

    </template>


    <a :href="lentaHref" class="title_more aside_news__more">Вся лента</a>

<!--    <BusinessAnnounce/>-->


  </section>

</template>
<script src="./LentaVertical.ts" lang="ts"></script>
<!--<style src="./LentaVertical.scss" lang="scss"></style>-->
