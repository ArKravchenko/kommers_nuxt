<template>


  <div>
    <DocSa v-if="saData.type === 'doc'" :doc-sa-data="saData"/>
    <ThemeSa v-else-if="saData.type === 'theme'" :theme-sa-data="saData" />
  </div>
<!--    <IssueSa/>-->

</template>

<script src="./SuperAnnounce.ts" lang="ts"></script>
<style src="./SuperAnnounce.scss" lang="scss" scoped></style>

