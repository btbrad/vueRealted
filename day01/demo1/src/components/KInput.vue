<!--
 * @Author: btbrad
 * @Date: 2019-06-27 21:22:44
 * @LastEditors: btbrad
 * @LastEditTime: 2019-06-27 21:59:20
 * @Description:
 -->
<template>
  <div>
    <input :type="type"
           :value="value"
           @input="changeValue">
  </div>
</template>

<script>
export default {
  name: 'KInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
</style>
