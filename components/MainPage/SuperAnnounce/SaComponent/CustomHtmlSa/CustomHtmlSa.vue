<template>

  <div class="sa">
    <div class="sa__cover sa__cover--widget" v-if="getRawHtml">
      <LazyHydrate never>
        <div class="sa__custom" v-html="getRawHtml" ref="scripts">
          <!--          <div style="background: #004465;color: #fff;display: flex;align-items: center;justify-content: center;height: 250px;font-size: 3rem;">Кастомный виджет</div>-->
        </div>
      </LazyHydrate>
    </div>
    <div class="sa__chapter sa__chapter--widget" v-if="getDocs">
      <ul class="sa__list">
        <template v-for="(doc, index) in getDocs">
          <li class="sa__item" :key="index">
            <h4 class="sa__time sa__time--widget">
              <a :href="doc.href" class="link">{{ formatDate(doc.pubDate) }}</a>
            </h4>
            <h2 class="sa__subname sa__subname--widget">
              <a :href="doc.href" class="link link--overlay">
                {{doc.title}}
              </a>
            </h2>
          </li>

        </template>
        <li class="sa__item sa__item--more sa__item--story" v-if="customHtmlSaData.content.theme">
          <h2 class="sa__subname sa__subname--widget">
            <a :href="customHtmlSaData.content.theme.href" class="link">Весь сюжет</a>
          </h2>
        </li>
      </ul>
    </div>
  </div>

</template>

<script src="./CustomHtmlSa.ts" lang="ts"></script>
<style src="./CustomHtmlSa.scss" lang="scss" scoped></style>

