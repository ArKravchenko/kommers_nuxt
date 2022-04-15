// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'
import {Log} from "~/decorators/log.decorator";

// You can declare mixins as the same style as components.
@Component
export class Alert extends Vue {
  alert(){
    alert()
  }
  mounted(){
    console.log('Alert mixin')
  }
}

@Component
export class ConsoleLog extends Vue {
  @Log
  logthis(){
    console.log(this)
  }
  mounted(){
    console.log('ConsoleLog mixin')
  }
}
