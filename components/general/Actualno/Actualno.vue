<template>
  <div v-if="actualnoData" class="actual">
    <div class="layout">
      <div class="main">
        <div class="actual__body slider">
          <div class="actual__nav_button actual__nav_button--prev slider-prev">
            <a href="#" class="actual__nav_button_link slider-link link">
						<span class="vicon vicon--larrow">
							<svg class="vicon__body">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
							</svg>
						</span>
              <span class="vh">Предыдущая страница</span>
            </a>
          </div>
          <ul class="actual__list slider-canvas">
            <li class="actual__item slider-item">
              <ul id="actual-money" class="actual__money slider-actual-item">

                <template v-for="index in Object.keys(indices)">
                  <li v-if="!!actualnoData.rates && !!actualnoData.rates[index]"
                      :key="index"
                      class="actual__money_item">
                    <a :href="actualnoData.rates.href || '#'"
                       :class="['no_decor slider-link',getTrendClass(actualnoData.rates[index])]">
                      {{ indices[index] }} {{ actualnoData.rates[index].rate | toFixed2 }}
                    </a>
                  </li>
                </template>

              </ul>

              <template v-for="item in actualnoData.items">
                <a :key="item.title"
                   :href="item.href || '#'"
                   class="actual__link slider-link slider-actual-item"
                >
                  {{ item.title }}
                </a>
              </template>
            </li>
          </ul>
          <div class="actual__nav_button actual__nav_button--next slider-next">
            <a href="#" class="actual__nav_button_link slider-link link">
						<span class="vicon vicon--rarrow">
							<svg class="vicon__body">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vicon-rarrow"></use>
							</svg>
						</span>
              <span class="vh">Следующая страница</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script src="./Actualno.ts" lang="ts"></script>
<style src="./Actualno.scss" lang="scss" scoped></style>

