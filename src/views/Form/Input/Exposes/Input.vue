<template>
    <el-input v-model="input" ref="inputRef" />
    <el-button @click="inputFun">获取到Input HTML 元素</el-button>
</template>
  
<script setup>
import { ref } from 'vue'
const input = ref('')
const inputRef = ref(null)

const inputFun = () => {
    console.log(inputRef);
    console.log(inputRef.value);
    console.log(inputRef.value.input);
}
</script>