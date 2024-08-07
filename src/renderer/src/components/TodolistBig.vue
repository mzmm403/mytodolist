<template>
    <a @mouseenter.prevent="handleHover" @mouseleave="handleLeave"><img :src="path"/></a>
</template>
<script setup>
    import { ref } from 'vue'
    const path = ref("./mac_big.svg")
    
    const handleHover = function(){
        path.value = "./mac_bighover.svg"
    }
    const handleLeave = function(){
        path.value = "./mac_big.svg"
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