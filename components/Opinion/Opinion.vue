<template>
  <article class="opinion">
    <div v-if="isSmall">
      <header class="opinion__header">
        <div class="opinion__text hide_desktop">
          <h4 class="opinion__tag">Мнение</h4>
          <h2 class="opinion__name">
            <a href="#" class="opinion__link opinion__link--overlay">
              Дмитрий Шестоперов о претензиях к американским компаниям
            </a>
          </h2>
        </div>
        <div class="opinion__photo">
          <img
            class="opinion__img opinion__img--small"
            src="https://im.kommersant.ru/CorpImages/GBox/00714092.png"
            alt="Иван Иванов"
          />
        </div>
      </header>
      <div class="opinion__text hide_mobile">
        <h4 class="opinion__tag">Мнение</h4>
        <h2 class="opinion__name">
          <a href="#" class="opinion__link opinion__link--overlay">
            Дмитрий Шестоперов о претензиях к американским компаниям
          </a>
        </h2>
      </div>
    </div>
    <div v-else class="opinion__content">
      <div class="opinion__text opinion__text--big">
        <h4 class="opinion__tag">Мнение</h4>
        <h2 class="opinion__name opinion__name--big">
          <a href="#" class="opinion__link opinion__link--overlay">
            Иван Сухов о месте Юрия Лужкова в российской политике
          </a>
        </h2>
      </div>
      <div class="opinion__photo opinion__photo--big">
        <img
          class="opinion_big__img"
          src="https://im.kommersant.ru/CorpImages/GBox/00851368.png"
          alt="Иван Иванов"
        />
      </div>
    </div>
  </article>
</template>

<script src="./Opinion.ts" lang="ts"></script>
<style src="./Opinion.scss" lang="scss"></style>
