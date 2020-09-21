<template>
  <div>
    <Vicons />
    <Nuxt />
    <Footer />
    <Footer />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Vicons from '~/components/general/Vicons/Vicons.vue'
import Footer from '~/components/general/Footer/Footer.vue'

@Component({
  components: {
    Vicons,
    Footer,
  },
})
export default class Kommersant extends Vue {}
</script>
<style src="./default.scss" lang="scss"></style>
