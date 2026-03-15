<template>
    <div class="main-container">

        <div class="chat-header">
            <h3>新对话-DeepSeek</h3>
        </div>

        <div class="chat-main">
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
            <div class="message-user">你好</div>
            <div class="message-ai">你好，我是DeepSeek</div>
        </div>

        <div class="chat-input">
            <div class="input-area">
                <textarea class="input-text" placeholder="给 DeepSeek 发送信息"></textarea>
                <button class="send-btn">发送</button>
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

.chat-input {
    height: 10%;
    margin: 30px  40px ;
    padding: 10px;
    border: 1px solid #bababa;
    border-radius: 20px;
}

.input-area {
    display: flex;
    gap: 10px;
}

.input-text {
    flex: 1;
    border: none;       /** 去掉文本框的边框 */
    outline: none;    /** 去掉文本框的聚焦边框 */
    resize: none;     /** 去掉右下角三角 */
    padding: 5px;
    font-size: 20px;

}

.send-btn {
    padding: 10px 30px;
    cursor: pointer;
    border: 1px solid #0075f3;
    border-radius: 30px;
    background: #edf3fc;
    box-shadow: 0 1px 4px 1px rgb(196, 196, 196);
    transition: all 0.2s ease; 
}

.send-btn:hover {
    background: #ffffff;
    box-shadow: 0 3px 5px 3px rgb(196, 196, 196);
    transform: translateY(-0.2px);
}

</style>

