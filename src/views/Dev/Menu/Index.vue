<template>
    <div>
        <ul v-show="visible" class="contextmenu">
            <li>菜单一</li>
            <li>菜单一</li>
            <li>菜单一</li>
            <li>菜单一</li>
            <li>菜单一</li>
        </ul>
        <div class="squre" @contextmenu.prevent.native="openMenu(tag, $event)"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            top: 0,
            left: 0,
        }
    },
    methods: {
        openMenu(tag, e) {


            const menuMinWidth = 105

            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$el.offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX - offsetLeft + 15 // 15: margin right
            console.log(`ruoyi-ui/src/layout/components/TagsView/Index.vue offsetLeft:${offsetLeft} offsetWidth:${offsetWidth} maxLeft:${maxLeft} left:${left}`);
            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }

            this.top = e.clientY
            this.visible = true
            this.selectedTag = tag


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