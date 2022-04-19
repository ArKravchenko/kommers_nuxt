<template>
  <section class="aside_news">
    <header class="aside_news__header">
      <h2 class="aside_news__header_name">
        <a href="#" class="link aside_news__header_link">Лента</a>
      </h2>

    </header>

    <article class="aside_news__item">
      <div class="aside_news__text">
        <h4 class="aside_news__date aside_news__placeholder inline_placeholder"></h4>
        <h2 class="aside_news__name aside_news__placeholder inline_placeholder"></h2>
        <h3 class="aside_news__subheader aside_news__placeholder inline_placeholder"></h3>
        <h3 class="aside_news__subheader aside_news__placeholder_middle inline_placeholder"></h3>
      </div>
    </article>


    <article class="aside_news__item">
      <div class="aside_news__text">
        <h4 class="aside_news__date">
          <time class="aside_news__time" datetime="2020-05-26T21:50:26+03:00">23:15</time>
          <span class="aside_news__tag">Бизнес</span>
        </h4>
        <h2 class="aside_news__name">
          <a href="#" class="link aside_news__link--overlay">Baring Vostok вышел из клиники</a>
        </h2>
        <h3 class="aside_news__subheader">
          <a href="#" class="aside_news__link">Фонды продали долю в Европейском медицинском центре</a>
        </h3>
      </div>
    </article>


    <a href="#" class="title_more aside_news__more">Вся лента</a>

  </section>


</template>

<script src="./LentaVertical.ts" lang="ts"></script>
<style src="./LentaVertical.scss" lang="scss" scoped></style>
<style src="../InlinePlaceholder.scss" lang="scss" scoped></style>
<style src="../AsideAds.scss" lang="scss" scoped></style>
