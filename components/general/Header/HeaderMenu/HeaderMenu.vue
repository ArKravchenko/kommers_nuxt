<template>
  <section id="site_menu" :class="[{ isHidden }, 'site_menu']">
    <div class="layout site_menu__body">
      <h4 id="site_menu__name" class="site_menu__name vh">Меню сайта</h4>
      <div class="site_menu__header">
        <label
          for="burger_trigger"
          class="site_menu__header_item site_menu__burger"
          title="Рубрики и разделы"
          tabindex="0"
        >
          <span class="vicon site_menu__icon site_menu__burger_icon">
            <svg class="vicon__body">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#vicon-burger"
              ></use>
            </svg>
          </span>
        </label>
        <nuxt-link to="/" class="site_menu__logo">
          <svg class="site_menu__logo_img">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#vicon-main_logo"
            ></use>
          </svg>
        </nuxt-link>
        <label
          for="burger_trigger"
          class="site_menu__header_item site_menu__close"
          tabindex="0"
        >
          <span class="site_menu__close_text">Закрыть</span>
          <span
            class="vicon vicon--close site_menu__icon site_menu__close_icon"
            aria-hidden="true"
          >
            <svg class="vicon__body">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#vicon-close"
              ></use>
            </svg>
          </span>
        </label>
      </div>
      <ul class="site_menu__list site_menu__list--big">
        <li class="site_menu__item site_menu__item--big">
          <a href="#">Редакция</a>
        </li>
        <li class="site_menu__item site_menu__item--big">
          <a href="#">Радио Ъ-FM</a>
        </li>
        <li class="site_menu__item site_menu__item--big">
          <a href="#">Русфонд</a>
          <a href="#"
            ><img
              src="i/rusfond_logo.png"
              alt="Русфонд"
              class="site_menu__rusfond_img"
          /></a>
        </li>
      </ul>
      <ul class="site_menu__list">
        <li class="site_menu__item">
          <a href="#">Банкротства</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Партнерские проекты</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Картотека</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Конференции</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Подписка</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Реклама</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Фотоагентство</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Академия</a>
        </li>
      </ul>
      <ul class="site_menu__list">
        <li class="site_menu__item">
          <a href="#">Газета</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Огонек</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Weekend</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Приложения</a>
        </li>
        <li class="site_menu__item site">
          <a href="#">Автопилот</a>
        </li>
        <li class="site_menu__item site_menu__item--indent">
          <a href="#">Наука</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Регионы</a>
        </li>
        <li class="site_menu__item">
          <a href="#">UK</a>
        </li>
      </ul>
      <ul class="site_menu__list">
        <li class="site_menu__item">
          <a href="#">Экономика</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Политика</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Мир</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Бизнес</a>
        </li>
        <li class="site_menu__item site">
          <a href="#">Финансы</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Потребрынок</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Телекоммуникации</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Общество</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Происшествия</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Культура</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Спорт</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Авто</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Стиль</a>
        </li>
      </ul>
      <ul class="site_menu__list">
        <li class="site_menu__item">
          <a href="#">Архив</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Темы</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Тенденции</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Мультимедиа</a>
        </li>
        <li class="site_menu__item site">
          <a href="#">Интервью</a>
        </li>
        <li class="site_menu__item">
          <a href="#">Справочники</a>
        </li>
        <li class="site_menu__item site_menu__item--indent">
          <a href="#">Самое читаемое</a>
        </li>
        <li class="site_menu__item">
          <a href="#">E-mail рассылки</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script src="./HeaderMenu.ts" lang="ts"></script>
<style src="./HeaderMenu.scss" lang="scss" scoped></style>
