<template>


  <main>

    <div class="layout">
      <!-- картина дня -->
      <div class="main">
        <div v-if="getSaPrimary">
          <SuperAnnounce :saData="getSaPrimary"/>
        </div>
      </div>
    </div>

    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">
          <!-- топ -->
          <TopNews v-if="getTop" :topNewsData="getTop"/>

          <div class="hide_mobile">
            <!-- яркое пятно -->
            <LightSpot  v-if="getLightSpot" :lightSpotData="getLightSpot"/>
          </div>
        </div>

        <div class="grid-col grid-col-l hide_mobile">
          <div class="sticky">
            <div class="adv_300x600">
<!--              <div style="width: 300px; height: 600px; background-color: grey">-->
<!--                300x600-->
<!--              </div>-->
              <client-only>
                <Banner :place-id="300600"/>
              </client-only>
            </div>
          </div>
        </div>

        <div v-if="getSaSecondary">
          <SuperAnnounce :saData="getSaSecondary"/>
        </div>
      </div>
    </div>
    <!-- картина дня end-->

    <div class="layout hide_desktop">
      <div class="adv_300x250">
<!--        <div style="background-color: grey; height: 250px; width: 300px"></div>-->
        <client-only>
          <Banner :place-id="300300"/>
        </client-only>
      </div>
    </div>

    <div class="layout hide_desktop">
      <!-- яркое пятно мобильное -->
      <LightSpot v-if="getLightSpot" :lightSpotData="getLightSpot"/>
    </div>


    <!-- главное -->
    <div class="layout">
      <MainToday v-if="getMainToday" :main-today-data="getMainToday"/>
    </div>

    <!-- мнения -->
    <div class="layout">
      <Opinions v-if="getOpinions" :opinions-data="getOpinions"/>
    </div>

    <div class="layout hide_desktop">
      <Promo/>
    </div>

    <!-- мультимедиа -->
    <div class="layout">
      <div class="main">
        <Multimedia v-if="getMultimedia" :multimedia-data="getMultimedia"/>
      </div>
    </div>

    <div class="layout hide_desktop">
      <MostReadableAside/>
    </div>

    <div class="layout hide_desktop">
      <Promo/>
    </div>

    <section class="adv_section hide_mobile">
      <div class="adv_980x240">
<!--        <div style="width: 970px; height: 250px;background-color: grey">970x250</div>-->
        <client-only>
          <Banner :place-id="970250"/>
        </client-only>
      </div>
    </section>

    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">

          <template v-if="getRubrics && index < 3"
                    v-for="(rubric, index) in getRubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

        </div>
        <div class="grid-col grid-col-l">
          <div class="adv_300x600 adv_300x600--gap_title hide_mobile">
<!--            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>-->
            <client-only>
              <Banner :place-id="300600"/>
            </client-only>
          </div>

          <Promo/>
        </div>
      </div>
    </div>

    <div class="layout">
      <div class="main">
        <!-- Квадратные управляемые анонсы -->
        <SpendGallery :spend-gallery-data="{}"/>
      </div>
    </div>


    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">

          <template v-if="getRubrics && index >=3 && index < 7 "
                    v-for="(rubric, index) in getRubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

        </div>
        <div class="grid-col grid-col-l">
          <div class="adv_300x600 adv_300x600--gap_title hide_mobile">
<!--            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>-->
            <client-only>
              <Banner :place-id="300600"/>
            </client-only>
          </div>

          <Promo/>

          <div class="hide_mobile">
            <Vote/>
          </div>
        </div>
      </div>
    </div>

    <div class="layout hide_mobile">
      <CompanyNews :company-news-data="{}"/>
    </div>

    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">

          <template v-if="getRubrics && index >=7 && index < 9"
                    v-for="(rubric, index) in getRubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

          <div class="hide_desktop">
            <CompanyNews :company-news-data="{}"/>
          </div>

          <template v-if="getRubrics && index >=9 && index < 11"
                    v-for="(rubric, index) in getRubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

          <div class="adv_layer hide_desktop">
            <div class="adv_300x250">
<!--              <div style="width: 300px; height: 250px;background-color: grey">300x250</div>-->
              <client-only>
                <Banner :place-id="300300"/>
              </client-only>
            </div>
          </div>

        </div>
        <div class="grid-col grid-col-l">
          <div class="adv_300x600 adv_300x600--gap_title hide_mobile">
<!--            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>-->
            <client-only>
              <Banner :place-id="300600"/>
            </client-only>
          </div>

          <div class="hide_mobile">
            <MostReadableAside/>
          </div>
        </div>
      </div>
    </div>

    <div class="layout">
      <div class="main">
        <!-- провести время -->
        <SpendTime v-if="getSpendTime" :spend-time-data="getSpendTime"/>
      </div>
    </div>

    <div class="layout">
      <div class="main">
        <!-- Квадратные управляемые анонсы -->
        <SpendGallery :spend-gallery-data="{}"/>
      </div>
    </div>

    <div class="layout">
      <div class="hide_desktop">
        <Vote/>
      </div>
    </div>


  </main>


</template>

<script src="./MainPage.ts" lang="ts"></script>
<style src="./MainPage.scss" lang="scss" scoped></style>
