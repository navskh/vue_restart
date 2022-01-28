// main.js 는 기본적인 application의 플러그인, 구조도라 할 수 있다.

import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router, // 원래는 router: router , 축약문법
}).$mount('#app')
