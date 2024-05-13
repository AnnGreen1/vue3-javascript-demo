<template>
    <div ref="reference" @contextmenu.prevent.native="openMenu($event)">
        <slot name="reference"></slot>
    </div>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
        <li @click="closeOthersTags">关闭其他</li>
        <li @click="closeLeftTags">关闭左侧</li>
        <li @click="closeRightTags">关闭右侧</li>
        <li @click="closeAllTags()">全部关闭</li>
        <li v-for="(menu, index) in menuConfig" :key="index" @click="menu.clickHandler">
            <template v-if="menu?.child?.length == 0">
                {{ menu.content }}
            </template>
            <template v-else>
                <popover :menuConfig="menu.child">
                    <template #reference>
                        {{ menu.content }}
                    </template>
                </popover>
            </template>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'popover'
}
</script>

<script setup>
import { ref, watch } from 'vue'
const reference = ref('')
const left = ref('')
const top = ref('')
const visible = ref(false)
function openMenu(e) {
    const menuMinWidth = 105
    /**
     * @author: anngreens
     * Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置。
     */
    const offsetLeft = reference.value.getBoundingClientRect().left // container margin left
    const offsetWidth = reference.value.offsetWidth // container width
    const maxLeft = offsetWidth - menuMinWidth // left boundary
    const left2 = e.clientX - offsetLeft + 15 // 15: margin right

    if (left > maxLeft) {
        left.value = maxLeft
    } else {
        left.value = left2
    }

    // this.top = e.clientY
    top.value = reference.value.getBoundingClientRect().top
    visible.value = true
    console.log(visible.value);
    console.log(`offsetLeft:${offsetLeft}`);
    console.log(`offsetWidth:${offsetWidth}`);
    console.log(`maxLeft:${maxLeft}`);
    console.log(`left:${left}`);
    console.log(`this.left:${left.value}`);
    console.log(`this.top:${top.value}`);
}

function closeMenu() {
    console.log('closeMenu');
    visible.value = false
    console.log(visible.value);
}

watch(visible, function (value) {
    console.log(value);
    if (value) {
        document.body.addEventListener('click', closeMenu)
    } else {
        document.body.removeEventListener('click', closeMenu)
    }
})

const props = defineProps(['menuConfig'])
</script>

<style lang="scss" scoped>
.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;

        &:hover {
            background: #eee;
        }
    }
}
</style>