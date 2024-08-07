<template>
    <input class="text" type="text" v-model="plan" :placeholder="tip" @focus="handleLoad" @blur="handleNoLoad"/>
</template>
<script setup>
    import { ref } from 'vue'
    const tip = ref("Please add plan here")
    const plan = ref("")

    defineExpose({
        plan
    })

    // 聚焦的时候提示消失
    const handleLoad = (e)=>{
        e.target.placeholder = ""
    }

    // 不聚焦的时候提示出现
    const handleNoLoad = (e) => {
        e.target.placeholder = tip.value
    }

</script>
<style scoped>
.text{
    background: none;
    border: 0;
    border-bottom:2px solid #c8cad4;
    padding: 5px;
    color: aliceblue;
}

input[type=text]:focus {
    outline: none;
    caret-color: #c8cad4;
}
</style>