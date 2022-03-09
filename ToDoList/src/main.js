import Vue from 'vue'
import App from './App.vue'
import ToDo from './assets/ToDo.vue'


Vue.component('to-do',ToDo);



new Vue({
  el: '#app',
  render: h => h(App)
})
