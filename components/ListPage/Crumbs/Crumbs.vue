<template>

  <ul class="crumbs">
    <li class="crumbs__item">

      <template v-if="breadcrumb">
        <template v-if="getBreadcrumbHref">
          <a :href="getBreadcrumbHref" class="decor" v-if="getBreadcrumbText">
            {{getBreadcrumbText}}
          </a>
        </template>
        <template v-else-if="getBreadcrumbText">
          {{getBreadcrumbText}}
        </template>
      </template>

      <template v-else>
        <a  href="#" class="decor">Коммерсантъ Черноземье</a> / <span>Архив <span style="color: red" data-v-1210553a="">ЗАГЛУШКА</span></span>
      </template>
    </li>
  </ul>


</template>

<script src="./Crumbs.ts" lang="ts"></script>
<style src="./Crumbs.scss" lang="scss" scoped></style>

