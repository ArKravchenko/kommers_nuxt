<template>
  <main>
    <!-- картина дня -->
    <PictureOfTheDay />
    <!-- <div class="adv_layer hide_desktop">
      <div class="adv_300x250"></div>
    </div> -->
    <div class="layout hide_desktop">
      <LightSpot />
    </div>
    <!-- главное -->
    <PrimeTime />
    <div class="layout hide_desktop">
      <Promo />
    </div>
    <!-- мультимедиа -->
    <div class="lyaout">
      <div class="main">
        <!-- <Multimedia /> -->
      </div>
    </div>
    <div class="layout hide_desktop">
      <MostReadable />
    </div>
    <div class="layout hide_desktop">
      <Promo />
    </div>
    <!-- <section class="adv_section hide_mobile">
      <div class="adv_980x240"></div>
    </section> -->
    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">
          <!-- рубрика Экономика -->
          <Rubric rubric-name="Экономика" />
          <!-- рубрика Политика -->
          <Rubric rubric-name="Политика" />
          <!-- рубрика Мир -->
          <Rubric rubric-name="Мир" />
        </div>
        <div class="grid-col grid-col-l">
          <!-- <div class="adv_300x600 adv_300x600--gap_title hide_mobile"></div> -->
          <Promo />
        </div>
      </div>
    </div>
    <div class="layout hide_mobile">
      <div class="main grid">
        <BigAnnounce />
      </div>
    </div>
    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">
          <!-- рубрика Бизнес -->
          <Rubric rubric-name="Бизнес" />
          <!-- рубрика Финансы -->
          <Rubric rubric-name="Финансы" />
          <!-- рубрика Потребрынок -->
          <Rubric rubric-name="Потребрынок" />
          <!-- рубрика Телекоммуникации -->
          <Rubric rubric-name="Телекоммуникации" />
        </div>
        <div class="grid-col grid-col-l">
          <!-- <div class="adv_300x600 adv_300x600--gap_title hide_mobile"></div> -->
          <Promo />
          <div class="hide_mobile">
            <Vote />
          </div>
        </div>
      </div>
    </div>
    <div class="layout hide_mobile">
      <div class="main grid">
        <BigAnnounce is-company-news />
      </div>
    </div>
    <div class="layout">
      <div class="main grid">
        <div class="grid-col grid-col-s3">
          <!-- рубрика Общество -->
          <Rubric rubric-name="Общество" />
          <!-- рубрика Происшествия -->
          <Rubric rubric-name="Происшествия" />
          <div class="hide_desktop">
            <BigAnnounce is-company-news />
          </div>
          <!-- рубрика Культура -->
          <Rubric rubric-name="Культура" />
          <!-- рубрика Спорт -->
          <Rubric rubric-name="Спорт" />
          <!-- <div class="adv_layer hide_desktop">
            <div class="adv_300x250"></div>
          </div> -->
        </div>
        <div class="grid-col grid-col-l">
          <!-- <div class="adv_300x600 adv_300x600--gap_title hide_mobile"></div> -->
          <div class="hide_mobile">
            <MostReadable />
          </div>
        </div>
      </div>
    </div>
    <div class="layout">
      <Spend />
    </div>
    <div class="layout hide_desktop">
      <Vote />
      <!-- <div class="adv_layer">
        <div class="adv_300x250"></div>
      </div> -->
    </div>
  </main>
</template>

<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss"></style>
