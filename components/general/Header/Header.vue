<template>
  <div>
    <HeaderNavbar @burger-clicked="toggleHideMenu" />
    <HeaderMenu :is-hidden="menuIsHidden" />
    <HeaderRegion />
  </div>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.scss" lang="scss" scoped></style>
