<!--
 * @Author: btbrad
 * @Date: 2019-06-03 00:49:42
 * @LastEditors: btbrad
 * @LastEditTime: 2019-06-05 23:55:19
 * @Description:
 -->
<template>
  <div>
    <div>Child</div>
    <grand-child></grand-child>
    <button @click="eventBus">eventBus</button>
  </div>
</template>

<script>
import GrandChild from './GrandChild'
export default {
  name: 'Child',
  components: {
    GrandChild
  },
  methods: {
    eventBus () {
      this.$bus.$emit('bus', '来自事件总线的消息')
    }
  },
  mounted () {
    console.log('partent', this.$parent)
    console.log('children', this.$children)
  }
}
</script>

<style>
</style>
