<template>
  <aside class="aside_column">
    <div class="aside_news">
      <div class="aside_news__header">
        <h2 class="aside_news__header_name">
          <nuxt-link to="/" class="aside_news__link aside_news__header_link">
            Лента
          </nuxt-link>
        </h2>
        <nuxt-link to="/" class="aside_news__options">
          <span class="aside_news__small_name">Настроить свою</span>
          <span class="vicon vicon--sprocket">
            <svg class="vicon__body">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#vicon-sprocket"
              ></use>
            </svg>
          </span>
        </nuxt-link>
        <!-- tumbler -->
        <input id="business_lenta" class="ui-tumbler_trigger" type="checkbox" />
        <label class="ui-tumbler aside_news__small_name" for="business_lenta">
          <span class="aside_news__tumbler_name">Только деловые новости</span>
          <div class="ui-tumbler__box">
            <span class="ui-tumbler__dot">Только деловые новости</span>
          </div>
        </label>
      </div>
      <button
        type="button"
        class="ui-button ui-button--standart aside_news__button"
      >
        + 17 новостей
      </button>

      <!-- could be a template -->
      <!-- <article v-for="news in newsList" :key="news.id" class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" :datetime="dateTime">
              {{ time }}
            </time>
            <span class="aside_news__tag">{{ tag }}</span>
          </h4>
          <h2 class="aside_news__name">
            <nuxt-link to="/" class="link aside_news__link--overlay">
              {{ title }}
            </nuxt-link>
          </h2>
          <h3 v-if="subtitle" class="aside_news__subheader">
            <nuxt-link to="/" class="aside_news__link">
              {{ subtitle }}
            </nuxt-link>
          </h3>
        </div>
      </article> -->
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              23:15
            </time>
            <span class="aside_news__tag">Бизнес</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Baring Vostok вышел из клиники
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Фонды продали долю в Европейском медицинском центре
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              23:11
            </time>
            <span class="aside_news__tag">Hi-Tech</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Переписи не хватает деталей
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Поставки китайских комплектующих для планшетов задерживаются
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:59
            </time>
            <span class="aside_news__tag">Страна</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Лукашенко: Россия предлагает Белоруссии объединение в обмен на
              единые цены на энергоносители
            </a>
          </h2>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:36
            </time>
            <span class="aside_news__tag">Бизнес</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Турецкая авиакомпания AtlasGlobal обанкротилась и прекратила
              полеты
            </a>
          </h2>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:33
            </time>
            <span class="aside_news__tag">Мир</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Ни одно государство мира официально не признает попытку аннексии
              Крыма
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Правительство Украины отчиталось о победах на всех фронтах
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:26
            </time>
            <span class="aside_news__tag">Политика</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Правочное бюро
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Что делали с Конституцией на встрече в Ново-Огарево
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:15
            </time>
            <span class="aside_news__tag">Недвижимость</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Отельеры прячутся от звезд
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Классификацию просят сделать добровольной
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:01
            </time>
            <span class="aside_news__tag">Финансы</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Ставка в обмен на капитал
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Пенсионные фонды выбирают субординированные облигации ПСБ
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              21:55
            </time>
            <span class="aside_news__tag">Мир</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              FT: Минфин США заподозрил Дерипаску в отмывании денег Путина
            </a>
          </h2>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              21:50
            </time>
            <span class="aside_news__tag">Происшествия</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Суд оставил в СИЗО обвиняемого в хранении кокаина боксера
              Кушиташвили
            </a>
          </h2>
        </div>
      </article>

      <Promo />

      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              21:27
            </time>
            <span class="aside_news__tag">Мир</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              12 шагов к миру в Донбассе
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Эксперты из России, с Украины и из западных стран прописали
              сценарий урегулирования конфликта
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              21:23
            </time>
            <span class="aside_news__tag">Политика</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              «Ни в какой бюллетень поправки вместиться не могут»
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Глава ЦИКа Элла Памфилова рассказала “Ъ”, как организует
              голосование по поправкам к Конституции
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              21:03
            </time>
            <span class="aside_news__tag">Мир</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Кремль уверен, что Турция примет меры для безопасности посла
              России
            </a>
          </h2>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              20:54
            </time>
            <span class="aside_news__tag">Бизнес</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Гендиректор «Вымпелкома» объяснил увольнение желанием больше быть
              с семьей
            </a>
          </h2>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              20:44
            </time>
            <span class="aside_news__tag">Спорт</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Вывих и медали
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Как российские конькобежцы стартовали на чемпионате мира в США
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:26
            </time>
            <span class="aside_news__tag">Политика</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Правочное бюро
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Что делали с Конституцией на встрече в Ново-Огарево
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:15
            </time>
            <span class="aside_news__tag">Недвижимость</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Отельеры прячутся от звезд
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Классификацию просят сделать добровольной
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              22:01
            </time>
            <span class="aside_news__tag">Финансы</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Ставка в обмен на капитал
            </a>
          </h2>
          <h3 class="aside_news__subheader">
            <a href="#" class="aside_news__link">
              Пенсионные фонды выбирают субординированные облигации ПСБ
            </a>
          </h3>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              21:55
            </time>
            <span class="aside_news__tag">Мир</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              FT: Минфин США заподозрил Дерипаску в отмывании денег Путина
            </a>
          </h2>
        </div>
      </article>
      <article class="aside_news__item">
        <div class="aside_news__text">
          <h4 class="aside_news__date">
            <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">
              21:50
            </time>
            <span class="aside_news__tag">Происшествия</span>
          </h4>
          <h2 class="aside_news__name">
            <a href="#" class="link aside_news__link--overlay">
              Суд оставил в СИЗО обвиняемого в хранении кокаина боксера
              Кушиташвили
            </a>
          </h2>
        </div>
      </article>

      <a href="#" class="aside_news__more">Вся лента</a>
    </div>
  </aside>
</template>

<script src="./AsideNews.ts" lang="ts"></script>
<style src="./AsideNews.scss" lang="scss"></style>
