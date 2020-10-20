<template>
  <div class="big_announce">
    <!-- company news -->
    <div
      v-if="isCompanyNews"
      class="big_announce__text big_announce__text--shadow"
    >
      <h4 class="big_announce__tag big_announce__tag--black">
        <a href="#" class="big_announce__link big_announce__link--separated">
          Новости компаний
        </a>
        <a href="#" class="big_announce__link big_announce__link--more">
          все
        </a>
      </h4>
      <ul class="big_announce__list">
        <li class="big_announce__item">
          <h4 class="big_announce__date">22.07.2020</h4>
          <h2 class="big_announce__name big_announce__name--black">
            <a href="#" class="big_announce__link">Название компании</a>
          </h2>
          <h3 class="big_announce__subtitle big_announce__subtitle--black">
            <a href="#" class="big_announce__link big_announce__link--overlay">
              «Галс-Девелопмент» подписал соглашение о сотрудничестве с школой
              Heritage Education Group
            </a>
          </h3>
        </li>
        <li class="big_announce__item">
          <h4 class="big_announce__date">21.07.2020</h4>
          <h2 class="big_announce__name big_announce__name--black">
            <a href="#" class="big_announce__link">«Галс-Девелопмент»</a>
          </h2>
          <h3 class="big_announce__subtitle big_announce__subtitle--black">
            <a href="#" class="big_announce__link big_announce__link--overlay">
              «Галс-Девелопмент» завершил важный этап нового строительства
              объекта «Невская Ратуша»
            </a>
          </h3>
        </li>
        <li class="big_announce__item">
          <h4 class="big_announce__date">15.07.2020</h4>
          <h2 class="big_announce__name big_announce__name--black">
            <a href="#" class="big_announce__link">«Галс-Девелопмент»</a>
          </h2>
          <h3 class="big_announce__subtitle big_announce__subtitle--black">
            <a href="#" class="big_announce__link big_announce__link--overlay">
              «Просвещение» и «ИКС Холдинг» формируют цифровое будущее школ
            </a>
          </h3>
        </li>
        <li class="big_announce__item">
          <h4 class="big_announce__date">7.07.2020</h4>
          <h2 class="big_announce__name big_announce__name--black">
            <a href="#" class="big_announce__link">«Галс-Девелопмент»</a>
          </h2>
          <h3 class="big_announce__subtitle big_announce__subtitle--black">
            <a href="#" class="big_announce__link big_announce__link--overlay">
              В ЦДМ на Лубянке возобновили работу развлекательные центры
            </a>
          </h3>
        </li>
      </ul>
    </div>
    <!-- projects announcement -->
    <div v-else-if="isProject" class="big_announce__content hide_mobile">
      <span class="big_announce__photo">
        <img
          src="https://im.kommersant.ru/CorpImages/GBox/00836557.jpg"
          alt=""
          class="big_announce__img"
        />
      </span>
      <div class="big_announce__text big_announce__text--absolute">
        <h4 class="big_announce__tag">
          <a href="#" class="big_announce__link">Партнерские проекты</a>
        </h4>
        <ul class="big_announce__list">
          <li class="big_announce__item big_announce__item--five">
            <h2 class="big_announce__name">
              <a
                href="#"
                class="big_announce__link big_announce__link--overlay"
              >
                Химический комплекс России
              </a>
            </h2>
            <h3 class="big_announce__subtitle big_announce__subtitle--small">
              <a href="#" class="big_announce__link">
                Совместный проект Минпромторга России и «Ъ»
              </a>
            </h3>
          </li>
          <li class="big_announce__item big_announce__item--five">
            <h2 class="big_announce__name">
              <a
                href="#"
                class="big_announce__link big_announce__link--overlay"
              >
                Шедевры Гейнсборо в Москве
              </a>
            </h2>
            <h3 class="big_announce__subtitle big_announce__subtitle--small">
              <a href="#" class="big_announce__link">
                Совместный проект ГМИИ им. А.С. Пушкина и «Ъ»
              </a>
            </h3>
          </li>
          <li class="big_announce__item big_announce__item--five">
            <h2 class="big_announce__name">
              <a
                href="#"
                class="big_announce__link big_announce__link--overlay"
              >
                «Цифровое» образование: пусть никто не останется лишним
              </a>
            </h2>
            <h3 class="big_announce__subtitle big_announce__subtitle--small">
              <a href="#" class="big_announce__link">
                Совместный проект «СЦОС в РФ» и «Ъ»
              </a>
            </h3>
          </li>
          <li class="big_announce__item big_announce__item--five">
            <h2 class="big_announce__name">
              <a
                href="#"
                class="big_announce__link big_announce__link--overlay"
              >
                Простая финансовая история
              </a>
            </h2>
            <h3 class="big_announce__subtitle big_announce__subtitle--small">
              <a href="#" class="big_announce__link">
                Совместный проект Министерства финансов и «Ъ»
              </a>
            </h3>
          </li>
          <li
            class="big_announce__item big_announce__item--five big_announce__item--more"
          >
            <h2 class="big_announce__name big_announce__more">
              <a
                href="#"
                class="big_announce__link big_announce__link--overlay"
              >
                Все <br />
                проекты
              </a>
            </h2>
          </li>
        </ul>
      </div>
    </div>
    <!-- single announcement -->
    <div v-else class="big_announce__content">
      <span class="big_announce__photo">
        <img
          src="https://im.kommersant.ru/CorpImages/GBox/00836706.jpg"
          alt=""
          class="big_announce__img"
        />
      </span>
      <div class="big_announce__text big_announce__text--absolute">
        <h4 class="big_announce__tag">Бизнес анонс</h4>
        <h2
          class="big_announce__name big_announce__name_28 big_announce__name--half"
        >
          <a href="#" class="big_announce__link big_announce__link--overlay">
            Внутренний туризм — драйвер развития российских регионов
          </a>
        </h2>
        <h3
          class="big_announce__subtitle big_announce__subtitle--bold big_announce__subtitle--half"
        >
          <a href="#" class="big_announce__link">
            Межрегиональный онлайн-марафон ИД "Коммерсантъ", 22 - 23 сентября
            2020
          </a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script src="./BigAnnounce.ts" lang="ts"></script>
<style src="./BigAnnounce.scss" lang="scss"></style>
