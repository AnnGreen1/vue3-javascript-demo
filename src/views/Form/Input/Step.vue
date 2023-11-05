<template>
    <el-input v-model="input" step="2" type="number" />
</template>
  
<script setup>
import { ref } from 'vue'
const input = ref('')
</script>