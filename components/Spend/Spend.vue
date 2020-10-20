<template>
  <section id="spend" class="section">
    <SectionHeader section-name="Провести время" is-spend />

    <div class="spend__list main grid">
      <article
        v-for="article in articleList"
        :key="article.id"
        :class="['spend__item', { 'spend__item--wide': article.isWide }]"
      >
        <div class="spend__photo">
          <img
            v-if="article.src"
            class="spend__img"
            :src="article.src"
            alt=""
          />
        </div>
        <div class="spend__text">
          <h4 class="spend__tag">{{ article.tag }}</h4>
          <h2 class="spend__name">
            <a href="#" class="spend__link spend__link--overlay">
              {{ article.title }}
            </a>
          </h2>
          <h3 class="spend__subheader">
            <a href="#" class="spend__link">
              {{ article.subtitle }}
            </a>
          </h3>
        </div>
      </article>
    </div>
  </section>
</template>

<script src="./Spend.ts" lang="ts"></script>
<style src="./Spend.scss" lang="scss"></style>
