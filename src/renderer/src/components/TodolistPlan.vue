<template>
    <div class="plan">
        <div class="select">
            <slot name="select"></slot>
        </div>
        <div class="text">
            <slot name="text"></slot>
        </div>
        <div class="time">
            <slot name="time"></slot>
        </div>
        <div class="button">
            <slot name="button"></slot>
        </div>
    </div>
</template>
<script setup> 
</script>

<style scoped>
.plan{
    width: 460px;
    border-radius: 7px;
    background: #5e6372;
    color:#c9ced9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
}
.select{
    position: relative;
    left: 10px;
    width: 20px;
}
.button{
    position: relative;
    width: 35px;
    right: 15px;
}
.text{
    width: 150px;
}
.time{
    width: 130px;
}
</style>