<script setup>
import { chatHistoryList, activeChatId } from '../store.js'

const handleNewChat = () => {
    activeChatId.value = null
}

// 对话数据历史记录

</script>

<template>
    <div class="sidebar-container">

        <div class="sidebar-header">
            <button @click="handleNewChat" class="new-chat-btn">新建对话</button>
        </div>

        <div class="sidebar-list">

            <!-- 从对话记录列表里面渲染序列 -->
            <!-- 点击时渲染对应对话记录 -->
            <div class="history-item" v-for="session in chatHistoryList" :key="session.id" @click="activeChatId = session.id" :class="{ 'active-item': activeChatId === session.id }">
                {{ session.title }}
            </div>
        </div>

        <div class="sidebar-footer">
            <span>账户信息</span>
        </div>


    </div>
</template>

<style scoped>
.sidebar-container {
    display: flex;
    flex-direction: column;
    height: 100%;

}

.sidebar-header {
    padding: 15px;
    display: flex;
    justify-content: flex-end;
}

.sidebar-footer {
    padding: 15px;

}

.sidebar-list {
    flex: 1;
    overflow-y: auto;
    padding: 0 15px;
}

/** 新建对话按钮样式 */
/** 样式参考自https://neumorphism.io */
.new-chat-btn {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border: 0 solid transparent;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 1px 4px 1px rgb(196, 196, 196);
    transition: all 0.2s ease; 
}

/** 新建对话按钮鼠标悬停样式 */
.new-chat-btn:hover {
    background: #ffffff;
    box-shadow: 0 3px 5px 3px rgb(196, 196, 196);
    transform: translateY(-0.2px);
}

/** 新建对话按钮鼠标按下样式 */
.new-chat-btn:active {
    background: #ffffff;
    box-shadow: inset 0 3px 5px 3px rgb(196, 196, 196);
}


/* 基础样式：准备好动画过渡 */
.history-item {
    padding: 12px 15px;
    margin-bottom: 10px;
    border-bottom: 1px dashed #ababab;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.1s ease; /* 关键：让所有的状态变化都有 0.3 秒的平滑过渡 */
}

/* 状态 1：鼠标悬停时 (Hover) */
.history-item:hover {
    background-color: #f0f4f9;
    transform: translateX(5px); /* 微微向右浮动，引导用户点击，手感极佳 */
}

/* 状态 2：鼠标按下时 (Active) */
.history-item:active {
    background: #ffffff;
}

/* 状态 3：当前选中的高亮状态 */
.active-item {
    background-color: #e3f2fd; /* 给一个淡淡的主题色背景 */
    font-weight: bold;
    color: #1a73e8;
    /* 就算鼠标离开，选中的项目也保持稍微向右突出的状态 */
    transform: translateX(5px); 
}

</style>