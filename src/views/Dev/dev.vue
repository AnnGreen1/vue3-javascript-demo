<template>
    <div>
        <div class="common-style">
            {{ dev }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const dev = ref('dev')
</script>