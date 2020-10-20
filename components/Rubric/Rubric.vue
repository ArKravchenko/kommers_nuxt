<template>
  <section :id="rubricName" class="section">
    <SectionHeader :section-name="rubricName" />

    <div class="grid">
      <div class="grid-col grid-col-m">
        <Uho has-photo />
      </div>
      <div class="grid-col grid-col-xs2 grid">
        <Uho :is-rubric="uhoIsSmall" />
        <Uho :is-rubric="uhoIsSmall" />
        <Uho :is-rubric="uhoIsSmall" />
        <Uho :is-rubric="uhoIsSmall" />
      </div>
    </div>
  </section>
</template>

<script src="./Rubric.ts" lang="ts"></script>
<style src="./Rubric.scss" lang="scss" scoped></style>
