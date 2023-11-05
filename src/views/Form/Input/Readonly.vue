<template>
    <el-input v-model="input" readonly />
    <el-input v-model="input" disabled />
    <el-input v-model="input" :readonly="false" />
</template>
  
<script setup>
/**
 * readonly 和 disabled 都可以设置 input 的只读和禁用状态
 * 但是，readonly 优先级更高，当设置了 readonly 时，disabled 就失效了
 * 所以，我们可以通过 :readonly="false" 来覆盖 disabled 的设置
 * 或者，我们可以直接设置 disbaled 为 false 来覆盖 readonly 的设置
 * 这样，就能实现只读和禁用状态的切换了
 */
import { ref } from 'vue'
const input = ref('')
</script>