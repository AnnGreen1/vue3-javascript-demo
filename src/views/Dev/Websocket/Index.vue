<template>
    <div>
        <button @click="send">send</button>
        <audio ref="audioEl" controls autoplay></audio>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const audioEl = ref();

async function checkCamera() {
    const navigator = window.navigator.mediaDevices;
    const devices = await navigator.enumerateDevices();
    if (devices) {
        const stream = await navigator.getUserMedia({
            audio: true,
        });
        console.log(stream);
        audioEl.value.srcObject = stream;
        send(stream)
    }
}



onMounted(() => {
    checkCamera();
});

const ws = new WebSocket('ws://localhost:8080')
function send(stream) {
    ws.send('send test...')
    ws.send(stream)
}
</script>

<style lang="scss" scoped></style>