import Vue from 'vue'

export default () => {
  Vue.filter('toFixed2', function (value: number) {
    return value.toFixed(2);
  })
}
