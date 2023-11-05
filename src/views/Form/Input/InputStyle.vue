<template>
    <el-input v-model="input" :input-style="inputStyle" />
</template>
  
<script setup>
import { ref } from 'vue'
const input = ref('')

const inputStyle = {
    // width: '100%',
    // height: '30px',
    border: '1px solid #dcdfe6',
    borderRadius: '10px',
    padding: '0 10px',
    fontSize: '14px',
    // lineHeight: '30px',
    color: '#606266',
    // background: '#fff'
}
</script>