<template>
  <article
    :class="[
      'uho',
      {
        'uho_small grid-col-m uho_separated': isPrimeTime,
        'uho_small grid-col-xs uho_separated': isRubric,
      },
    ]"
  >
    <span v-if="hasPhoto" :class="['uho__photo', { hide_mobile: hidePhoto }]">
      <img
        class="uho__img"
        src="https://im.kommersant.ru/Issues.photo/CORP/2020/10/12/KMO_174688_01273_1_t218_143113.webp"
        alt=""
      />
    </span>
    <div class="uho__text">
      <h4 v-if="hasTag" class="uho__tag">Рубрика</h4>
      <h2 class="uho__name">
        <a href="#" class="uho__link uho__link--overlay">
          Нейтрально-благожелательная ставка
        </a>
      </h2>
      <h3 class="uho__subtitle">
        <a href="#" class="uho__link">
          ЦБ снизил стоимость кредита для победы лучшего над хорошим
        </a>
      </h3>
    </div>
  </article>
</template>

<script src="./Uho.ts" lang="ts"></script>
<style src="./Uho.scss" lang="scss"></style>
