<template>
    <div>
        <button @click="stopRecording">停止录制</button>
    </div>
</template>

<script setup>
import { onBeforeMount } from "vue"
const socket = new WebSocket('ws://localhost:8080');
let mediaRecorder;

navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function (event) {
            // if (event.data.size > 0) {
                socket.send(event.data);
            // }
        };

        mediaRecorder.start();
    })
    .catch(function (err) {
        console.error('Error accessing media devices: ', err);
    });

// 添加断开WebSocket连接的逻辑
function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        if (socket.readyState === WebSocket.OPEN) {
            socket.close();
        }
    }
}

// 在组件销毁时调用停止录音函数
onBeforeMount(() => {
    stopRecording();
})
</script>

<style lang="scss" scoped></style>