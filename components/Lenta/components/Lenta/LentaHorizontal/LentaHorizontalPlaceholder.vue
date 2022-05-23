<template>
    <div>
      <input type="checkbox" class="hide" id="news_lenta_compact">
      <section class="basement_news">
        <header class="basement_news__header">
          <div class="layout">
            <h2 class="basement_news__title">
              <a href="#" class="basement_news__link basement_news__header_link">Лента</a>
            </h2>

            <div class="basement_news__header_body hide_closed">

            </div>


          </div>
        </header>

        <div class="layout basement_news__body">
          <div class="basement_news__list">

            <article class="basement_news__item hide_opened">
              <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__text">
                <div class="basement_news__text vh">Загрузка новости...</div>
                <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
                <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
              </div>
            </article>

            <article v-for="i in 6" class="basement_news__item hide_closed">
              <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__text">
                <div class="basement_news__text vh">Загрузка новости...</div>
                <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
                <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
              </div>
            </article>
          </div>
        </div>

        <footer class="basement_news__footer hide_closed">
          <div class="layout">
            <a href="/lenta" class="basement_news__more">Вся лента</a>
          </div>
        </footer>
      </section>
    </div>
</template>
