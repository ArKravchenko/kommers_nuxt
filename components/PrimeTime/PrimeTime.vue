<template>
  <section id="main" class="section">
    <div class="layout">
      <div class="main grid">
        <SectionHeader section-name="Главное" is-main />
        <div class="grid-col grid-col-m2">
          <Uho has-tag has-photo />
        </div>
        <div class="grid-col grid-col-m2 grid">
          <Uho :is-prime-time="uhoIsSmall" has-tag has-photo hide-photo />
          <Uho :is-prime-time="uhoIsSmall" has-tag has-photo hide-photo />
          <Uho :is-prime-time="uhoIsSmall" has-tag />
          <Uho :is-prime-time="uhoIsSmall" has-tag />
        </div>
        <div class="grid-col grid-col-m">
          <Opinion is-small />
        </div>
        <div class="grid-col grid-col-m2">
          <Opinion />
        </div>
        <div class="grid-col grid-col-m">
          <Opinion is-small />
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./PrimeTime.ts" lang="ts"></script>
<style src="./PrimeTime.scss" lang="scss"></style>
