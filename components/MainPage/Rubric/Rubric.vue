<template>

    <section id="economy" class="section">
      {{Math.random()}} Rubric component cache
      <div class="section_header slided_title">
        <h3 class="section_name">
          <a :href="rubricData.href" class="link section_name__link slided_title__link">
            <span class="section_name__text slided_title__text">{{ rubricData.title }}</span>
            <span class="vicon vicon--rarrow section_header__nav slided_title__nav">
					<svg class="vicon__body">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
					</svg>
				</span>
          </a>
        </h3>
        <div class="section_header__list">
          <a :href="rubricData.href" class="section_header__more link">Вся рубрика</a>
        </div>
      </div>
      <div class="grid">
        <div class="grid-col grid-col-m">
          <article class="uho">
            <div class="uho__photo">
              <img class="uho__img"
                   v-lazy="cdnUrl+getFirst.img.src"
                   :src="$imgPlaceholder"
                   alt="">
              <noscript>
                <img class="uho__img"
                     :src="cdnUrl+getFirst.img.src"
                     :alt="getFirst.img.alt"
                >
              </noscript>
            </div>
            <div class="uho__text">
              <h2 class="title_20 uho__name m-title_24">
                <a :href="getFirst.href" class="uho__link uho__link--overlay">{{ getFirst.title }}</a>
              </h2>
              <h3 class="title_15 uho__subtitle m-title_20">
                <a :href="getFirst.href" class="uho__link">{{ getFirst.subtitle }}</a>
              </h3>
            </div>
          </article>
        </div>
        <div class="grid-col grid-col-xs2 grid">
          <article v-for="item in getRest"
            class="uho uho_small grid-col-xs uho_separated">
            <div class="uho__text">
              <h2 class="title_20 uho__name m-title_24">
                <a :href="item.href" class="uho__link uho__link--overlay">{{item.title}}</a>
              </h2>
              <h3 class="title_15 uho__subtitle m-title_20">
                <a :href="item.href" class="uho__link">{{item.subtitle}}</a>
              </h3>
            </div>
          </article>


        </div>
      </div>
    </section>

</template>

<script src="./Rubric.ts" lang="ts"></script>
<style src="./Rubric.scss" lang="scss" scoped></style>


