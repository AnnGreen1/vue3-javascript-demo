<template>
    <el-input v-model="input" @keyup.enter="enterFun" placeholder="Please input" />
    <!-- 可以通过input的值来改变el-input展示的内容，但是这个值是不可以通过输入内容改变的，只能通过input事件来改变-->
    <el-input :model-value="input" @keyup.enter="enterFun" placeholder="Please input" />
    <!-- 模仿v-model的功能，通过input事件来改变input的值-->
    <el-input :model-value="input" @input="inputing" placeholder="Please input" />
</template>
  
<script setup>
/**
 * v-model是双向绑定
 * :model-value是单向绑定，只能向组件传值，但是不能接收组件的值
 */
import { ref } from 'vue'
const input = ref('')

function enterFun() {
    console.log(input.value)
}

function inputing(e) {
    console.log(e);
    input.value = e;
}
</script>