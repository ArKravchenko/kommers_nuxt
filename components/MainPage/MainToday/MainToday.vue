<template>

  <section id="main" class="section">
    <div class="main grid">
      <div class="section_header section_header--main slided_title">
        <h3 class="section_name">
          <a href="#" class="link section_name__link slided_title__link">
            <span class="section_name__text slided_title__text">Главное</span>
            <span href="#" class="vicon vicon--rarrow section_header__nav slided_title__nav">
						<svg class="vicon__body">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
						</svg>
					</span>
          </a>
        </h3>
      </div>
      <div class="grid-col grid-col-m2">
        <!--          <% include flag_nomera.html %>-->
        <template>
          <article class="uho uho_big">
            <div class="uho__photo">
              <!-- TODO make srcset-->
              <img class="uho__img"
                   :src="cdnUrl+getFlag.img.src"
                   :alt="getFlag.img.alt"/>
            </div>
            <div class="uho__text">
              <h4 class="title_12 uho__tag uho__tag--main">{{ getFlag.tag }}</h4>
              <h2 class="title_28 uho__name m-title_24">
                <a :href="getFlag.href" class="link_overlay_wide link">{{ getFlag.title }}</a>
              </h2>
              <h3 class="title_15 uho__subtitle m-title_20">
                <a :href="getFlag.href" class="link">{{ getFlag.subtitle }}</a>
              </h3>
            </div>
          </article>
        </template>
      </div>
      <div class="grid-col grid-col-m2">
        <!--          <% include kartina_nomera_docs.html %>-->
        <template>
          <div class="grid">
            <template v-for="(item,index) in getRestDocs">
              <article :class="['uho uho_small grid-col grid-col-m',{'uho_separated':index<2}]">
                <div class="uho__photo hide_mobile" v-if="index<2">
                  <img class="uho__img"
                       :src="cdnUrl+item.img.src"
                       :alt="item.img.alt"/>
                </div>
                <div class="uho__text">
                  <h4 class="title_12 uho__tag">{{ item.tag }}</h4>
                  <h2 class="title_20 uho__name m-title_24">
                    <a :href="item.href" class="link_overlay_wide link">{{ item.title }}</a>
                  </h2>
                  <h3 class="title_15 uho__subtitle m-title_20">
                    <a :href="item.href" class="link">
                      {{ item.subtitle }}
                    </a>
                  </h3>
                </div>
              </article>
            </template>

            <!--              <article class="uho uho_small uho_separated grid-col grid-col-m">-->
            <!--                <div class="uho__photo hide_mobile">-->
            <!--                  <img class="uho__img"-->
            <!--                       src="https://im.kommersant.ru/Issues.photo/DAILY/2019/231/KMO_162543_16517_2_t218_223425.jpg"-->
            <!--                       alt="">-->
            <!--                </div>-->
            <!--                <div class="uho__text">-->
            <!--                  <h4 class="title_12 uho__tag">Рубрика</h4>-->
            <!--                  <h2 class="title_20 uho__name m-title_24">-->
            <!--                    <a href="#" class="uho__link uho__link&#45;&#45;overlay">Бориса на царство</a>-->
            <!--                  </h2>-->
            <!--                  <h3 class="title_15 uho__subtitle m-title_20">-->
            <!--                    <a href="#" class="uho__link">Британский премьер Борис Джонсон получит «Брексит», но может потерять-->
            <!--                      страну</a>-->
            <!--                  </h3>-->
            <!--                </div>-->
            <!--              </article>-->
            <!--              <article class="uho uho_small uho_separated grid-col grid-col-m">-->
            <!--                <div class="uho__photo hide_mobile">-->
            <!--                  <img class="uho__img"-->
            <!--                       src="https://im.kommersant.ru/Issues.photo/DAILY/2019/231/KMO_111307_28069_1_t218_011458.jpg"-->
            <!--                       alt="">-->
            <!--                </div>-->
            <!--                <div class="uho__text">-->
            <!--                  <h4 class="title_12 uho__tag">Рубрика</h4>-->
            <!--                  <h2 class="title_20 uho__name m-title_24">-->
            <!--                    <a href="#" class="uho__link uho__link&#45;&#45;overlay">Армейцы обрели государственность</a>-->
            <!--                  </h2>-->
            <!--                  <h3 class="title_15 uho__subtitle m-title_20">-->
            <!--                    <a href="#" class="uho__link">Госкорпорация ВЭБ.РФ станет владельцем более 75% акций ФК</a>-->
            <!--                  </h3>-->
            <!--                </div>-->
            <!--              </article>-->
            <!--              <article class="uho uho_small grid-col grid-col-m">-->
            <!--                <div class="uho__text">-->
            <!--                  <h4 class="title_12 uho__tag">Рубрика</h4>-->
            <!--                  <h2 class="title_20 uho__name m-title_24">-->
            <!--                    <a href="#" class="uho__link uho__link&#45;&#45;overlay">Заграница помогла рублю</a>-->
            <!--                  </h2>-->
            <!--                  <h3 class="title_15 uho__subtitle m-title_20">-->
            <!--                    <a href="#" class="uho__link">Нерезиденты верят в российскую валюту</a>-->
            <!--                  </h3>-->
            <!--                </div>-->
            <!--              </article>-->
            <!--              <article class="uho uho_small grid-col grid-col-m">-->
            <!--                <div class="uho__text">-->
            <!--                  <h4 class="title_12 uho__tag">Рубрика</h4>-->
            <!--                  <h2 class="title_20 uho__name m-title_24">-->
            <!--                    <a href="#" class="uho__link uho__link&#45;&#45;overlay">Дорогие дома растеряли спрос</a>-->
            <!--                  </h2>-->
            <!--                  <h3 class="title_15 uho__subtitle m-title_20">-->
            <!--                    <a href="#" class="uho__link">Их начали снимать с продажи</a>-->
            <!--                  </h3>-->
            <!--                </div>-->
            <!--              </article>-->
          </div>
        </template>
      </div>
    </div>
  </section>

</template>

<script src="./MainToday.ts" lang="ts"></script>
<style src="./MainToday.scss" lang="scss" scoped></style>


