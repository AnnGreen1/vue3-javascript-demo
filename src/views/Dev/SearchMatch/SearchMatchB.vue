<script setup>
import { ref, watch, onMounted } from "vue";

const text = ref(
  "豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。"
);
const search = ref("");
const highlight = ref([]);
const editorRef = ref(null);
const wrapperRef = ref(null);
const handleSearch = () => {
  const len = search.value.length;
  const regExp = new RegExp(search.value, "g");
  const textNode = editorRef.value.firstChild;
  let result = null;
  while ((result = regExp.exec(text.value))) {
    const { index } = result;
    const range = document.createRange();
    range.setStart(textNode, index);
    range.setEnd(textNode, index + len);
    const rangeReact = range.getBoundingClientRect();
    highlight.value.push(rangeReact);
  }
};
</script>

<template>
  <div class="container">
    <div class="wrapper" ref="wrapperRef">
      <div class="editor" ref="editorRef" contenteditable>{{ text }}</div>
      <div class="highlight"></div>
    </div>
  </div>
  <input type="text" v-model="search" />
  <button @click="handleSearch">搜索</button>
</template>

<style scoped>
/* .container {
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  overflow: auto;
} */

.wrapper {
  position: relative;
}

.highlight {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>
