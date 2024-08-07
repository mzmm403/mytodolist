<template>
    <a @mouseenter.prevent="handleHover" @mouseleave="handleLeave" @click="close"><img :src="path"/></a>
</template>
<script setup>
    import { ref } from 'vue'
    const path = ref("./mac-close.svg")
    
    const handleHover = function(){
        path.value = "./mac-close-hover.svg"
    }
    const handleLeave = function(){
        path.value = "./mac-close.svg"
    }

</script>
<style scoped>
    a{
        display: block;
        width: 11px;
        height: 10px;
    }
    img{
        width: 100%;
        height: auto;
    }
</style>