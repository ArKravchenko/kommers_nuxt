<template>
  <div>
    <HeaderNavbar @burger-click="toggleMenuActive" />
    <HeaderMenu :is-active="menuIsActive" />
    <HeaderRegion />
  </div>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.scss" lang="scss" scoped></style>
