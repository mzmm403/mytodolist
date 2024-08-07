<template>
    <input type="checkbox"  ref="inputRef" :class="['box-'+size,'box-'+shape]" @change="onChange"/>
</template>
<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        size:{
            type:String,
            default:"default"
        },
        shape:{
            type:String,
            default:"square"
        }
    })


    const inputRef = ref(null)
    const isChecked = function(){
        var state = inputRef.value.checked
        return state
    }

    defineExpose({
        isChecked
    })
</script>
<style scoped>
/* 复选框的大小 */
.box-default{
    zoom: 100%;
}

.box-large{
    zoom:   200%;
}

.box-square{
    border-radius: 0px;
}

.box-square{
    position: relative;
    width: 10px;
    height: 10px;
    appearance: none;
}

.box-square::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #d9d9d9;
    background: #515462;
    border-radius: 2px;
}

.box-square:checked::before{
    content: "\2713";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #767676;
    background: #767676;
    /* 对勾样式 */
    color: #fff;
    font-size: 8px;
    font-weight: bold;
    text-align: center;
    line-height: 10px;
}

.box-circular{
    position: relative;
    width: 15px;
    height: 15px;
    appearance: none;
}

.box-circular::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #d9d9d9;
    background: #5e6372;
    border-radius: 50%;
}

.box-circular:checked::before{
    content: "\2713";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #767676;
    background: #767676;
    /* 对勾样式 */
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    line-height: 15px;
}
</style>