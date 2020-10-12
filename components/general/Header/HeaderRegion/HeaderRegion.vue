<template>
  <div class="regions">
    <div class="layout">
      <div class="main">
        <div class="regions__body">
          <ul class="regions__list">
            <li
              v-for="region in regions"
              :key="region.id"
              class="regions__item"
            >
              <nuxt-link
                to="/"
                class="regions__link"
              >
                {{ region }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./HeaderRegion.ts" lang="ts"></script>
<style src="./HeaderRegion.scss" lang="scss" scoped></style>
