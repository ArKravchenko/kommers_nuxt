<template>
  <div
    :class="[
      'section_header slided_title',
      {
        'section_header--main': isMain,
        'section_header--aside': isAside,
        'section_header--spend': isSpend,
      },
    ]"
  >
    <h3 class="section_name">
      <a href="#" class="link section_name__link slided_title__link">
        <span class="section_name__text slided_title__text">
          {{ sectionName }}
        </span>
        <span class="vicon vicon--rarrow section_header__nav slided_title__nav">
          <svg class="vicon__body">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#vicon-rarrow"
            ></use>
          </svg>
        </span>
      </a>
    </h3>
    <div
      v-if="!(isMain || isAside)"
      :class="[
        'section_header__list',
        { 'section_header__list--visible': isSpend },
      ]"
    >
      <template v-if="isSpend">
        <a
          v-for="subrubric in spendList"
          :key="subrubric.id"
          href="#"
          class="section_header__more link"
        >
          {{ subrubric }}
        </a>
      </template>
      <a v-else href="#" class="section_header__more link">Вся рубрика</a>
    </div>
  </div>
</template>

<script src="./SectionHeader.ts" lang="ts"></script>
<style src="./SectionHeader.scss" lang="scss"></style>
