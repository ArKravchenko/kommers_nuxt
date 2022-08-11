<template>


  <div>

    <main>
      <div class="layout">
        <div class="rubric">
          <section class="main grid">
<!--            <SuperAnnounce v-if="getSuperAnnounce" :sa-data="getSuperAnnounce"/>-->
<!--            <div id="superannounce1">-->
<!--              <% include inc/superannounce.html %>-->
<!--            </div>-->
<!--            <div id="superannounce2">-->
<!--              <% include inc/media_announce.html %>-->
<!--            </div>-->
<!--            <div id="superannounce3">-->
<!--              <% include inc/story.aspx %>-->
<!--            </div>-->

            <div class="grid-col grid-col-s3">
              <!-- вынос чекбокса наверх, чтобы старгерить top отступы суперанонсов -->
              <ServiceMenu/>


              <header v-if="getTitle" class="simple_page__header">
                <h1 class="simple_page__name">
                  <!-- Пандемия коронавируса -->
                  {{ getTitle }}
<!--                  <a href="#">-->
<!--                    <span class="vicon vicon&#45;&#45;rarrow incut__arrow incut__arrow&#45;&#45;big" aria-hidden="true">-->
<!--                      <svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--                                                    xlink:href="#vicon-rarrow"></use></svg>-->
<!--                    </span>-->
<!--                  </a>-->
                </h1>
              </header>

             <div v-if="getDescription" class="simple_page__description">
                <p class="simple_page__description_text">
                  <b>{{getDescription}}</b>
                </p>
              </div>

              <div v-if="getMainPhoto" class="rubric__main_media">
                <div class="stretch_photo photo">
                  <img :src="$imgPlaceholder"
                       :alt="getMainPhoto.alt"
                       v-lazytest
                       :data-src="cdnUrl+getMainPhoto.src"
                  >
<!--                  <component v-if="$isServer" is="noscript">-->
<!--                    <img :src="cdnUrl+getMainPhoto.src"-->
<!--                         :alt="getMainPhoto.alt"-->
<!--                    >-->
<!--                  </component>-->
                </div>
              </div>

<!--               настраиваемые блоки-->
<!--              <section class="top_news" id="rubric_news">-->
<!--                <TopNews v-if="getTop" :top-news-data="getTop"/>-->
<!--              </section>-->

<!--              <div id="rubric_spot">-->
<!--                &lt;!&ndash; яркое пятно &ndash;&gt;-->
<!--                <LightSpot  v-if="getLightSpot" :lightSpotData="getLightSpot"/>-->
<!--              </div>-->

<!--              <div id="r_multimedia" class="lenta_multimedia">-->
<!--                &lt;!&ndash; мультимедиа &ndash;&gt;-->
<!--                <Multimedia v-if="getMultimedia" narrow :multimedia-data="getMultimedia"/>-->
<!--              </div>-->

<!--              <div id="r_common_rubric">-->
<!--                <Rubric :rubric-data="getMainToday"/>-->
<!--              </div>-->
<!--              &lt;!&ndash; мнения &ndash;&gt;-->
<!--              <div id="opinion">-->
<!--                <Opinions narrow v-if="getOpinions" :opinions-data="getOpinions"/>-->
<!--              </div>-->

                <template v-for="(item,index) in getWidgetsSorted">
                  <section v-if="item.widgetName==='top'"
                           :key="index+ item.widgetName"
                           class="top_news"
                           id="rubric_news">
                    <TopNews v-if="getTop" :top-news-data="getTop"/>
                  </section>

                  <div  v-else-if="item.widgetName==='lightSpot'"
                        :key="index+ item.widgetName"
                        id="rubric_spot">
                    <!-- яркое пятно -->
                    <LightSpot  v-if="getLightSpot" :lightSpotData="getLightSpot"/>
                  </div>

                  <div v-else-if="item.widgetName==='multimedia'"
                       :key="index+ item.widgetName"
                       id="r_multimedia" class="lenta_multimedia">
                    <!-- мультимедиа -->
                    <Multimedia v-if="getMultimedia" narrow :multimedia-data="getMultimedia"/>
                  </div>

                  <div v-else-if="item.widgetName==='mainToday'"
                       :key="index+ item.widgetName"
                       id="r_common_rubric">
                    <Rubric :rubric-data="getMainToday"/>
                  </div>
                  <!-- мнения -->
                  <div v-else-if="item.widgetName==='opinions'"
                       :key="index+ item.widgetName"
                       id="opinion">
                    <Opinions narrow v-if="getOpinions" :opinions-data="getOpinions"/>
                  </div>
<!--                  {{index}}) name: {{item.widgetName}}; order {{item.order}}; <br>-->
                </template>

              <!-- настраиваемые блоки end -->

              <!-- ### 1 - 10 ### -->
              <ListPageDocs v-if="listPageDocs"
                            :list-page-docs-data="listPageDocs"
                            :from="0"
                            :toNotIncluding="5"
              />

              <!-- banner 186 -->
              <div class="adv_300x250 hide_desktop">
                <div style="width: 300px; height: 250px;background-color: grey">300x250</div>
              </div>
              <!-- banner 171 -->
              <div class="adv_300x300 hide_desktop">
                <Promo/>
              </div>

              <ListPageDocs v-if="listPageDocs"
                            :list-page-docs-data="listPageDocs"
                            :from="5"
                            :toNotIncluding="10"
              />
              <!-- ### 1 - 10 end ### -->

            </div>
            <div class="grid-col grid-col-l hide_mobile">
              <!-- banner 169 -->
              <div class="adv_300x600">
<!--                <div style="width: 300px; height: 600px;background-color: grey">300x600</div>-->
                <client-only>
                  <Banner :place-id="300600"/>
                </client-only>
              </div>
              <div class="sticky adv_sticky">
                <!-- banner 170 -->
                <div class="adv_300x300">
                  <client-only>
                    <Banner :place-id="300300"/>
                  </client-only>
                </div>
                <!-- banner 180 -->
                <div class="adv_300x300">
                  <Promo/>
                </div>
              </div>
            </div>
          </section>

          <!-- ### 11 - 20 #### -->
          <section class="main grid">
            <div class="grid-col grid-col-s3">
              <!-- banner 168 -->
              <div class="adv_600x240 hide_mobile">
<!--                <div style="width: 600px; height: 250px;background-color: grey">600x250</div>-->
                <client-only>
                  <Banner :place-id="600240"/>
                </client-only>
              </div>

              <ListPageDocs v-if="listPageDocs"
                            :list-page-docs-data="listPageDocs"
                            :from="10"
                            :toNotIncluding="20"
              />

            </div>
            <div class="grid-col grid-col-l hide_mobile">
              <!-- banner 181 -->
              <div class="sticky adv_sticky">
                <div class="adv_300x300">
                  <Promo/>
                </div>
              </div>
            </div>
          </section>
          <!-- ### 11 - 20 ### end -->

          <template v-if="false">
             <div class="grid js-listpage-more">
            <div class="grid-col grid-col-s3">
              <button class="ui-button ui-button--standart doc_button doc_button--rubric doc_button__loading js-listpage-more-button">
                Показать еще
                <span class="doc_button__icon">
								<span class="vicon doc_button__arrow">
									<svg class="vicon__body">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
									</svg>
								</span>
								<span class="ui-loader ui-loader--white" aria-hidden="true"></span>
							</span>
              </button>
            </div>
          </div>
          </template>

          <!-- rubric_lenta_30-100.html -->
<!--          <% include inc/rubric/rubric_lenta_30-60.html %>-->
          <!-- rubric_lenta_30-100.html end -->
        </div>
      </div>
    </main>

    <div class="layout">
      <!-- новости компаний -->
      <CompanyNews :company-news-data="companyNewsData"/>

      <div class="adv_layer adv_300x250 hide_desktop">
          <div style="width: 300px; height: 250px;background-color: grey">300x250</div>
      </div>

      <div class="adv_section hide_mobile">
        <!-- перетяжка -->
        <div class="adv_980x240">
<!--          <div style="width: 970px; height: 250px;background-color: grey">970x250</div>-->
          <client-only>
            <Banner :place-id="970250"/>
          </client-only>
        </div>
      </div>
    </div>
  </div>


</template>

<script src="./ListPage.ts" lang="ts"></script>
<style src="./ListPage.scss" lang="scss" scoped></style>
<style src="./SimplePage.scss" lang="scss" scoped></style>
<style src="./SimplePageHeader.scss" lang="scss" scoped></style>
<style src="./SimplePageDescription.scss" lang="scss" scoped></style>
