<template>

  <section v-if="getOpinions" id="main" class="section">
    <h2 class="vh">Мнение</h2>
    <div class="grid">
      <template v-for="(opinion,index) in getOpinions">
        <div v-if="index % 2 === 0" class="grid-col grid-col-m">
          <OpinionSmall :opinion-data="opinion"/>
        </div>
        <div v-else-if="index % 2 === 1" class="grid-col grid-col-m2">
          <OpinionBig :opinion-data="opinion"/>
        </div>
      </template>
    </div>
  </section>

</template>

<script src="./Opinions.ts" lang="ts"></script>
<style src="./Opinions.scss" lang="scss" scoped></style>


