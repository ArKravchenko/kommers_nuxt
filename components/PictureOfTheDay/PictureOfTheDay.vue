<template>
  <section id="picture_of_the_day">
    <div class="layout">
      <div class="main grid">
        <SuperAnnounce />
        <div class="grid-col grid-col-s3">
          <TopNews />
          <div class="hide_mobile">
            <LightSpot />
          </div>
        </div>
        <div class="grid-col grid-col-l">
          <!-- adv_300x600 -->
        </div>
        <SuperAnnounce />
      </div>
    </div>
  </section>
</template>

<script src="./PictureOfTheDay.ts" lang="ts"></script>
<style src="./PictureOfTheDay.scss" lang="scss"></style>
