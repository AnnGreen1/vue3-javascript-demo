<template>
    <div id="test-id" style="padding: 20px 0;">
        <div style="background: #000;width: 100px;height: 100px;margin: auto;"></div>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <input type="text">
    </div>
    <button @click="() => htmlToPDF('test-id', 'test pdf')">导出</button>
</template>

<script setup>
import { htmlToPDF } from '@/utils/print2'
</script>

<style scoped></style>