import TodolistBox from './TodolistBox.vue'
import TodolistButton from './TodolistButton.vue'
import TodolistContext from './TodolistContext.vue'
import TodolistSelectebox from './TodolistSelectebox.vue'
import TodolistPlan from './TodolistPlan.vue'
import TodolistBig from './TodolistBig.vue'
import TodolistSmall from './TodolistSmall.vue'
import TodolistClose from './TodolistClose.vue'

export default{
    install(app,options){
        // 全局注册组件
        app.component("TodolistBox",TodolistBox)
        app.component("TodolistButton",TodolistButton)
        app.component("TodolistContext",TodolistContext)
        app.component("TodolistSelectebox",TodolistSelectebox)
        app.component("TodolistPlan",TodolistPlan)
        app.component("TodolistBig",TodolistBig)
        app.component("TodolistSmall",TodolistSmall)
        app.component("TodolistClose",TodolistClose)
    }
}