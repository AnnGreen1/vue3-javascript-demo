<template>
    <el-input v-model="input" ref="inputRef" />
    <el-button @click="focusFun">使input获取焦点</el-button>
</template>
  
<script setup>
import { ref } from 'vue'
const input = ref('')
const inputRef = ref(null)

const focusFun = () => {
    console.log(inputRef);
    console.log(inputRef.value);
    inputRef.value.focus()
}
</script>