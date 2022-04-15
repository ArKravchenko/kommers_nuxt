<template>
  <div>
    <!-- Site menu trigger -->
    <input type="checkbox" hidden aria-hidden="true" class="hide site_menu_trigger" id="burger_trigger">

    <!-- Header -->
    <header class="main_header">
      <div class="layout">
        <div class="main_header__content">
          <label for="burger_trigger" class="main_header__item main_header__burger" title="Рубрики и разделы"
                 tabindex="0">
            <!-- <img src="i/burger.png" class="main_header__icon" alt="Рубрики и разделы"> -->
            <span class="vicon vicon--burger main_header__icon main_header__burger_icon">
						<svg class="vicon__body">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-burger"></use>
						</svg>
					</span>
          </label>
          <a href="/" class="main_header__logo">
            <svg class="main_header__logo_img">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-main_logo"></use>
            </svg>
            <span class="vh">Коммерсантъ</span>
          </a>
          <div class="main_header__buttons">
					<span class="auth js-auth main_header__item hide_mobile">
						<a href="#" class="auth__profile" title="Профиль">
							<span class="vicon main_header__icon main_header__login_icon" aria-hidden="true">
								<svg class="vicon__body">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-user"></use>
								</svg>
							</span>
						</a>
						<a href="#" class="auth__login user-login" title="Личный кабинет">
							<span class="vicon main_header__icon main_header__login_icon" aria-hidden="true">
								<svg class="vicon__body">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-user"></use>
								</svg>
							</span>
						</a>
					</span>
            <a class="main_header__item main_header__item--regions hide_mobile js-navmenu-trigger" href="#"
               title="Регионы" data-navmenu-id="js-navmenu-regions"
               data-navmenu-class-active="main_header__item--active"
               @mouseout="()=>regionsToggleHandler(false)"
               @mouseover="()=>regionsToggleHandler(true)"
            >
              <span class="main_header__pointer"></span>
              <span class="vicon main_header__icon" aria-hidden="true">
							<svg class="vicon__body">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-regions"></use>
							</svg>
						</span>
            </a>
            <button class="ui-button main_header__item hide_mobile fm_announce" title="Коммерсант FM">
              <span class="vh">Коммерсант FM</span>
              <span class="vicon main_header__icon" aria-hidden="true">
							<svg class="vicon__body">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-fm"></use>
							</svg>
						</span>
            </button>
            <!--
            <label class="main_header__item main_header__item--search" title="Поиск">
              <input type="search" placeholder="Поиск" class="main_header__search_field">
              <span class="vicon main_header__icon" aria-hidden="true">
                <svg class="vicon__body">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-search"></use>
                </svg>
              </span>
            </label>
            -->
            <form :class="['main_header__item main_header__item--search',{'is_active':isSearchActive}]">
              <input type="hidden" name="places" value="">
              <input type="hidden" name="categories" value="">
              <input type="hidden" name="datestart" value="">
              <input type="hidden" name="dateend" value="">
              <input type="hidden" name="sort_type" value="1">
              <input type="hidden" name="regions" value="">
              <input type="hidden" name="results_count" value="">
              <input type="hidden" name="page" value="1">
              <input type="search" name="search_query" placeholder="Поиск" class="main_header__search_field">
              <button @click.prevent="searchClickHandler" class="ui-button vicon main_header__icon" title="Поиск">
                <svg class="vicon__body">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-search"></use>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>

    <!-- Site menu -->
    <section class="site_menu " id="site_menu">
      <label for="burger_trigger" class="site_menu__close_overlay"><span class="vh">Закрыть меню</span></label>
      <div class="site_menu__lift">
        <div class="layout site_menu__body">
          <h4 class="site_menu__name vh" id="site_menu__name">
            Меню сайта
          </h4>
          <div class="site_menu__header">
            <label for="burger_trigger" class="site_menu__header_item site_menu__burger" title="Рубрики и разделы"
                   tabindex="0" aria-hidden="true">
					<span class="vicon site_menu__icon site_menu__burger_icon">
						<svg class="vicon__body">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-burger"></use>
						</svg>
					</span>
            </label>
            <a href="/" class="site_menu__logo">
              <svg class="site_menu__logo_img">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-main_logo"></use>
              </svg>
            </a>
            <label for="burger_trigger" class="site_menu__header_item site_menu__close" tabindex="0" aria-hidden="true">
              <span class="site_menu__close_text">Закрыть</span>
              <span class="vicon vicon--close site_menu__icon site_menu__close_icon">
						<svg class="vicon__body">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-close"></use>
						</svg>
					</span>
            </label>
          </div>

          <div class="hide_desktop auth js-awuth is_active site_menu__list site_menu__list--big site_menu__list--auth">
            <a href="#" class="auth__exit user-logout" title="Личный кабинет">
					<span class="vicon site_menu__auth_icon" aria-hidden="true">
						<svg class="vicon__body">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-exit"></use>
						</svg>
					</span>
            </a>
            <a href="#" class="auth__login user-login" title="Личный кабинет">
					<span class="vicon site_menu__auth_icon" aria-hidden="true">
						<svg class="vicon__body">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-user"></use>
						</svg>
					</span>
            </a>
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
              <a href="#"><img src="/i/rusfond_logo.png" alt="Русфонд" class="site_menu__rusfond_img"></a>
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
      </div>
    </section>

    <!-- regions -->
    <div class="regions hide_mobile" >
      <div :class="['regions__menu js-navmenu-item',{'regions__menu--active':isRegionsMenuActive}]"
           @mouseout="()=>regionsToggleHandler(false)"
           @mouseover="()=>regionsToggleHandler(true)"
           id="js-navmenu-regions"
           data-navmenu-class-active="regions__menu--active">
        <div class="layout">
          <div class="main">
            <div class="regions__body">
              <ul class="regions__list">
                <li class="regions__item">
                  <a href="#" class="regions__link">Москва</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Санкт-Петербург</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Черноземье</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Урал</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Удмуртия</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Волга-Урал</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Кубань</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Центральная Сибирь </a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Приволжье</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Сибирь</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Прикамье</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Юг России</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Волга</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Средняя Волга</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Башкортостан</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Южный Урал</a>
                </li>
                <li class="regions__item">
                  <a href="#" class="regions__link">Ярославль</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.scss" lang="scss" scoped></style>
<style src="./SiteMenu.scss" lang="scss" scoped></style>
<style src="./Auth.scss" lang="scss" scoped></style>
<style src="./Regions.scss" lang="scss" scoped></style>
