<template>
    <el-input v-model="input" resize="none" />
    <el-input v-model="input" resize="both" />
    <el-input v-model="input" resize="horizontal" />
    <el-input v-model="input" resize="vertical" />
</template>
  
<script setup>
/**
 * none：元素不提供用户可控的调整其尺寸的方法。
 * both：元素可以调整其尺寸，但仅在垂直方向上进行调整。
 * horizontal：元素可以调整其尺寸，但仅在水平方向上进行调整。
 * vertical：元素可以调整其尺寸，但仅在垂直方向上进行调整。元素显示可让用户调整其尺寸的机制，可沿水平和竖直方向调整尺寸。
 */
import { ref } from 'vue'
const input = ref('')
</script>