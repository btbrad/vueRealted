<!--
 * @Author: btbrad
 * @Date: 2019-06-03 00:50:00
 * @LastEditors: btbrad
 * @LastEditTime: 2019-06-05 23:54:57
 * @Description:
 -->
<template>
  <div>
    <div>GrandChild</div>
    <p>祖先元素提供的{{name}}</p>
    <button @click="dispatch">通知祖先元素</button>
    <div style="color:blue">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'GrandChild',
  // 注入祖先元素的数据
  inject: ['name'],
  data () {
    return {
      title: '孙子',
      msg: ''
    }
  },
  methods: {
    dispatch () {
      this.$dispatch('dispatch', '来自GrandChild的消息')
    }
  },
  mounted () {
    this.$on('broadcast', (data) => {
      this.msg = data
    })
    this.$bus.$on('bus', (data) => {
      this.msg = data
    })
  }
}
</script>

<style>
</style>
