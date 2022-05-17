<template>

  <div v-if="error">{{error}}</div>
  <div v-else>
    <slot/>
  </div>

</template>

<script src="./ErrorBoundary.ts" lang="ts"></script>
<style src="./ErrorBoundary.scss" lang="scss" scoped></style>

