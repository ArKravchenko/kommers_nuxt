<template>
    <div>
<!--      <h1>{{text}}</h1>-->
      <Actualno :actualnoData="actualnoData"/>
      <!-- Cols is just the example component with action and getter-->
<!--      <Cols/>-->
      <nuxt-child/>
    </div>
</template>

<script src="./Kommersant.ts" lang="ts"></script>
<style src="./Kommersant.scss" lang="scss" scoped></style>
