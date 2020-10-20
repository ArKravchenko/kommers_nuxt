<template>
  <footer class="footer">
    <div class="layout">
      <div class="grid main">
        <div class="footer_content">
          <div class="footer_section footer_rusfond">
            <a href="#" class="footer_rusfond__link footer__link">
              <p class="footer__title footer__title--grey">
                Благотворительный фонд
              </p>
              <div class="footer_rusfond__logo">
                <img
                  src="/i/rusfond.png"
                  alt="Логотип Русфонда"
                  class="footer_rusfond__img"
                />
              </div>
            </a>
          </div>
          <div class="footer_section footer_nav">
            <ul class="footer_nav__list">
              <li class="footer__title">
                <a href="#" class="footer__link">О «Коммерсанте»</a>
              </li>
              <li class="footer__title">
                <a href="#" class="footer__link">Контакты</a>
              </li>
              <li class="footer__title">
                <a href="#" class="footer__link">Реклама</a>
              </li>
              <li class="footer__title">
                <a href="#" class="footer__link">Вакансии</a>
              </li>
            </ul>
            <ul class="footer_nav__list">
              <li class="footer__title">
                <a href="#" class="footer__link">iOS&amp;Android</a>
              </li>
              <li class="footer__title">
                <a href="#" class="footer__link">Обратная связь</a>
              </li>
              <li class="footer__title">
                <a href="#" class="footer__link">Правовая информация</a>
              </li>
              <li class="footer__title">
                <a href="#" class="footer__link">E-mail рассылки</a>
              </li>
            </ul>
          </div>
          <div class="footer_section footer_social">
            <a href="#" class="footer_social__link">
              <span class="vicon vicon--circled vicon--fb footer_social__icon">
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-fb"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span class="vicon vicon--circled vicon--vk footer_social__icon">
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-vk"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span class="vicon vicon--circled vicon--ig footer_social__icon">
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-ig"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span class="vicon vicon--circled vicon--tw footer_social__icon">
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-tw"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span class="vicon vicon--circled vicon--ok footer_social__icon">
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-ok"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span class="vicon vicon--circled vicon--tg footer_social__icon">
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-tg"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span class="vicon vicon--circled vicon--vb footer_social__icon">
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-vb"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span
                class="vicon vicon--circled vicon--flipboard footer_social__icon"
              >
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-flipboard"
                  ></use>
                </svg>
              </span>
            </a>
            <a href="#" class="footer_social__link">
              <span
                class="vicon vicon--circled vicon--subscribe_service footer_social__icon"
              >
                <svg class="vicon__body">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#vicon-subscribe-service"
                  ></use>
                </svg>
              </span>
            </a>
            <span class="footer__age">16+</span>
          </div>
          <div class="footer_section footer_section--wide">
            <p class="footer__title footer__title--grey">
              Партнерские проекты и новости компаний опубликованы на
              коммерческой основе
            </p>
            <div class="footer_counter hide_mobile">
              <div class="footer_counter__item">
                <!--LiveInternet logo-->
                <a href="http://www.liveinternet.ru/click" target="_blank">
                  <img
                    src="//counter.yadro.ru/logo?14.1"
                    style="border: 0"
                    width="88"
                    height="31"
                    alt=""
                    title="LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня"
                  />
                </a>
                <!--/LiveInternet-->
              </div>
              <div class="footer_counter__item">
                <!-- Rating@Mail.ru logo -->
                <a href="http://top.mail.ru/jump?from=84394" target="_blank">
                  <img
                    src="//top-fwz1.mail.ru/counter?id=84394;t=487;l=1"
                    style="border: 0"
                    height="31"
                    width="88"
                    alt="Рейтинг@Mail.ru"
                  />
                </a>
                <!-- //Rating@Mail.ru logo -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script src="./Footer.ts" lang="ts"></script>
<style src="./Footer.scss" lang="scss" scoped></style>
