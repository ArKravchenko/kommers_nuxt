<template>
  <section class="aside_news">
    <header class="aside_news__header">
      <h2 class="aside_news__header_name">
        <a href="/lenta" class="link aside_news__header_link">Лента</a>
      </h2>
    </header>


    <article v-for="i in 19" class="aside_news__item">
      <div class="aside_news__text">
        <h4 class="aside_news__date aside_news__placeholder inline_placeholder"></h4>
        <h2 class="aside_news__name aside_news__placeholder inline_placeholder"></h2>
        <h3 class="aside_news__subheader aside_news__placeholder inline_placeholder"></h3>
        <h3 class="aside_news__subheader aside_news__placeholder_middle inline_placeholder"></h3>
      </div>
    </article>

    <a href="/lenta" class="title_more aside_news__more">Вся лента</a>
  </section>

</template>
