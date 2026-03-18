<script setup>

// 引入响应式数据盒子
import {ref} from 'vue';

// 定义响应式变量
const userInput = ref('')

// 定义响应式消息列表（算数组吧）
const messageList = ref([])

// 引入nextTick函数，等待DOM更新完成后执行滚动操作
// https://cn.vuejs.org/api/general.html#nexttick
import { nextTick } from 'vue';

const scrollBottom = ref(null);

// 箭头函数
const function_name = () => {
    // 函数体
}

const isGenerating = ref(false);  // 定义一个状态锁，在生成消息时设置为true，防止重复点击发送按钮。默认为false

// 发送消息的函数，模仿真实聊天
const sendMessage = async () => {

    // 如果正在生成消息，直接返回，防止重复点击发送按钮
    if (isGenerating.value) return;  

    // 检查输入框是否为空
    if (userInput.value.trim() === '') return;

    // 如果输入框不为空，则发送消息，并且设置状态锁为true，表示正在生成消息
    isGenerating.value = true

    // 给列表追加数据，就是输入框里面的内容
    messageList.value.push({
        id: Date.now(),  // 以时间戳为唯一ID
        role: 'user',
        content: userInput.value
    })

    userInput.value = '';  // 清空输入框


    await nextTick();  // 等待 DOM 更新完成

    // 滚动到底部
    if (scrollBottom.value) {
        scrollBottom.value.scrollTop = scrollBottom.value.scrollHeight
    }

    


    // 定义一个间隔回复函数，来实现ai回复时的打字机效果。

    // 空消息列表
    const currentAiReply = {
        id: Date.now(),
        role: 'ai',
        content: ""
    };

    // 把这个空回复添加到消息列表中，这样就有一个空的AI回复框，貌似ai在思考的感觉
    messageList.value.push(currentAiReply);

    // 模拟一个ai回复内容
    const aiReply = '你好！很高兴见到你！😊我是DeepSeek，随时准备帮助你解答问题、提供建议，或者只是陪你聊聊天。无论你有什么需求——学习、工作、生活，还是单纯想找个人说说话，我都在这里！今天有什么我可以帮你的吗？';
    
    // 模拟打字机效果，逐字更新AI回复内容
    let currentContent = "";  // 定义一个变量来存储当前AI回复的内容
    let index = 0;  // 索引变量

    // 定义一个定时器，每隔50ms更新一个字符
    const timer = setInterval(async() => {
        // 每次更新消息列表，追加当前的AI回复内容，这样就能实现逐字显示的效果

        if (index < aiReply.length) {
            const lastIndex = messageList.value.length - 1;  // 获取消息列表中最后一个元素的索引，也就是当前AI回复的索引
            messageList.value[lastIndex].content += aiReply[index];  // 将当前字符添加到内容中
            index++;  // 索引递增

            // 等待 DOM 更新完成
            await nextTick();  
            // 滚动到底部
            if (scrollBottom.value) {
                scrollBottom.value.scrollTop = scrollBottom.value.scrollHeight;
            }
        } else {
            clearInterval(timer);  // 回复完成后，清除定时器
            isGenerating.value = false;  // 回复完成后，重置状态锁，允许发送下一条消息
        }
    },60)  // 每隔60ms更新一个字符
}
//=====================还有问题，为什么自动回复消息后不会滚动？================================
</script>


<template>
    <div class="main-container">

        <!-- 默认欢迎界面-->
        <!--这里要用到条件渲染 v-if和v-else-->
        <!-- 当消息列表为空时，显示欢迎界面 -->
        <div class="welcomeBox" v-if="messageList.length === 0">
            <ion-icon name="happy-outline" size="large"></ion-icon>
            <h2>今天有什么可以帮到你？</h2>
        </div>

        <!-- 当消息列表不为空时，显示聊天界面 -->


        <div class="chat-main" ref="scrollBottom" v-else>

            <div class="chat-header">
                <h3>新对话-DeepSeek</h3>
            </div>


            <div v-for="msg in messageList" :key="msg.id" :class="msg.role === 'user' ? 'message-user' : 'message-ai'">{{ msg.content }}</div>
            <!-- v-for列表渲染 循环遍历 messageList 数组，并且根据消息role的不同匹配相应的类名，进而匹配不同的样式 -->

        </div>

        <div class="chat-input">
            <div class="input-area">
                <textarea @keyup.enter.prevent="sendMessage" v-model="userInput" class="input-text" placeholder="给 DeepSeek 发送信息"></textarea>
                <!-- 绑定回车事件，并且增加 v-model双向数据绑定 -->
                <button @click="sendMessage" class="send-btn" :disabled="isGenerating">{{ isGenerating ? 'AI回复中...' : '发送' }}</button>
                <!-- 绑定点击事件，并且增加响应式数据，根据状态锁的值来决定按钮的文字和样式 -->
            </div>
        </div>

    </div>

</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.chat-header {
    padding: 15px 20px;
    text-align: center;
}

.chat-main {
    flex: 1;
    padding: 20px ;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
}

.message-user {
    align-self: flex-end;
    background-color: #cbe4fc;
    padding: 10px 15px;
    border-radius: 20px;
    max-width: 70%;
}

.message-ai {
    align-self: flex-start;
    background-color: #d1d1d1;
    padding: 10px 15px;
    border-radius: 20px;
    max-width: 70%;
}

/** 输入框样式 */
/** 样式参考自https://neumorphism.io */
.chat-input {
    height: 15%;
    margin: 30px  40px ;
    padding: 20px;
    border-radius: 35px;
    background: #ffffff;
    box-shadow: 15px 15px 45px #bebebe,
                -8px -8px 24px #ffffff;
}

.input-area {
    display: flex;
    align-items: flex-end;
    gap: 10px;
}

.input-text {
    flex: 1;
    border: none;       /** 去掉文本框的边框 */
    outline: none;    /** 去掉文本框的聚焦边框 */
    resize: none;     /** 去掉右下角三角 */
    padding: 5px;
    min-width: 60px;
    max-height: 150px;  /** 对话框最大高度 */
    overflow-y: auto;   /** 可以滚动内容 */
    font-size: 20px;

}

/** 按钮基础样式 */
.send-btn {
    background: #7ba9ff;
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    transition: all 0.2s ease;   /** 平滑过渡 */
}

/** 按钮鼠标悬停样式 */
/** 样式参考自https://neumorphism.io */
.send-btn:hover {
    background: #5f9fff;
    box-shadow:  3px 3px 6px #a9ced0,
                -3px -3px 6px #e5ffff;
    transform: translateY(-0.2px);
}

/** 按钮鼠标点击样式 */
.send-btn:active {
    background: #b4ccff;
    box-shadow: inset 3px 3px 6px #a9ced0,
                inset -3px -3px 6px #e5ffff;
    transform: translateY(0.2px);
}

.send-btn:disabled {
    background: #d1e1fa;
}

/** 欢迎界面样式 */
.welcomeBox {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

</style>

