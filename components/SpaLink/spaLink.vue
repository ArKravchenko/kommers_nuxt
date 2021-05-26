<template>
    <nuxt-link v-if="isSpa" :to="href" :isSpa="isSpa">
        <slot></slot>
    </nuxt-link>
    <a v-else :href="href" :isSpa="isSpa">
        <slot></slot>
    </a>
</template>

<script lang="ts" src="./spaLink.ts">
</script>
<style src="./spaLink.scss" lang="scss">
</style>
