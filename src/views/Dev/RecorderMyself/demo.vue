<template>
    <!--
        【前端】vue+recorder实现录音功能
        https://www.jianshu.com/p/f5637e838af0

        Vue.js实战——封装浏览器录音组件_6
        https://blog.csdn.net/dobuy/article/details/87348198
    -->
    <div class="record">
        <h1>{{ tipMsg }}</h1>
        <button @click="onStartVoice">开始</button>
        <button @click="onEndVoice">结束</button>
        <button @click="onPlayAudio">播放</button>
        <div class="record-play" v-show="isFinished">
            <h2>Current voice player is:</h2>
            <audio id="audioVoice" controls autoplay></audio>
        </div>
        <button @click="readBolb">读arraybuffer</button>

        <div id="result"></div>
    </div>
</template>


<script>
import './crypto-js.js'
import './enc-base64-min.js'
import { CryptoJSNew } from './HmacSHA1'
import './hmac-sha256'
import { hex_md5 } from './md5'
import Record from './record-sdk';
export default {
    data() {
        return {
            isVoice: false,
            isFinished: false,
            tipMsg: '录音',
            audio: "",
            recorder: new Record(),
            blobtemp: '',
            times: 0,
            ws: '',
            blobitem: ''
        }
    },
    mounted() {
        this.onStartVoice()

        let url = this.getWebSocketUrl()
        console.log(url);

        // 实例化 WebSocket
        this.ws = new WebSocket(url);




        // 当 WebSocket 创建成功时，触发 onopen 事件
        this.ws.onopen = () => {
            this.readBolb()
            console.log("onopen");
        };
        // 如果出现连接、处理、接收、发送数据失败的时候触发 onerror 事件
        this.ws.onerror = (e) => {
            this.ws.close();
            console.log("websocket出现连接、处理、接收、发送数据失败！");
        };
        // 当客户端收到服务端发送的关闭连接请求时，触发 onclose 事件
        this.ws.onclose = (e) => {
            console.log("websocket关闭连接！");
            console.log(e);
        };
        // 当客户端收到服务端发来的消息时，触发onmessage事件，参数e.data包含server传递过来的数据
        this.ws.onmessage = (e) => {
            console.log(e);
            this.renderResult(e.data);
            // setTimeout(() => {
            //     this.ws.close();
            //     initWebsocket();
            //     // 非最后一句话使用 next() 方法，最后一句话需要使用 last方法
            //     //   stream.last("很高兴见到你");
            // }, 5000);
        };

        this.ws.onclose = function (event) {
            console.log("WebSocket is closed now.");
        };



    },
    methods: {
        renderResult(resultData) {
            let resultText = "";
            let resultTextTemp = "";
            let jsonData = JSON.parse(resultData);
            if (jsonData.action == "started") {
                // 握手成功
                console.log("握手成功");
            } else if (jsonData.action == "result") {
                const data = JSON.parse(jsonData.data)
                console.log(data)
                // 转写结果
                let resultTextTemp = ""
                data.cn.st.rt.forEach((j) => {
                    j.ws.forEach((k) => {
                        k.cw.forEach((l) => {
                            resultTextTemp += l.w;
                        });
                    });
                });
                if (data.cn.st.type == 0) {
                    // 【最终】识别结果：
                    resultText += resultTextTemp;
                    resultTextTemp = ""
                }

                document.getElementById("result").innerText = resultText + resultTextTemp
            } else if (jsonData.action == "error") {
                // 连接发生错误
                console.log("出错了:", jsonData);
            }
        },
        getWebSocketUrl() {
            // 请求地址根据语种不同变化
            var url = "wss://rtasr.xfyun.cn/v1/ws";
            var appId = "ecfbe2ed";
            var secretKey = "cfc3fae4c550f81c3f3c27f9d89d09a3";
            var ts = Math.floor(new Date().getTime() / 1000);
            var signa = hex_md5(appId + ts);
            var signatureSha = CryptoJSNew.HmacSHA1(signa, secretKey);
            var signature = CryptoJS.enc.Base64.stringify(signatureSha);
            signature = encodeURIComponent(signature);
            return `${url}?appid=${appId}&ts=${ts}&signa=${signature}`;
        },
        readBolb() {
            // 从 blob 获取 arrayBuffer
            // const bufferPromise = await this.blobtemp.arrayBuffer();

            // 或
            setInterval(() => {

                this.recorder.getBlob({
                    success: res => {
                        let blobitem;
                        //此处可以获取音频源文件(res)，用于上传等操作
                        console.log('音频源文件', res)
                        res.arrayBuffer().then(buffer => {
                            // console.log(buffer);
                            blobitem = buffer.slice(this.times * 1028, (this.times + 1) * 1028)
                            // console.log(blobitem);
                            this.ws.send(blobitem)
                            this.times++
                        });
                    },
                    error: e => {
                        console.log(e);
                    }
                })



            }, 40)


        },
        // 开始录音
        onStartVoice() {
            this.onStopAudio()
            this.isFinished = false;
            this.recorder.startRecord({
                success: res => {
                    this.isVoice = true
                },
                error: e => {
                    this.isVoice = false
                    this.$toast(e)
                }
            });
        },

        // 结束录音
        onEndVoice() {
            this.isFinished = false;
            this.recorder.stopRecord({
                success: res => {
                    this.isVoice = false
                    //此处可以获取音频源文件(res)，用于上传等操作
                    console.log('音频源文件', res)
                    this.blobtemp = res
                },
                error: e => {
                    this.isVoice = false
                }
            });
        },

        // 播放录音
        onPlayAudio() {
            this.isVoice = false
            this.isFinished = true;
            this.audio = document.getElementById("audioVoice");
            this.recorder.play(this.audio);
        },

        // 停止播放录音
        onStopAudio() {
            this.recorder.clear(this.audio);
        }
    }
}
</script>