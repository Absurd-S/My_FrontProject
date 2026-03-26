<script setup>
import { chatHistoryList, activeChatId } from '../store.js'

const handleNewChat = () => {
    activeChatId.value = null
}

// 删除对话
const deleteChat = (index, id) => {
    // 这里的 index 现在就是准确的 0, 1, 2, 3... 了
    chatHistoryList.value.splice(index, 1);
    
    // 如果删掉的是正在聊的，就回到欢迎页
    if (activeChatId.value === id) {
        activeChatId.value = null;
    }
}
</script>

<template>
    <div class="sidebar-container">

        <div class="sidebar-header">
            <button @click="handleNewChat" class="new-chat-btn">新建对话</button>
        </div>

        <div class="sidebar-list">

            <!-- 从对话记录列表里面渲染序列 -->
            <!-- 点击时渲染对应对话记录 -->
            <div class="history-item" v-for="(session, index) in chatHistoryList" :key="session.id" @click="activeChatId = session.id" :class="{ 'active-item': activeChatId === session.id }">
                <span class="title-text">{{ session.title }}</span>
                <span class="delete-btn" @click.stop="deleteChat(index, session.id)"><ion-icon name="trash-outline"></ion-icon></span>
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

/** 历史对话列表样式 */
/** 基础样式：准备好动画过渡 */
.history-item {
    padding: 12px 15px;
    margin-bottom: 10px;
    border-bottom: 1px dashed #ababab;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.1s ease; /* 关键：让所有的状态变化都有 0.3 秒的平滑过渡 */
}

/** 鼠标悬停时样式 */
.history-item:hover {
    background-color: #f0f4f9;
    transform: translateX(5px); /* 微微向右浮动，引导用户点击，手感极佳 */
}

/** 鼠标按下样式 */
.history-item:active {
    background: #ffffff;
}

/** 当前选中的高亮状态 */
.active-item {
    background-color: #e3f2fd; /* 给一个淡淡的主题色背景 */
    font-weight: bold;
    color: #1a73e8;
    /* 就算鼠标离开，选中的项目也保持稍微向右突出的状态 */
    transform: translateX(5px); 
}


/** 删除按钮样式 */
.history-item {
  /* 你的原有样式保持不变，新增一行相对定位，为了让删除按钮绝对定位 */
    position: relative; 
    display: flex;
    justify-content: space-between; /* 让标题和按钮分居左右 */
    align-items: center;
}

.delete-btn {
    opacity: 0; /* 默认完全透明（隐藏） */
    transition: opacity 0.2s ease;
    padding: 2px 5px;
    border-radius: 4px;
}

.delete-btn:hover {
    background-color: #f16767; /* 鼠标放在垃圾桶上时的危险色提示 */
}

/** 鼠标悬停时，让删除按钮显示 */
.history-item:hover .delete-btn {
    opacity: 1; 
}
</style>

