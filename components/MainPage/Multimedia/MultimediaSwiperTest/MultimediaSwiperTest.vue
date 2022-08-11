<template>


  <section v-if="getItems" class="multimedia" id="multimedia">
    <span v-if="this.$isServer">{{ Math.random() }} Multimedia component cache</span>

    <div class="section_header slided_title">
      <h3 class="section_name">
        <a v-if="!narrow" href="/specials?from=multimedia" class="link section_name__link slided_title__link">
          <span class="section_name__text slided_title__text">Мультимедиа</span>
          <span class="vicon vicon--rarrow section_header__nav slided_title__nav">
					<svg class="vicon__body">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
					</svg>
				</span>
        </a>
        <template v-else>
          Мультимедиа
        </template>
      </h3>
      <div class="section_header__list" v-if="!narrow">
        <a href="#" class="section_header__more link">Фото</a>
        <a href="#" class="section_header__more link">Видео</a>
        <a href="#" class="section_header__more link">Спецпроекты</a>
        <a href="#" class="section_header__more link">Подкасты</a>
        <a href="#" class="section_header__more link">Наглядно</a>
      </div>
    </div>

    <div ref="swiper" class="swiper multimedia__slider slider slider-multimedia slider-multimedia-main slider-multimedia-fit">
      <div ref="sliderPrev" class="multimedia__nav_button multimedia__nav_button--prev slider-nav_button slider-prev">
        <a href="#" class="multimedia__nav_link link slider-link">
				<span v-show="!scroll" class="vicon vicon--larrow slider-nav_icon">
					<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xlink:href="#vicon-rarrow"></use></svg>
				</span>
          <span class="vh">Предыдущий слайд</span>
        </a>
      </div>
      <div :class="['swiper-wrapper multimedia__canvas slider-multimedia-resizable']">
        <template v-for="item in getItems">
          <div class="multimedia__item slider-item slider-multimedia-resizable-item swiper-slide" style="margin-right: 40px">
            <article class="uho">
              <div class="uho__photo">
                <Picture
                  :img-class="'uho__img'"
                  :src="item.img.src"
                  :alt="item.img.alt"
                  :noscript-string="getItemNoscriptString(item)"
                />
<!--                <img class="uho__img fallback_image"-->
<!--                     :data-src="cdnUrl+item.img.src"-->
<!--                     v-lazytest-->
<!--                     :src="$imgPlaceholder"-->
<!--                     :alt="item.img.alt">-->
<!--                <component v-if="$isServer" is="noscript">-->
<!--                  <img class="uho__img fallback_image"-->
<!--                       :src="cdnUrl+item.img.src"-->
<!--                       :alt="item.img.alt"-->
<!--                  >-->
<!--                </component>-->
              </div>
              <div class="uho__text">
                <p class="title_12 uho__tag">{{ item.tag }}</p>
                <h2 class="title_20 uho__name m-title_24">
                  <a :href="item.href" class="link_overlay_wide link slider-link">
                    {{item.title}}
                  </a>
                </h2>
                <h3 class="title_15 uho__subtitle m-title_20">
                  <a :href="item.href" class="link slider-link">
                    {{item.subtitle}}
                  </a>
                </h3>
              </div>
            </article>
          </div>
        </template>


      </div>
      <div ref="sliderNext" style="display: block"
           :class="['multimedia__nav_button multimedia__nav_button--next slider-nav_button slider-next',
            {'multimedia__scroll_indicator': narrow && !reachEnd}]"
      >
        <a href="#" class="multimedia__nav_link link slider-link">
				<span v-show="!scroll" class="vicon vicon--rarrow slider-nav_icon">
					<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xlink:href="#vicon-rarrow"></use></svg>
				</span>
          <span class="vh">Следующий слайд</span>
        </a>
      </div>
    </div>
  </section>


</template>

<script src="./MultimediaSwiperTest.ts" lang="ts"></script>
<style src="./MultimediaSwiperTest.scss" lang="scss" scoped></style>


