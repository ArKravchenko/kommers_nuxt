<template>

  <section id="spend" class="spend section">
    {{Math.random()}} SpendTime component cache
    <div class="section_header slided_title">
      <h3 class="section_name">
        <a href="#" class="link section_name__link slided_title__link">
          <span class="section_name__text slided_title__text">Провести время</span>
          <span class="vicon vicon--rarrow section_header__nav slided_title__nav">
					<svg class="vicon__body">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
					</svg>
				</span>
        </a>
      </h3>
      <div class="section_header__list section_header__list--visible">
        <a href="#" class="section_header__more link">Стиль</a>
        <a href="#" class="section_header__more link">Истории</a>
        <a href="#" class="section_header__more link">Авто</a>
        <a href="#" class="section_header__more link">Искусство</a>
        <a href="#" class="section_header__more link">Кино</a>
        <a href="#" class="section_header__more link">Театр</a>
        <a href="#" class="section_header__more link">Музыка</a>
        <a href="#" class="section_header__more link">Наука</a>
        <a href="#" class="section_header__more link">Гаджеты</a>
        <a href="#" class="section_header__more link">Книги</a>
      </div>
    </div>

    <div class="spend__list">

      <template v-for="(item,i) in spendTimeData.data.docs">
        <article :class="['spend__item',{'spend__item--wide':i === 6 || i === 8 || i === 10}] ">
          <div class="spend__photo">
            <img class="spend__img"
                 :src="$imgPlaceholder"
                 v-lazy="cdnUrl+item.img.src"
                 :alt="item.img.alt"
            />
            <noscript>
              <img class="spend__img"
                   :src="cdnUrl+item.img.src"
                   :alt="item.img.alt"
              >
            </noscript>
          </div>
          <div class="spend__text">
            <h4 class="spend__tag">{{ item.tag }}</h4>
            <h2 class="spend__name">
              <a :href="item.href" class="spend__link link spend__link--overlay">{{ item.title }}</a>
            </h2>
          </div>
        </article>
      </template>
    </div>
  </section>

</template>

<script src="./SpendTime.ts" lang="ts"></script>
<style src="./SpendTime.scss" lang="scss" scoped></style>


