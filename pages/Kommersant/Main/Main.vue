<template>

  <div class="layout">
    <!-- картина дня -->
    <div class="main" >
      <div v-if="true || mainPageWidgets.superAnnounce.data.primary">
        <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.primary"/>
        <% include inc/superannounce.html %>
        <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.primary"/>
        <% include inc/media_announce.html %>
        <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.primary"/>
        <% include inc/sa_widget.html %>
      </div>

      <div class="layout">
        <div class="main grid">
          <div class="grid-col grid-col-s3">
            <!-- топ -->
            <TopNews :topNewsData="mainPageWidgets.top"/>

            <div class="hide_mobile">
              <!-- яркое пятно -->
              <LightSpot :lightSpotData="mainPageWidgets.lightSpot"/>
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

          <div v-if="true || mainPageWidgets.superAnnounce.data.primary">
            <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.secondary"/>
            <% include inc/superannounce.html %>
            <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.secondary"/>
            <% include inc/media_announce.html %>
            <SuperAnnounce :saData="mainPageWidgets.superAnnounce.data.secondary"/>
            <% include inc/story.aspx %>
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
        <LightSpot :lightSpotData="mainPageWidgets.lightSpot"/>
      </div>


      <!-- главное -->
      <div class="layout">
        <MainToday :main-today-data="mainPageWidgets.mainToday"/>
      </div>



    </div>
  </div>
</template>

<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss" scoped></style>
