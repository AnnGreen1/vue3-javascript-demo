<template>
    <el-input v-model="input" size="large" />
    <el-input v-model="input" size="default" />
    <el-input v-model="input" size="small" />
</template>
  
<script setup> 
import { ref } from 'vue'
const input = ref('')
</script>