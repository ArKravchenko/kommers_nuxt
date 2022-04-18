<template>
    <article class="dotd">
      <h4 class="dotd__tag">
        {{ digitOfTheDayData.content.plashka }}
      </h4>
      <div class="dotd__text">
        <h2 class="dotd__name">
          <a :href="digitOfTheDayData.content.href" class="link">
            {{ digitOfTheDayData.content.digit }}
          </a>
        </h2>
      </div>
      <h3 class="dotd__subtitle">
        <a :href="digitOfTheDayData.content.href" class="link link_overlay">
          {{ digitOfTheDayData.content.caption }}
        </a>
      </h3>
    </article>
</template>

<script src="./DigitOfTheDay.ts" lang="ts"></script>
<style src="./DigitOfTheDay.scss" lang="scss" scoped></style>

