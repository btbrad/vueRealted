// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import i18n from '../i18n/i18n'

Vue.config.productionTip = false

// 封装dispatch 通知所有父元素
Vue.prototype.$dispatch = function (eventName, data) {
  // 向上传递, 一直不停地获取$parent
  let parent = this.$parent
  while (parent) {
    if (parent) {
      parent.$emit(eventName, data)
      parent = parent.$parent
    } else {
      break
    }
  }
}

/* eslint-disable */
function broadcast(eventName, data) {
  this.$children.forEach(child => {
    // 每一个子组件
    child.$emit(eventName, data)
    if (child.$children.length) {
      broadcast.call(child, eventName, data)
    }
  })
}
// 封装broadcast,通知所有的子元素
Vue.prototype.$broadcast = function(eventName, data) {
  // 递归通知所有子元素
  broadcast.call(this, eventName, data)
}

// 事件总线
Vue.prototype.$bus = new Vue()

console.log(i18n)

Vue.mixin({
  data() {
    return {
      lang: i18n.locale
    }
  }
})

// Vue.$i18n = i18n

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  i18n
})
