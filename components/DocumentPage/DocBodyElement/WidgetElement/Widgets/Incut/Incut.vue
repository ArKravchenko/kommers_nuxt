<template>


  <div v-if="incutWidgetData"
       :class="['incut',getIncutAlignClassName]">
    <!--      {{ JSON.stringify(incutWidgetData) }} -->
    <h2 v-if="getIncutTitle && getIncutAlign === 'center'"
        class="incut__wide_name">
      <a :href="getIncutHref">

        <template v-for="(child ,i) in getIncutTitle">
          <template v-if="typeof child === 'string'">
            {{ child }}
          </template>
          <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
        </template>

      </a>
    </h2>

    <div v-if="getIncutImg"
         :class="['incut__photo',{'incut__photo--wide': getIncutAlign === 'center'}]">
      <a :href="getIncutHref">
        <img class="incut__img"
             :src="$imgPlaceholder"
             :alt="getIncutImg.alt"
             v-lazy="getIncutImg.src"
        >
        <noscript>
          <img class="incut__img"
               :src="getIncutImg.src"
               :alt="getIncutImg.alt"
          >
        </noscript>
      </a>
    </div>

    <p v-if="getIncutText && getIncutAlign === 'center'" class="doc__text">
      <template v-for="(child ,i) in getIncutText">
        <template v-if="typeof child === 'string'">
          {{ child }}
        </template>
        <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
      </template>
    </p>

    <h2 v-if="getIncutTitle && getIncutAlign !== 'center'"
        class="incut__name">
      <a :href="getIncutHref">

        <template v-for="(child ,i) in getIncutTitle">
          <template v-if="typeof child === 'string'">
            {{ child }}
          </template>
          <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
        </template>

      </a>
    </h2>

    <p v-if="getIncutAlign === 'center'"
       :class="['incut__more',{'incut__more--wide': getIncutAlign === 'center'}]">
      <a :href="getIncutHref" class="link">
        Читать далее
        <span class="vicon vicon--rarrow incut__arrow incut__arrow--big" aria-hidden="true">
												<svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                      xlink:href="#vicon-rarrow"></use></svg>
          </span>
      </a>
    </p>

  </div>

</template>

<script src="./Incut.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


