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
           <a href="#" class="basement_news__options">
           <span class="basement_news__small_name">Настроить свою</span>
           </a>
<!--           иконка настройки-->
           <a href="#" class="basement_news__options basement_news__control">
           <span class="vicon vicon--sprocket">
           <svg class="vicon__body">
           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-sprocket"></use>
           </svg>
           </span>
           </a>
<!--           tumbler-->
           <input type="checkbox" class="ui-tumbler_trigger" id="business_lenta_down">
           <label class="ui-tumbler basement_news__control" for="business_lenta_down">
           <span class="ui-tumbler__name basement_news__small_name ">
           Только деловые новости
           </span>
           <div class="ui-tumbler__box" aria-hidden="true">
           <span class="ui-tumbler__dot"></span>
           </div>
           </label>
           </div>
           <div class="basement_news__aside_control">
           <button class="ui-button ui-button--standart basement_news__button" type="button" disabled>
           + 17 новых
           </button>
           <label class="basement_news__small_name basement_news__compact_trigger" for="news_lenta_compact" tabindex="0">
           <span class="basement_news__tumbler_name hide_opened">
           Еще
           </span>
           <span class="basement_news__tumbler_name hide_closed">
           Свернуть
           </span>
           <span href="#" class="vicon vicon--rarrow vicon--gull_up">
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
          <!-- 1 dummy news with placeholders -->
          <article class="basement_news__item hide_opened">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <!-- 10 dummy news with placeholders. Required for synchronize animation -->
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>
          <article class="basement_news__item hide_closed">
            <div class="basement_news__date inline_placeholder" aria-hidden="true"></div>
            <div class="basement_news__text">
              <div class="basement_news__text vh">Загрузка новости...</div>
              <div class="basement_news__name inline_placeholder" aria-hidden="true"></div>
              <div class="basement_news__subheader inline_placeholder" aria-hidden="true"></div>
            </div>
          </article>

          <!---->

          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">23:15</time>-->
          <!--<span class="basement_news__tag">Бизнес</span>-->
          <!--</h4>					-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Baring Vostok вышел из клиники</a>-->
          <!--</h2>-->
          <!--<h3 class="basement_news__subheader hide_closed">-->
          <!--<a href="#" class="basement_news__link">Фонды продали долю в Европейском медицинском центре</a>-->
          <!--</h3>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">23:11</time>-->
          <!--<span class="basement_news__tag">Hi-Tech</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Переписи не хватает деталей</a>-->
          <!--</h2>-->
          <!--<h3 class="basement_news__subheader">-->
          <!--<a href="#" class="basement_news__link">Поставки китайских комплектующих для планшетов задерживаются</a>-->
          <!--</h3>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">22:59</time>-->
          <!--<span class="basement_news__tag">Страна</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Лукашенко: Россия предлагает Белоруссии объединение в обмен на единые цены на энергоносители</a>-->
          <!--</h2>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">22:36</time>-->
          <!--<span class="basement_news__tag">Телекоммуникации</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Турецкая авиакомпания AtlasGlobal обанкротилась и прекратила полеты</a>-->
          <!--</h2>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">22:33</time>-->
          <!--<span class="basement_news__tag">Мир</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Ни одно государство мира официально не признает попытку аннексии Крыма</a>-->
          <!--</h2>-->
          <!--<h3 class="basement_news__subheader">-->
          <!--<a href="#" class="basement_news__link">Правительство Украины отчиталось о победах на всех фронтах</a>-->
          <!--</h3>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">22:26</time>-->
          <!--<span class="basement_news__tag">Политика</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Правочное бюро</a>-->
          <!--</h2>-->
          <!--<h3 class="basement_news__subheader">-->
          <!--<a href="#" class="basement_news__link">Что делали с Конституцией на встрече в Ново-Огарево</a>-->
          <!--</h3>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">22:15</time>-->
          <!--<span class="basement_news__tag">Недвижимость</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Отельеры прячутся от звезд</a>-->
          <!--</h2>-->
          <!--<h3 class="basement_news__subheader">-->
          <!--<a href="#" class="basement_news__link">Классификацию просят сделать добровольной</a>-->
          <!--</h3>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">22:01</time>-->
          <!--<span class="basement_news__tag">Финансы</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Ставка в обмен на капитал</a>-->
          <!--</h2>-->
          <!--<h3 class="basement_news__subheader">-->
          <!--<a href="#" class="basement_news__link">Пенсионные фонды выбирают субординированные облигации ПСБ</a>-->
          <!--</h3>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">21:55</time>-->
          <!--<span class="basement_news__tag">Мир</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">FT: Минфин США заподозрил Дерипаску в отмывании денег Путина</a>-->
          <!--</h2>-->
          <!--</div>-->
          <!--</article>-->
          <!--<article class="basement_news__item hide_closed">-->
          <!--<div class="basement_news__text">-->
          <!--<h4 class="basement_news__date">-->
          <!--<time class="basement_news__time" datetime="2020-05-26T21:50:26+03:00">21:50</time>-->
          <!--<span class="basement_news__tag">Происшествия</span>-->
          <!--</h4>-->
          <!--<h2 class="basement_news__name">-->
          <!--<a href="#" class="basement_news__link basement_news__link&#45;&#45;overlay">Суд оставил в СИЗО обвиняемого в хранении кокаина боксера Кушиташвили</a>-->
          <!--</h2>-->
          <!--</div>-->
          <!--</article>-->
          <div class="basement_news__ads hide_closed">
            <AsideNewsAds v-for="i in 3" :key="i"/>
          </div>
        </div>
      </div>
      <footer class="basement_news__footer hide_closed">
        <div class="layout">
          <a href="#" class="basement_news__more">Вся лента</a>
        </div>
      </footer>
    </section>
  </div>
</template>

<script src="./LentaHorizontal.ts" lang="ts"></script>
<style src="./LentaHorizontal.scss" lang="scss" scoped></style>
<style src="../InlinePlaceholder.scss" lang="scss" scoped></style>
<style src="../AsideAds.scss" lang="scss" scoped></style>
