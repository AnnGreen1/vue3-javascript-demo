<template>
    <div>
        <div style="height:200px;width:600px;overflow-y: scroll;" ref="el">
            {{ text }}
        </div>
        {{ x }}
        {{ y }}
        {{ arrivedState }}
        {{ directions }}
    </div>
</template>

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue'
import { useScroll } from '@vueuse/core'

const el = ref(null)

const { x, y, isScrolling, arrivedState, directions } = useScroll(el, { auto: 'auto' })


const text = ref('')
onMounted(() => {
    setInterval(() => {
        text.value += '文本文本文本文本文本文本文本文本'
    }, 1000)
})

watch(text, function (newVal, oldVal) {
    console.log(newVal);
    // if (!arrivedState.bottom) {
        el.value.scrollTop = el.value.scrollHeight;
        console.log("执行了");
    // }
})
</script>

<style lang="scss" scoped></style>