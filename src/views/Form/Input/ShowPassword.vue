<template>
    <el-input v-model="input" type="password" placeholder="Please input password" show-password />
    <el-input v-model="input" type="password" placeholder="Please input password" show-password="false" />
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>