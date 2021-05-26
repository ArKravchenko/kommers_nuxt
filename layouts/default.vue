<template>
  <div>
    <!--<h1 class="envColor">-->
      <!--Color of this text is injected directly from scssConfig.ts to nuxt.config-->
      <!--with var $envColor-->
    <!--</h1>-->
    <!--<h1 class="platform_color">-->
      <!--Color of this text is ci conditionally set by importing different scss-->
      <!--files with var $test-->
    <!--</h1>-->
    <Vicons />
    <Header />
    <Actual />


    <AsideNews style="z-index: 999"/>
    <BasementNews style="z-index: 999"/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script src="./default.ts" lang="ts"></script>
<style src="./default.scss" lang="scss"></style>
