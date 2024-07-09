<template>
    <div>
        {{ time }}
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const time = ref('')
const timer = ref('')

onMounted(() => {
    timer.value = setInterval(() => {
        time.value = new Date()
        console.log(time.value);
    }, 1000)
})
</script>

<style lang="scss" scoped></style>