<template>
    <div>
        <popover :menuConfig="menuConfig">
            <template #reference>
                <div class="reference">
                    reference
                </div>
            </template>
        </popover>
    </div>
</template>

<script setup>
import popover from '@/components/Popover/Index.vue'

const menuConfig = [
    {
        // hasChild:true,
        content: '这是一些文本',
        contentRender: function () {

        },
        clickHandler: function () {
            console.log("clock handler");
        },
        child: [
            {
                // hasChild:true,
                content: '这是一些文本',
                contentRender: function () {

                },
                clickHandler: function () {
                    console.log("clock handler");
                }
            }
        ]
    },
    {
        // hasChild:true,
        content: '这是一些文本',
        contentRender: function () {

        },
        clickHandler: function () {
            console.log("clock handler");
        }
    },
    {
        // hasChild:true,
        content: '这是一些文本',
        contentRender: function () {

        },
        clickHandler: function () {
            console.log("clock handler");
        }
    },
    {
        // hasChild:true,
        content: '这是一些文本',
        contentRender: function () {

        },
        clickHandler: function () {
            console.log("clock handler");
        }
    }
]
</script>

<style lang="scss" scoped>
.reference {
    width: 100px;
    height: 100px;
    background-color: hotpink;
}
</style>