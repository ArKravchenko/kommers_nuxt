<template>

  <div class="light_spot slider slider-lightspot" data-slider-auto-delay="99995000">
    <div class="slider-nav_button slider-prev light_spot__nav_button">
      <a class="slider-link link">
			<span class="vicon vicon--larrow slider-nav_icon" aria-hidden="true">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use></svg>
			</span>
        <span class="vh">Предыдущий слайд</span>
      </a>
    </div>
    <div class="slider-canvas light_spot__canvas">
      <template v-for="(item,index) in lightSpotData.data.items">
        <div class="slider-item light_spot__item"
             :key="index"
        >
          <BlockquoteOfTheDay v-if="item.type === 'quote'"
                              :blockquote-of-the-day-data="item"
          />
          <DigitOfTheDay v-else-if="item.type === 'digit'"
                         :digitOfTheDayData="item"
          />
          <GraphOfTheDay v-else-if="item.type === 'chart'"
                         :graph-of-the-day-data="item"
          />
          <PhotoOfTheDay v-else-if="item.type === 'photo'"
                         :photo-of-the-day-data="item"
          />
          <VideoOfTheDay v-else-if="item.type === 'video'"
                         :video-of-the-day-data="item"
          />
        </div>
      </template>
    </div>
    <div class="slider-nav_button slider-next light_spot__nav_button">
      <a class="slider-link link">
			<span class="vicon vicon--rarrow slider-nav_icon" aria-hidden="true">
				<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use></svg>
			</span>
        <span class="vh">Следующий слайд</span>
      </a>
    </div>
  </div>


</template>

<script src="./LightSpot.ts" lang="ts"></script>
<style src="./LightSpot.scss" lang="scss" scoped></style>

