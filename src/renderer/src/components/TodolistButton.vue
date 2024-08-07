<template>
    <button :class="['btn','btn-'+type,'btn-'+size]"><slot></slot></button>
</template>
<script setup>

    const props = defineProps({
        type:{
            type:String,
            default:"info"
        },
        size:{
            type:String,
            default:"large"
        }
    })

</script>
<style scoped>
    /* 按钮样式 */
    .btn{
        border:none;
        color:#fff;
        border-radius: 8px;
    }

    .btn-success{
        background:#4cb35e;
    }
    .btn-danger{
        background:#d12c2d; 
    }
    .btn-info{
        background:#aaadbd; 
    }
    .btn-large{
        padding:10px 20px;
    }
    .btn-small{
        padding: 3px 4px;
        font-size: 12px;
    }
</style>