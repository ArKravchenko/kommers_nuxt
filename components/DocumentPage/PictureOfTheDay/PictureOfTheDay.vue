<template>
  <section class="potd" v-if="pictureOfTheDayData.length">
    <div class="section_header slided_title section_header--link_to_all">
      <h3 class="section_name section_name--link_to_all">
        Картина дня
      </h3>
      <h4 v-if="regionId === 77" class="section_name section_name--link_to_all">
        <a href="/lenta?from=lenta_top" class="no_decor">Вся лента</a>
      </h4>
    </div>
    <!-- <h4 class="potd__title">Картина дня</h4> -->
    <article class="potd__item">
      <h1 class="potd__main_name">
        <a :href="pictureOfTheDayData[0].href" class="potd__link">
				<span class="vicon vicon--hot_news potd_main__lightning">
					<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xlink:href="#vicon-hot_news"></use></svg>
				</span>
          {{pictureOfTheDayData[0].title}}
        </a>
      </h1>
    </article>

    <article class="potd__item" v-for="(item,index) in pictureOfTheDayData.slice(1,5)">
      <h2 class="potd__name">
        <a :href="item.href" class="potd__link">{{ item.title }}</a>
      </h2>
    </article>
    <button v-if="!expanded"
            @click.prevent.stop="expandHandler"
            type="button"
            class="potd__button">
      Еще<span class="vicon vicon--rarrow potd__arrow" aria-hidden="true">
			<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use></svg>
		</span>
    </button>
    <div v-if="expanded" class="potd__addition">
      <article class="potd__item" v-for="(item,index) in pictureOfTheDayData.slice(6)">
        <h2 class="potd__name">
          <a :href="item.href" class="potd__link">{{ item.title }}</a>
        </h2>
      </article>
<!--      <a href="#" class="potd__news hide_desktop">Вся лента</a>-->
    </div>
  </section>

</template>

<script src="./PictureOfTheDay.ts" lang="ts"></script>
<style src="./PictureOfTheDay.scss" lang="scss" scoped></style>


