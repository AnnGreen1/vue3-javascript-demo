<template>
    <el-input v-model="input" label="'等价于原生 input aria-label 属性'" />
    <el-input v-model="input" />
</template>
  
<script setup>
/**
 * aria-label 属性用来给当前元素加上的标签描述，接受字符串作为参数。是用不可视的方式给元素加 label
 * aria-label 属性可以用在任何典型的 HTML 元素中，并不需要配合特定的 ARIA role 才能使用。
 */
import { ref } from 'vue'
const input = ref('')
</script>