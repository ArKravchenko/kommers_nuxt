<template>

  <!-- Квадратные управляемые анонсы -->
  <div class="multimedia__slider slider slider-commercial" v-if="getDocs">
    <LazyHydrate never>
      <span>{{ Math.random() }} SpendGallery component cache</span>
    </LazyHydrate>
    <div
      class="multimedia__prev multimedia__nav_button multimedia__nav_button--prev slider-nav_button slider-prev hide_desktop">
      <a href="#" class="multimedia__nav_link link slider-link">
			<span class="vicon vicon--larrow slider-nav_icon">
				<svg class="vicon__body">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
				</svg>
			</span>
        <span class="vh">Предыдущий слайд</span>
      </a>
    </div>

    <div class="multimedia__canvas slider-canvas" style="overflow: hidden">

      <template v-for="item in getDocs">

        <div class="multimedia__item slider-item" style="margin-right:40px">
          <article class="spend__item ">
            <div class="spend__photo">
<!--              <img class="spend__img slider-img"-->
<!--                   :src="$imgPlaceholder"-->
<!--                   v-lazytest-->
<!--                   :data-src="'https://im.kommersant.ru/CorpImages/MainPage/20211215135313_budu_7_1280.jpg'"-->
<!--                   alt="Как сделать офисное пространство безопаснее">-->

              <Picture
                :img-class="'spend__img slider-img'"
                :src="getItemImgSrc(item)"
                :alt="getItemImgAlt(item)"
                :noscript-string="getItemImgNoscriptString(item)"
              />
            </div>
            <div class="spend__text">
              <p class="spend__tag" v-if="getItemTag(item)">
                {{ getItemTag(item) }}
              </p>
              <h2 class="spend__name" v-if="getItemTitle(item)">
                <a v-if="getItemHref(item)"
                   :href="getItemHref(item)"
                   v-bind="getItemHrefTarget(item)"
                   class="spend__link link link_overlay slider-link">
                  {{ getItemTitle(item) }}
                </a>
                <template v-else>
                  {{ getItemTitle(item) }}
                </template>
              </h2>
              <h3 class="spend__subheader" v-if="getItemSubtitle(item)">
                <a v-if="getItemHref(item)"
                   :href="getItemHref(item)"
                   v-bind="getItemHrefTarget(item)"
                   class="spend__link slider-link">
                  {{ getItemSubtitle(item) }}
                </a>
                <template v-else>
                  {{ getItemSubtitle(item) }}
                </template>
              </h3>
            </div>
          </article>
        </div>
      </template>



<!--      <div class="multimedia__item slider-item" style="margin-right:40px">-->
<!--        <article class="spend__item ">-->
<!--          <div class="spend__photo">-->
<!--            <img class="spend__img slider-img"-->
<!--                 :src="$imgPlaceholder"-->
<!--                 v-lazytest-->
<!--                 :data-src="'https://im.kommersant.ru/CorpImages/MainPage/20211215135412_dyson_2_1280.jpg'"-->
<!--                 alt="Дышите глубже">-->
<!--          </div>-->
<!--          <div class="spend__text">-->
<!--            <p class="spend__tag">Партнерский проект <span style="color: red">ЗАГЛУШКА</span></p>-->
<!--            <h2 class="spend__name">-->
<!--              <a-->
<!--                href="https://www.kommersant.ru/doc/5117088?utm_source=kommersant&amp;utm_medium=partner&amp;utm_campaign=dyson "-->
<!--                class="spend__link link link_overlay slider-link">Дышите глубже</a>-->
<!--            </h2>-->
<!--            <h3 class="spend__subheader">-->
<!--              <a-->
<!--                href="https://www.kommersant.ru/doc/5117088?utm_source=kommersant&amp;utm_medium=partner&amp;utm_campaign=dyson "-->
<!--                class="spend__link slider-link">Как сделать воздух в доме чистым и безопасным в течение всего года</a>-->
<!--            </h3>-->
<!--          </div>-->
<!--        </article>-->
<!--      </div>-->
<!--      <div class="multimedia__item slider-item" style="margin-right:40px">-->
<!--        <article class="spend__item ">-->
<!--          <div class="spend__photo">-->
<!--            <img class="spend__img slider-img"-->
<!--                 :src="$imgPlaceholder"-->
<!--                 v-lazytest-->
<!--                 :data-src="'https://im.kommersant.ru/Issues.photo/Partners_Projects/2021/12/09/KMO_111307_40780_1_t218_135607.jpg'"-->
<!--                 alt="Все как у людей">-->
<!--          </div>-->
<!--          <div class="spend__text">-->
<!--            <p class="spend__tag">Партнерский материал <span style="color: red">ЗАГЛУШКА</span></p>-->
<!--            <h2 class="spend__name">-->
<!--              <a href="/doc/5119139" class="spend__link link link_overlay slider-link">Все как у людей</a>-->
<!--            </h2>-->
<!--            <h3 class="spend__subheader">-->
<!--              <a href="/doc/5119139" class="spend__link slider-link">Для лечения животных в ветеринарном госпитале-->
<!--                Vet.сity используются &#171;человеческое&#187; оборудование</a>-->
<!--            </h3>-->
<!--          </div>-->
<!--        </article>-->
<!--      </div>-->
<!--      <div class="multimedia__item slider-item" style="margin-right:40px">-->
<!--        <article class="spend__item ">-->
<!--          <div class="spend__photo">-->
<!--            <img class="spend__img slider-img"-->
<!--                 :src="$imgPlaceholder"-->
<!--                 v-lazytest-->
<!--                 :data-src="'https://im.kommersant.ru/CorpImages/MainPage/20211207144638_1280_720 (1) (002).jpg'"-->
<!--                 alt="OpenRAN Russia 2021">-->
<!--          </div>-->
<!--          <div class="spend__text">-->
<!--            <p class="spend__tag">Конференция <span style="color: red">ЗАГЛУШКА</span></p>-->
<!--            <h2 class="spend__name">-->
<!--              <a-->
<!--                href="https://events.kommersant.ru/events/14-12-konferencziya-openran-russia-2021/?utm_source=glav&amp;utm_medium=banner&amp;utm_campaign=promogl1412"-->
<!--                class="spend__link link link_overlay slider-link">OpenRAN Russia 2021</a>-->
<!--            </h2>-->
<!--            <h3 class="spend__subheader">-->
<!--              <a-->
<!--                href="https://events.kommersant.ru/events/14-12-konferencziya-openran-russia-2021/?utm_source=glav&amp;utm_medium=banner&amp;utm_campaign=promogl1412"-->
<!--                class="spend__link slider-link">Первая в России международная конференция, посвященная открытой-->
<!--                архитектуре</a>-->
<!--            </h3>-->
<!--          </div>-->
<!--        </article>-->
<!--      </div>-->
      <div
        class="multimedia__next multimedia__nav_button multimedia__nav_button--next slider-nav_button slider-next hide_desktop">
        <a href="#" class="multimedia__nav_link link slider-link">
				<span class="vicon vicon--rarrow slider-nav_icon">
					<svg class="vicon__body">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
					</svg>
				</span>
          <span class="vh">Следующий слайд</span>
        </a>
      </div>
    </div>
  </div>

</template>

<script src="./SpendGallery.ts" lang="ts"></script>
<style src="./SpendGallery.scss" lang="scss" scoped></style>


