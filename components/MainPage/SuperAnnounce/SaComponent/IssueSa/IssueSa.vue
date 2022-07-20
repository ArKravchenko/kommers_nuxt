<template>

  <div class="sa">
    <div class="sa__cover">
		<span class="sa__photo">
			<img class="sa__img"
           :data-src="issueSaData.content.img.src"
           :src="$imgPlaceholder"
           :alt="issueSaData.content.img.alt"
           v-lazytest
      >
      <!--      <component v-if="$isServer" is="noscript">-->
      <!--          <img class="sa__img"-->
      <!--               :src="cdnUrl+themeSaData.content.img.src"-->
      <!--               :alt="themeSaData.content.img.alt"-->
      <!--          >-->
      <!--        </component>-->
		</span>
      <div class="sa__content">
        <p class="sa__tag hide_desktop"><a :href="issueSaData.content.issue.href"
                                           class="link">{{ issueSaData.content.plashka }}</a></p>
        <div class="sa__text sa__text--story">
          <h2 class="sa__name"><a :href="issueSaData.content.issue.href"
                                  class="link link_overlay">{{ issueSaData.content.issue.title }}</a></h2>
          <h3 class="sa__subtitle sa__subtitle--story"><a :href="issueSaData.content.issue.href"
                                                          class="link">{{ issueSaData.content.issue.subtitle }}</a>
          </h3>
        </div>
      </div>
    </div>
    <div class="sa__chapter">
      <p class="sa__tag hide_mobile"><a :href="issueSaData.content.issue.href"
                                        class="link">{{ issueSaData.content.plashka }}</a></p>
      <ul class="sa__list">
        <li class="sa__item" v-for="(doc,index) in issueSaData.content.docsList">
          <p class="sa__time"><a :href="doc.href" class="link">{{ formatDate(doc.pubDate) }}</a></p>
          <h2 class="sa__subname"><a :href="doc.href" class="link link_overlay">{{ doc.title }}</a></h2>
        </li>

        <li class="sa__item sa__item--more sa__item--story">
          <h2 class="sa__subname sa__more"><a :href="issueSaData.content.issue.href" class="link">Весь номер</a></h2>
        </li>
      </ul>
    </div>
  </div>

</template>

<script src="./IssueSa.ts" lang="ts"></script>
<style src="./IssueSa.scss" lang="scss" scoped></style>

