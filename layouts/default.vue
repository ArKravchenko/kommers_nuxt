<template>
  <div style="min-height: 100vh; display: flex;flex-direction: column; justify-content: space-between">
    <!--    <h1 class="envColor">-->
    <!--      Color of this text is injected directly from scssConfig.ts to nuxt.config-->
    <!--      with var $envColor-->
    <!--    </h1>-->
    <!--    <h1 class="platform_color">-->
    <!--      Color of this text is ci conditionally set by importing different scss-->
    <!--      files with var $test-->
    <!--    </h1>-->
    <!--    <Vicons />-->
    <!--    <Header />-->
    <div>
      <Vicons/>
      <div class="layout">
        <div class="adv_nest adv_nest--980x250_top hide_mobile">
          <div class="adv_dummy"><a href="/ad" target="_blank">Реклама в «Ъ» www.kommersant.ru/ad</a></div>
          <div class="adv_980x240">
            <div style="height: 250px; width: 970px; background-color: grey">
              970x250
              <a href="/doc/5154649">
                <h2>Doc /doc/5154649</h2>
              </a>
              <a href="/">
                <h2>Main</h2>
              </a>
              <a href="/listPage/15">
                <h2>ListPage Урал /listPage/15</h2>
              </a>
              <a href="/listPage/10">
                <h2>ListPage Культура /listPage/10</h2>
              </a>
              <a href="/listPage/14">
                <h2>ListPage Сибирь /listPage/14</h2>
              </a>
              <a href="/listPage/35">
                <h2>ListPage с картинкой и описанием /listPage/35 (Описание есть также у 34, 36, 39, 40, 41)</h2>
              </a>
            </div>
          </div>
        </div>
        <div class="adv_nest adv_nest--300x250_top hide_desktop">
          <div class="adv_300x250_top">
            <div style="height: 300px; width: 300px; background-color: grey">970x250</div>
          </div>
        </div>
      </div>
      <Header/>

      <Nuxt/>

    </div>
    <Lenta/>
    <Footer/>
  </div>
</template>

<script src="./default.ts" lang="ts"></script>
<style src="./default.scss" lang="scss"></style>
