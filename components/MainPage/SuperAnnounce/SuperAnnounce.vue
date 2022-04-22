<template>

  <div v-if="saData">
    {{Math.random()}} SuperAnnounce component cache
    <DocSa v-if="saData.type === 'doc'" :doc-sa-data="saData"/>
    <ThemeSa v-else-if="saData.type === 'theme'" :theme-sa-data="saData" />
    <IssueSa v-else-if="saData.type === 'issue'" :issue-sa-data="saData" />
    <CustomHtmlSa v-else-if="saData.type === 'customHtml'" :custom-html-sa-data="saData" />
  </div>

</template>

<script src="./SuperAnnounce.ts" lang="ts"></script>
<style src="./SuperAnnounce.scss" lang="scss" scoped></style>

