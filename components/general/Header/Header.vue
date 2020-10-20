<template>
  <div>
    <HeaderNavbar
      :has-focus="iconHasFocus"
      @burger-click="toggleMenuActive"
      @regions-show="showRegionsActive"
      @regions-hide="hideRegionsActive"
    />
    <HeaderMenu :is-active="menuIsActive" @burger-click="toggleMenuActive" />
    <HeaderRegion
      :is-active="regionsIsActive"
      @regions-active="showRegionsActive"
      @regions-inactive="hideRegionsActive"
    />
  </div>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.scss" lang="scss" scoped></style>
