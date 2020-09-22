<template>
  <header class="main_header">
    <div class="layout">
      <div class="main main_header__content">
        <label
          for="burger_trigger"
          class="main_header__item main_header__burger"
          title="Рубрики и разделы"
          tabindex="0"
        >
          <img src="i/burger.png" alt="Рубрики и разделы" />
        </label>
        <nuxt-link to="/" class="main_header__logo">
          <svg class="main_header__logo_img">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#vicon-main_logo"
            ></use>
          </svg>
        </nuxt-link>
        <div class="main_header__buttons">
          <nuxt-link
            to="/"
            class="main_header__item main_header__item--lk hide_mobile"
            title="Личный кабинет"
          >
            <img
              class="main_header__icon"
              src="i/lk.png"
              alt="Личный кабинет"
            />
          </nuxt-link>
          <nuxt-link
            class="main_header__item main_header__item--regions hide_mobile"
            to="/"
            title="Регионы"
          >
            <span class="main_header__pointer"></span>
            <img class="main_header__icon" src="i/regions.png" alt="Регионы" />
          </nuxt-link>
          <nuxt-link
            class="main_header__item main_header__item--fm hide_mobile"
            to="/"
            title="Коммерсант FM"
          >
            <img
              class="main_header__icon"
              src="i/fm_logo.png"
              alt="Коммерсант FM"
            />
          </nuxt-link>
          <label
            class="main_header__item main_header__item--search"
            title="Поиск"
          >
            <input
              type="search"
              placeholder="Поиск"
              class="main_header__search_field"
            />
            <img class="main_header__icon" src="i/search.png" alt="Поиск" />
          </label>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.scss" lang="scss" scoped></style>
