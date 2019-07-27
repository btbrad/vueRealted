<!--
 * @Author: btbrad
 * @Date: 2019-06-02 22:28:17
 * @LastEditors: btbrad
 * @LastEditTime: 2019-06-27 21:55:52
 * @Description:
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld /> -->
    <!-- <TodoList /> -->
    <Child />
    <div style="color:red">
      {{msg}}
    </div>
    <button @click="broadcast">广播事件</button>
    <hr>
    <h2>{{$t('slogan')}}</h2>
    <button @click="switchlang">中/英</button>
    <button @click="$i18n.locale='cn'">中</button>
    <button @click="$i18n.locale='en'">英</button>
    <hr>
    <span>{{inputData}}</span>
    <k-input v-model="inputData"></k-input>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import TodoList from './components/TodoList'
import Child from './components/Child'
import KInput from './components/KInput'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TodoList,
    Child,
    KInput
  },
  provide: {
    name: '你好'
  },
  data () {
    return {
      msg: '',
      lang: 'cn',
      inputData: ''
    }
  },
  methods: {
    broadcast () {
      this.$broadcast('broadcast', '来自APP的广播消息')
    },
    switchlang () {
      // let lang = this.lang
      // console.log(lang)
      if (this.lang === 'cn') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'cn'
      }
    }
  },
  mounted () {
    this.$on('dispatch', (data) => {
      this.msg = data
    })
    this.$bus.$on('bus', (data) => {
      this.msg = data
    })
    console.log(this.$t)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
