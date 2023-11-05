<template>
    <el-input v-model="input" autofocus />
    <el-input v-model="input" />
</template>
  
<script setup>
import { ref } from 'vue'
const input = ref('')
</script>