<template>


  <main>

    <div class="layout">
      <!-- картина дня -->
      <div class="main">
        <div v-if="mainPageWidgets && mainPageWidgets.superAnnounce && mainPageWidgets.superAnnounce.data && mainPageWidgets.superAnnounce.data.primary">
          <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.primary"/>
        </div>
      </div>
    </div>

    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">
          <!-- топ -->
          <TopNews v-if="mainPageWidgets && mainPageWidgets.top" :topNewsData="mainPageWidgets.top"/>

          <div class="hide_mobile">
            <!-- яркое пятно -->
            <LightSpot :lightSpotData="mainPageWidgets && mainPageWidgets.lightSpot"/>
          </div>
        </div>

        <div class="grid-col grid-col-l hide_mobile">
          <div class="sticky">
            <div class="adv_300x600">
              <div style="width: 300px; height: 600px; background-color: grey">
                300x600
              </div>
            </div>
          </div>
        </div>

        <div v-if="mainPageWidgets && mainPageWidgets.superAnnounce && mainPageWidgets.superAnnounce.data && mainPageWidgets.superAnnounce.data.secondary">
          <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.secondary"/>
        </div>
      </div>
    </div>
    <!-- картина дня end-->

    <div class="layout hide_desktop">
      <div class="adv_300x250">
        <div style="background-color: grey; height: 250px; width: 300px"></div>
      </div>
    </div>

    <div class="layout hide_desktop">
      <!-- яркое пятно мобильное -->
      <LightSpot :lightSpotData="mainPageWidgets && mainPageWidgets.lightSpot"/>
    </div>


    <!-- главное -->
    <div class="layout">
      <MainToday :main-today-data="mainPageWidgets && mainPageWidgets.mainToday"/>
    </div>

    <!-- мнения -->
    <div class="layout">
      <Opinions :opinions-data="mainPageWidgets && mainPageWidgets.opinions"/>
    </div>

    <div class="layout hide_desktop">
      <Promo/>
    </div>

    <!-- мультимедиа -->
    <div class="layout">
      <div class="main">
        <Multimedia :multimedia-data="mainPageWidgets && mainPageWidgets.multimedia"/>
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
        <div style="width: 970px; height: 250px;background-color: grey">970x250</div>
      </div>
    </section>

    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">

          <template v-if="mainPageWidgets && mainPageWidgets.rubrics && index < 3"
                    v-for="(rubric, index) in mainPageWidgets.rubrics.data.rubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

        </div>
        <div class="grid-col grid-col-l">
          <div class="adv_300x600 adv_300x600--gap_title hide_mobile">
            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>
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

          <template v-if="mainPageWidgets && mainPageWidgets.rubrics && index >=3 && index < 7 "
                    v-for="(rubric, index) in mainPageWidgets.rubrics.data.rubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

        </div>
        <div class="grid-col grid-col-l">
          <div class="adv_300x600 adv_300x600--gap_title hide_mobile">
            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>
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

          <template v-if="mainPageWidgets && mainPageWidgets.rubrics && index >=7 && index < 9"
                    v-for="(rubric, index) in mainPageWidgets.rubrics.data.rubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

          <div class="hide_desktop">
            <CompanyNews :company-news-data="{}"/>
          </div>

          <template v-if="mainPageWidgets && mainPageWidgets.rubrics && index >=9 && index < 11"
                    v-for="(rubric, index) in mainPageWidgets.rubrics.data.rubrics">
            <Rubric :rubric-data="rubric"/>
          </template>

          <div class="adv_layer hide_desktop">
            <div class="adv_300x250">
              <div style="width: 300px; height: 250px;background-color: grey">300x250</div>
            </div>
          </div>

        </div>
        <div class="grid-col grid-col-l">
          <div class="adv_300x600 adv_300x600--gap_title hide_mobile">
            <div style="width: 300px; height: 600px;background-color: grey">300x600</div>
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
        <SpendTime :spend-time-data="mainPageWidgets &&  mainPageWidgets.spendTime"/>
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

<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss" scoped></style>
