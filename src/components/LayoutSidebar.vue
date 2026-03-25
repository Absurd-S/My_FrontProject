<script setup>
const emit = defineEmits(['create-new']);
const handleNewChat = () => {
    emit('create-new'); // 向外大喊一声："create-new" 触发啦！
}

</script>

<template>
    <div class="sidebar-container">

        <div class="sidebar-header">
            <button @click="handleNewChat" class="new-chat-btn">新建对话</button>
        </div>

        <div class="sidebar-list">
            <div class="history-item">对话记录 1</div>
            <div class="history-item">对话记录 2</div>
            <div class="history-item">对话记录 3</div>
            <div class="history-item">对话记录 4</div>
            <div class="history-item">对话记录 5</div>
            <div class="history-item">对话记录 6</div>
            <div class="history-item">对话记录 7</div>
            <div class="history-item">对话记录 8</div>
            <div class="history-item">对话记录 9</div>
            <div class="history-item">对话记录 10</div>
            <div class="history-item">对话记录 11</div>
            <div class="history-item">对话记录 12</div>
            <div class="history-item">对话记录 13</div>
            <div class="history-item">对话记录 14</div>
            <div class="history-item">对话记录 15</div>
            <div class="history-item">对话记录 16</div>
            <div class="history-item">对话记录 17</div>
            <div class="history-item">对话记录 18</div>
            <div class="history-item">对话记录 19</div>
            <div class="history-item">对话记录 20</div>
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

.history-item {
    padding: 15px 0;
    border-bottom: 1px dashed #b8b8b8;
}

</style>