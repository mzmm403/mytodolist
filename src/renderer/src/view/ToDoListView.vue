<template>
    <todolist-box id="todolist">
        <template #btn>
            <todolist-close class="close-btn" @click="closePage"></todolist-close>
            <todolist-small class="small-btn" @click="smallPage"></todolist-small>
            <todolist-big class="big-btn" @click="bigPage"></todolist-big>
        </template>
        <template #context>
            <todolist-plan class="plan" v-for="(object, index) in planArr" :key="index" v-show="object.text">
                <template #select>
                    <todolist-selectebox 
                        :ref="el => itemRefs[index] = el" 
                        shape="circular" 
                        :flag="flag" 
                        :checked="object.checked" 
                        @change="ChangeColor(index)"
                    ></todolist-selectebox>
                </template>
                <template #text>{{index+1}}.{{object.text}}</template>
                <template #time>{{ object.time }}</template>
                <template #button>
                    <todolist-button 
                        :type="object.checked ? 'danger' : 'info'" 
                        size="small" 
                        :disabled="!object.checked" 
                        @click="removeItem(index)"
                    >
                        删除
                    </todolist-button>
                </template>
            </todolist-plan>
        </template>
        <template #footer>
            <todolist-selectebox 
                class="checkbox" 
                size="large" 
                @change="ChangeColorAll" 
                :checked="isAllChecked" 
                ref="allCheckboxRef"
            ></todolist-selectebox>
            <todolist-context class="add-input" ref="inputRef"></todolist-context>
            <todolist-button class="add-btn" type="success" @click="chanleAdd">添加</todolist-button>
            <todolist-button class="delete-btn" :type="inputype" @click="chanleDeleteAll">删除</todolist-button>
        </template>
    </todolist-box>
</template>

<script setup>
import { ref, watch } from 'vue';

// 数据状态
const planArr = ref([]);
const inputRef = ref(null);
const inputype = ref("info");
const flag = ref(0);
const itemRefs = ref([]); // 修改为响应式数组
const allCheckboxRef = ref(null);
const isAllChecked = ref(false);

// 格式化日期
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 修正月份，从0开始
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}`;
}

// 添加任务
const chanleAdd = () => {
    const text = inputRef.value.plan;
    const now = new Date();
    const time = formatDate(now);
    if (text !== '') {
        planArr.value.push({ text, time, checked: false });
    }
    inputRef.value.plan = "";
}

// 更新状态
const ChangeColor = (index) => {
    planArr.value[index].checked = !planArr.value[index].checked;
    inputype.value = planArr.value.some(item => item.checked) ? "danger" : "info";
    updateAllCheckboxState();
}

// 删除指定任务
const removeItem = (index) => {
    planArr.value.splice(index, 1);
    inputype.value = planArr.value.some(item => item.checked) ? "danger" : "info";
    updateAllCheckboxState();
}

// 删除选中的任务
const chanleDeleteAll = () => {
    planArr.value = planArr.value.filter(item => !item.checked);
    isAllChecked.value = false;
    inputype.value = "info";
}

// 全选或全不选
const ChangeColorAll = (e) => {
    const checked = e.target.checked;
    planArr.value.forEach(item => {
        item.checked = checked;
    });
    inputype.value = checked ? "danger" : "info";
}

// 更新全选checkbox的状态
const updateAllCheckboxState = () => {
    isAllChecked.value = planArr.value.length > 0 && planArr.value.every(item => item.checked);
}

// 监听planArr的变化来更新全选checkbox的状态
watch(planArr, updateAllCheckboxState, { deep: true });

// 关闭窗口
const closePage = () => {
    electron.ipcRenderer.invoke('close')
}
// 缩小窗口
const smallPage = () => {
    electron.ipcRenderer.invoke('small')
}
// 放大窗口
const bigPage = () => {
    var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
    if (isFull) {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
        document.getElementById("todolist").style.zoom = 1
    } else {
        let element = document.documentElement
        if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen()
        }
        document.getElementById("todolist").style.zoom = 2.6
    }
}
</script>

<style scoped>
.add-btn {
    position: relative;
    top: 28px;
    left: 205px;
}
.delete-btn {
    position: relative;
    top: 28px;
    left: 55px;
}
.add-input {
    position: relative;
    left: 90px;
    top: 25px;
}
.checkbox {
    position: relative;
    top: 16px;
    left: 8px;
}
.plan {
    margin-bottom: 10px;
}
</style>
