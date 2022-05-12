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
          <div class="adv_dummy">
            <a href="/ad" target="_blank">Реклама в «Ъ» www.kommersant.ru/ad</a>
          </div>
          <div class="adv_980x240">
            <div style="height: 250px; width: 970px; background-color: grey">
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
              <a href="/doc/5154649">
                <h2>Doc /doc/5154649</h2>
              </a>
              <a href="/doc/3793243">
                <h2>Hашпигованный тестовый док /doc/3793243</h2>
              </a>
              <a href="/doc/4985804">
                <h2>Док с аудио /doc/4985804</h2>
              </a>
              <a href="/doc/5154572">
                <h2>Док с пропавшим видео /doc/5154572</h2>
              </a>
              <a href="/doc/5154572">
                <h2>Док с потерявшейся ссылкой на выпуск в футере дока /doc/5154572</h2>
              </a>
              <a href="/doc/5006884">
                <h2>Док с таблицами /doc/5006884</h2>
              </a>
            </div>
<!--            <client-only>-->
<!--              <Banner :place-id="970250"/>-->
<!--            </client-only>-->
          </div>
        </div>
        <div class="adv_nest adv_nest--300x250_top hide_desktop">
          <div class="adv_300x250_top" style="min-height: 300px">
            <!--/*            <div style="height: 300px; width: 300px; background-color: grey">300x250</div>*/-->
            <client-only>
              <Banner :place-id="300300"/>
            </client-only>

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
