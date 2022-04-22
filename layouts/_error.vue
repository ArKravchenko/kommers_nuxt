<template>
  <div style="min-height: 100vh; display: flex;flex-direction: column; justify-content: space-between">
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
        <pre>{{JSON.stringify(error, null,'\t')}}</pre>
      </h2>

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component({

})
export default class Error extends Vue {
  @Prop() error: any;

  mounted(){
    console.error(this.error)
    // console.log('this.$style',JSON.stringify(this.$style))
  }
}


</script>

<style scoped>
  pre{
    color: red;
  }
</style>
