<template>
  <article class="promo">
    <span class="promo__photo">
      <img
        class="promo__img"
        src="https://im.kommersant.ru/CorpImages/GBox/00846933.jpg"
        alt=""
      />
    </span>
    <div class="promo__text">
      <h4 class="promo__tag">{{ tag }}</h4>
      <h2 class="promo__name">
        <a href="#" class="promo__link promo__link--overlay">
          {{ title }}
        </a>
      </h2>
      <h3 class="promo__subtitle">
        <a href="#" class="promo__link">
          {{ subtitle }}
        </a>
      </h3>
    </div>
  </article>
</template>

<script src="./Promo.ts" lang="ts"></script>
<style src="./Promo.scss" lang="scss" scoped></style>
