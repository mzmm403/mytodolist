<template>
    <div class="container">
        <div class="task">
            <div class="btn">
                <slot name="btn"></slot>
            </div>
        </div>
        <div class="line-up"></div>
        <div class="context">
            <slot name="context"></slot>
        </div>
        <div class="line-down"></div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container{
    width: 480px;
    height: 320px;
    background: rgba(38, 41, 59, 0.8);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
}

.context{
    height: 208px;
    width: 480px;
    position: relative;
    left: 10px;
    top: 10px;
    overflow:auto;
    -webkit-app-region: no-drag;
}

::-webkit-scrollbar {
    display: none;
    -webkit-app-region: no-drag;
}

.line-down{
    background: #c8cad4;
    border-radius: 2px;
    height: 2px;
    width: 460px;
    position: relative;
    left: 10px;
    top: 20px;
    -webkit-app-region: no-drag;
}

.line-up{
    background: #c8cad4;
    border-radius: 2px;
    height: 2px;
    width: 460px;
    position: relative;
    left: 10px;
    -webkit-app-region: no-drag;
}

.footer{
    height: 80px;
    -webkit-app-region: no-drag;
}

.btn{
    width: 40px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    -webkit-app-region: no-drag;
}

.task{
    -webkit-app-region: drag;
}
</style>
