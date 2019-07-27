<!--
 * @Author: btbrad
 * @Date: 2019-06-28 00:19:38
 * @LastEditors: btbrad
 * @LastEditTime: 2019-06-28 00:28:22
 * @Description:
 -->
<template>
  <div>
    <label>{{label}}</label>
    <slot></slot>
    <p>{{error}}</p>
  </div>
</template>

<script>
export default {
  name: 'KFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
