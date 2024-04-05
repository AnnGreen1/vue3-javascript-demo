<template>
    <div>
        <button @click="stopRecording">停止录制</button>
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount } from "vue"
let mediaRecorder;
let audioChunks = [];

onMounted(() => {
    // const socket = new WebSocket('ws://localhost:8080');
    // 创建MediaRecorder对象来录制音频


    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (event) => {
                // if (event.data.size > 0) {
                let data = event.data;
                audioChunks.push(data);
                // }
            };
            // 开始录音
            mediaRecorder.start(1000);

            mediaRecorder.onstop = function () {
                console.log('停止录制回调了..');
                send()
                // // 将音频数据转换为Blob对象
                // const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

                // // 创建WebSocket连接
                // const socket = new WebSocket('ws://localhost:8080');

                // socket.onopen = function () {
                //     // 发送音频数据给后端
                //     socket.send(audioBlob);
                // };

                // socket.onclose = function () {
                //     console.log('WebSocket connection closed');
                // };



                // // 在录音一定时间后停止录音
                // setTimeout(function () {
                //     mediaRecorder.stop();
                // }, 5000); // 5秒后停止录音
            };
        })
        .catch(function (err) {
            console.error('Error accessing microphone: ', err);
        });

})

// 添加断开WebSocket连接的逻辑
function stopRecording() {
    console.log(mediaRecorder.state);
    // if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    //     console.log('----');
    mediaRecorder.stop();
    //     if (socket.readyState === WebSocket.OPEN) {
    //         socket.close();
    //     }
    // }
}
function send() {
    // 将音频数据转换为Blob对象
    const audioBlob = new Blob(audioChunks);
    console.log(audioBlob);
    // 创建WebSocket连接
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = function () {
        console.log('ONOPEN...');
        console.log(audioBlob);
        // 发送音频数据给后端
        socket.send(audioBlob);
    };

    socket.onclose = function () {
        console.log('WebSocket connection closed');
    };
}
// 在组件销毁时调用停止录音函数
onBeforeMount(() => {
    // stopRecording();
})
</script>

<style lang="scss" scoped></style>