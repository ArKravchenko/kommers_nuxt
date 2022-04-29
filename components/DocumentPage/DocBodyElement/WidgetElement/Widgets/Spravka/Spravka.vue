<template>

  <div :class="['incut incut__note',getSpravkaAlignClassName,{'incut__note--linked':getSpravkaHref}]">
    <h2 v-if="getSpravkaTitle" class="incut__note_name">
      <template v-for="(child ,i) in getSpravkaTitle">
        <template v-if="typeof child === 'string'">
          {{ child }}
        </template>
        <HtmlTagElement v-else :key="i" :html-tag-element="child"/>
      </template>
    </h2>
    <span style="color: red">
        Spravka has PARA inside
    </span>
    <!--      //TODO classes should be added as DocBodyElement prop-->
    <p class="incut__note_text" v-if="getSpravkaBodyElements">
      <DocBodyElement v-for="(child ,i) in getSpravkaBodyElements"
                      :key="i"
                      :doc-body-element="child"
      />
    </p>

    <p v-if="getSpravkaHref" class="incut__more">
      <a :href="getSpravkaHref" class="link">
        Смотреть
        <span class="vicon vicon--rarrow incut__arrow" aria-hidden="true">
            <svg class="vicon__body"><use xmlns:xlink="http://www.w3.org/1999/xlink"
                                          xlink:href="#vicon-rarrow"></use></svg>
          </span>
      </a>
    </p>
  </div>


</template>

<script src="./Spravka.ts" lang="ts"></script>
<!--<style src="./WidgetElement.scss" lang="scss"></style>-->


