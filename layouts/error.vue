<template>
  <div class="container">
    <!--    <h1 class="envColor">-->
    <!--      Color of this text is injected directly from scssConfig.ts to nuxt.config-->
    <!--      with var $envColor-->
    <!--    </h1>-->
    <!--    <h1 class="platform_color">-->
    <!--      Color of this text is ci conditionally set by importing different scss-->
    <!--      files with var $test-->
    <!--    </h1>-->
    <!--    <Vicons />-->
    <!--    <Header />-->
    <div>
      <h1>Error</h1>
      <h2>
        <pre>{{ JSON.stringify(getErrorParsed, null, '\t') }}</pre>
      </h2>
      <h3><a href="/">На главную</a></h3>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {NuxtError} from "@nuxt/types";

@Component({})
export default class Error extends Vue {
  @Prop() error!: NuxtError;

  get getErrorParsed(){
    if (this.error) {
      let parsedMessage = this.error.message
      try {
        parsedMessage = JSON.parse(this.error!.message!)
      } catch {}
      return { ...this.error, ...{ message: parsedMessage } }
    } else {
      return {}
    }
  }

  mounted() {
    console.error(this.error)
    // console.log('this.$style',JSON.stringify(this.$style))
  }
}


</script>

<style scoped>
h1 {
  color: red;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

h1, h3 {
  text-align: center;
}

</style>
