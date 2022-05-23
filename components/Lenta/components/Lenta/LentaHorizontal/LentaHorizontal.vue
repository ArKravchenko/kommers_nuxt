<template>
    <div v-click-outside="{handler:hide, exclude:['button']}">
        <input type="checkbox" class="hide" id="news_lenta_compact" v-model="isOpen">
        <section class="basement_news">
            <header class="basement_news__header">
                <div class="layout">
                    <h2 class="basement_news__title">
                        <a :href="lentaHref" class="basement_news__link basement_news__header_link">Лента</a>
                    </h2>

                    <div class="basement_news__header_body hide_closed">
                        <a
                                   :href="getAuthorized ?  null : adjustLentaHref"
                                   @click="personalLentaHandler"
                                   class="basement_news__options"
                                   :style="{cursor: 'pointer'}"
                        >
                            <span class="basement_news__small_name">{{getAuthorized? 'Показать' : 'Настроить'}} {{getIsPersonalOnly? 'всю' : 'свою'}}</span>
                        </a>
                        <!-- иконка настройки -->
                        <a :href="adjustLentaHref"
                           :target="getAuthorized ? '_blank':'_self'"
                           @click="gearHandler"
                           class="basement_news__options basement_news__control"
                        >
                            <span class="vicon vicon--sprocket">
                                <svg class="vicon__body">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-sprocket"></use>
                                </svg>
                            </span>
                        </a>
                        <!-- tumbler -->
                        <input type="checkbox" class="ui-tumbler_trigger" id="business_lenta_down"
                               :checked="getIsBusinessOnly"
                               @input="selectBusinessOnlyHandler"
                               :disabled="getIsPersonalOnly"
                        >
                        <label class="ui-tumbler basement_news__control"
                               for="business_lenta_down"
                        >
                            <span :class="['ui-tumbler__name', 'basement_news__small_name', getIsPersonalOnly ? 'disabled' : '']"
                            >
                                Только деловые новости
                            </span>
                            <div :class="['ui-tumbler__box', getIsPersonalOnly ? 'disabled' : '']" aria-hidden="true">
                                <span class="ui-tumbler__dot"></span>
                            </div>
                        </label>
                    </div>
                    <div class="basement_news__aside_control">
                        <button v-show="!!getNewArticlesCounter || !!getIsLoading"
                                class="ui-button ui-button--standart basement_news__button"
                                type="button"
                                ref="button"
                                @click="articlesDeliveredButtonHandler"
                        >
                          <template v-if="!getIsLoading">
                            {{  `${getNewArticlesCounter < 20 ? `+ ${getNewArticlesCounter}` : `20 +`} новых`  }}
                          </template>
                          <template v-else>
                            <span class="ui-loader" style="color: white; margin-right: 1rem "/> Загрузка
                          </template>
                        </button>
                        <label class="basement_news__small_name basement_news__compact_trigger" for="news_lenta_compact"
                               tabindex="0">
                            <span class="basement_news__tumbler_name hide_opened">
                                Еще
                            </span>
                            <span class="basement_news__tumbler_name hide_closed">
                                Свернуть
                            </span>
                            <span class="vicon vicon--rarrow vicon--gull_up">
                                <svg class="vicon__body">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
                                </svg>
                            </span>
                        </label>
                    </div>

                </div>
            </header>
            <!-- закрывашка и кнопка новых новостей -->
            <div class="layout basement_news__body">
                <div class="basement_news__list">
                    <article v-if="!getArticles || !getArticles.length" v-for="i in 2"
                             :class="['basement_news__item', i === 1 ? 'hide_opened': 'hide_closed']">
                        <div class="basement_news__date" aria-hidden="true"></div>
                        <div class="basement_news__text">
                            <h2 class="basement_news__name">
                                В вашей ленте пока нет новостей.
                            </h2>
                        </div>
                    </article>
                    <!--&lt;!&ndash; 1 dummy news with placeholders &ndash;&gt;-->
                    <article v-if="!getArticles || !getArticles.length" v-for="i in 5"
                             :class="['basement_news__item', 'hide_closed']">
                        <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
                        <div class="basement_news__text">
                            <div class="basement_news__text vh">Загрузка новости...</div>
                            <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
                            <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
                        </div>
                    </article>

                    <template v-for="(article, index) in getArticles"
                              v-if="!!getArticles && !!getArticles.length"
                    >
                        <article v-if="index === 0" :class="['basement_news__item','hide_opened']">
                            <h2 class="basement_news__date">
                                <time v-if="article.DateDoc" class="basement_news__time" :datetime="getFormattedDate(article.DateDoc)">
                                    {{getFormattedTime(article.DateDoc)}}
                                </time>
                                <span v-if="article.CrumbName"
                                        class="basement_news__tag hide_closed"
                                        v-html="article.CrumbName"
                                />
                            </h2>
                            <div class="basement_news__text">
                                <h3 class="basement_news__name">
                                    <a :href="docUrlPrefix + (article.IsPhotogallery ? 'gallery/' : 'doc/') + article.DocId + '?from=lenta'"
                                       class="basement_news__link link_overlay"
                                       v-html="(article.SubtitleFirst ? article.Subtitle : article.Title) || ''"
                                    />
                                </h3>
                                <h4 class="basement_news__subheader hide_closed">
                                    <a :href="docUrlPrefix + (article.IsPhotogallery ? 'gallery/' : 'doc/') + article.DocId + '?from=lenta'"
                                       class="basement_news__link"
                                       v-html="(!article.SubtitleFirst ? article.Subtitle : article.Title) || ''"
                                    />
                                </h4>
                            </div>
                        </article>

                        <article :class="['basement_news__item','hide_closed']">
                            <h2 class="basement_news__date">
                                <time v-if="article.DateDoc" class="basement_news__time" :datetime="getFormattedDate(article.DateDoc)">
                                    {{getFormattedTime(article.DateDoc)}}
                                </time>
                                <span v-if="article.CrumbName"
                                        class="basement_news__tag"
                                        v-html="article.CrumbName"
                                />
                            </h2>
                            <div class="basement_news__text">
                                <h3 class="basement_news__name">
                                    <a :href="docUrlPrefix + (article.IsPhotogallery ? 'gallery/' : 'doc/') + article.DocId + '?from=lenta'"
                                       class="basement_news__link link_overlay"
                                       v-html="(article.SubtitleFirst ? article.Subtitle : article.Title) || ''"
                                    />
                                </h3>
                                <h4 class="basement_news__subheader hide_closed">
                                    <a :href="docUrlPrefix + (article.IsPhotogallery ? 'gallery/' : 'doc/') + article.DocId + '?from=lenta'"
                                       class="basement_news__link"
                                       v-html="(!article.SubtitleFirst ? article.Subtitle : article.Title) || ''"
                                    />
                                </h4>
                            </div>
                        </article>
                    </template>

                  <div class="basement_news__ads hide_closed">


<!--                    <CommercialAnnounce-->
<!--                        :order="0"-->
<!--                    />-->
<!--                    <CommercialAnnounce-->
<!--                        :order="1"-->
<!--                    />-->
<!--                    <BusinessAnnounce/>-->
<!--                   -->
<!--                    <BusinessAnnounce/>-->
<!--                    <BusinessAnnounce/>-->
                  </div>

                </div>
            </div>
            <footer class="basement_news__footer hide_closed">
                <div class="layout">
                    <a :href="lentaHref" class="basement_news__more">Вся лента</a>
                </div>
            </footer>
        </section>
    </div>
</template>
<script src="./LentaHorizontal.ts" lang="ts"></script>
<!--<style src="./LentaHorizontal.scss" lang="scss"></style>-->
