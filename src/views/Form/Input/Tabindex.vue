<template>
    <el-input v-model="input" tabindex="-5" placeholder="tabindex=-5" />
    <el-input v-model="input" tabindex="-4" placeholder="tabindex=-4" />
    <el-input v-model="input" tabindex="-3" placeholder="tabindex=-3" />
    <el-input v-model="input" tabindex="-2" placeholder="tabindex=-2" />
    <el-input v-model="input" tabindex="-1" placeholder="tabindex=-1" />
    <el-input v-model="input" tabindex="0" placeholder="tabindex=0" />
    <el-input v-model="input" tabindex="1" placeholder="tabindex=1" />
    <el-input v-model="input" tabindex="2" placeholder="tabindex=2" />
    <el-input v-model="input" tabindex="3" placeholder="tabindex=3" />
    <el-input v-model="input" tabindex="4" placeholder="tabindex=4" />
    <el-input v-model="input" tabindex="5" placeholder="tabindex=5" />
</template>
  
<script setup>
import { ref } from 'vue'
const input = ref('')
</script>