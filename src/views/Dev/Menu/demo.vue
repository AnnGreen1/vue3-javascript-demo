<template>
    <div>
        <div class="squre" @contextmenu.prevent.native="openMenu(tag, $event)"></div>

        <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
            <li @click="closeOthersTags"><i class="el-icon-circle-close"></i> 关闭其他</li>
            <li @click="closeLeftTags"><i class="el-icon-back"></i> 关闭左侧</li>
            <li @click="closeRightTags"><i class="el-icon-right"></i> 关闭右侧</li>
            <li @click="closeAllTags()"><i class="el-icon-circle-close"></i> 全部关闭</li>
        </ul>
    </div>
</template>

<script>
/**
 * 封装组件
 * 1、实现右键和点击某个 handler
 * 2、实现 handler 和 contentmenu 的插槽
 * 3、实现位置的配置
 * 4、实现多层右键菜单
 * 5、关闭的方式
 * 6、快速全局使用
 * 7、触发方式
 * 8、实现递归配置菜单
 */
export default {

    data() {
        return {
            visible: false,
            top: 0,
            left: 0,
        }
    },

    watch: {
        visible(value) {
            console.log(value);
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        }
    },

    methods: {

        closeRightTags() {
            console.log("closeRightTags");
        },
        closeLeftTags() {
            console.log("closeLeftTags");
        },
        openMenu(tag, e) {
            const menuMinWidth = 105
            /**
             * @author: anngreens
             * Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置。
             */
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$el.offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX - offsetLeft + 15 // 15: margin right

            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }

            // this.top = e.clientY
            this.top = this.$el.getBoundingClientRect().top
            this.visible = true
            console.log(this.visible);
            console.log(`offsetLeft:${offsetLeft}`);
            console.log(`offsetWidth:${offsetWidth}`);
            console.log(`maxLeft:${maxLeft}`);
            console.log(`left:${left}`);
            console.log(`this.left:${this.left}`);
            console.log(`this.top:${this.top}`);
        },
        closeMenu() {
            console.log('closeMenu');
            this.visible = false
        },

    }
}
</script>



<style lang="scss" scoped>
.squre {
    width: 100px;
    height: 100px;
    background-color: pink;
}

//reset element css of el-icon-close
.tags-view-wrapper {
    .tags-view-item {
        .el-icon-close {
            width: 16px;
            height: 16px;
            vertical-align: 2px;
            border-radius: 50%;
            text-align: center;
            transition: all .3s cubic-bezier(.645, .045, .355, 1);
            transform-origin: 100% 50%;

            &:before {
                transform: scale(.6);
                display: inline-block;
                vertical-align: -3px;
            }

            &:hover {
                background-color: #b4bccc;
                color: #fff;
            }
        }
    }
}

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