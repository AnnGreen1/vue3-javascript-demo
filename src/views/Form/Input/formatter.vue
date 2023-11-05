<template>
    <el-input v-model="input" placeholder="Please input" :formatter="formatterFun" :parser="parserFun" @input="log" />
</template>
  
<script setup>
/**
 * formatter 指定输入值的格式。(只有当 type 是"text"时才能工作)
 * 对 v-model 绑定的值进行格式化，在输入框展示之前进行格式化。
 * 该方法的第一个参数是输入框的值，第二个参数是输入框的事件对象。
 * 该方法的返回值将会被显示在输入框中。
 */
import { ref } from 'vue'
const input = ref('')
const formatterFun = (value) => {
    console.log(value);
    return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const parserFun = (value) => {
    console.log(value);
    return value.replace(/\$\s?|(,*)/g, '')
}
const log = () => {
    console.log(input)
    console.log(input.value)
}
</script>