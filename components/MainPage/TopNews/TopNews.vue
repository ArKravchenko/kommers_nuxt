<template>

  <section v-if="getDocs" class="top_news">
    {{Math.random()}} TopNews component cache
    <h2 class="vh">Главные новости</h2>
    <template>

      <template v-for="(item, index) in getDocs">
        <!-- TODO доделать картинку-->
        <!-- главная новость -->
        <article v-if="index===0"
                 :key="index"
                 class="top_news_main">
          <h1 class="top_news_main__name">
            <a :href="item.href || '#'" class="top_news_main__link link">
              <span class="vicon vicon--hot_news top_news_main__lightning">
                <svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                              xlink:href="#vicon-hot_news"></use></svg>
              </span>
              {{ item.title }}
            </a>
          </h1>
        </article>
        <!-- дайджест обычных новостей -->
        <article v-else
                 :key="index"
                 class="top_news__item">
          <h2 class="top_news__name">
            <a :href="item.href || '#'" class="top_news__link">{{ item.title }}&nbsp<span v-if="item.exclusive"
                                                                                          class="top_news__update">
                Эксклюзив
              </span>
            </a>
          </h2>
        </article>
      </template>

      <article class="top_news__item">
        <h2 class="top_news__name">
          <a :href="topNewsData.data.partner.href || '#'"
             class="top_news__link"
             :target="topNewsData.data.partner.isSelfLink? '_self' : '_blanc'">
            {{ topNewsData.data.partner.title }}&nbsp<span class="top_news__update">Партнерский проект</span>
          </a>
        </h2>
      </article>
      <a href="#" class="top_news__more hide_desktop">Вся лента</a>

    </template>
  </section>


</template>

<script src="./TopNews.ts" lang="ts"></script>
<style src="./TopNews.scss" lang="scss" scoped></style>
<style src="./TopNewsMain.scss" lang="scss" scoped></style>
<style src="./TopNewsHot.scss" lang="scss" scoped></style>

