<template>
  <header class="main_header">
    <div class="layout">
      <div class="main_header__content" @click="burgerClicked">
        <input
          id="burger_trigger"
          type="checkbox"
          hidden
          aria-hidden="true"
          class="hide"
          aria-labeledby="site_menu"
        />
        <label
          for="burger_trigger"
          class="main_header__item main_header__burger"
          title="Рубрики и разделы"
          tabindex="0"
          @click="burgerClicked"
        >
          <span
            class="vicon vicon--burger main_header__icon main_header__burger_icon"
          >
            <svg class="vicon__body">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#vicon-burger"
              ></use>
            </svg>
          </span>
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
            <span
              class="vicon vicon--exit main_header__icon main_header__exit_icon"
              aria-hidden="true"
            >
              <svg class="vicon__body">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#vicon-exit"
                ></use>
              </svg>
            </span>
          </nuxt-link>
          <nuxt-link
            to="/"
            class="main_header__item main_header__item--regions hide_mobile"
            title="Регионы"
          >
            <span class="main_header__pointer"></span>
            <img class="main_header__icon" src="i/regions.png" alt="Регионы" />
          </nuxt-link>
          <nuxt-link
            to="/"
            class="main_header__item main_header__item--fm hide_mobile"
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

<script src="./HeaderNavbar.ts" lang="ts"></script>
<style src="./HeaderNavbar.scss" lang="scss" scoped></style>
