<script setup>
import LayoutSidebar from './components/LayoutSidebar.vue'
import LayoutMain from './components/LayoutMain.vue'
import { ref } from 'vue'

// 当前聊天的 key
const currentChatKey = ref(Date.now())

// 重置当前聊天记录的key
const resetChat = () => {
  currentChatKey.value = Date.now()
}

</script>


<template>
  <div class="app-container">
    <LayoutSidebar class="sidebar" @create-new="resetChat" />
    <LayoutMain class="main-content" :key="currentChatKey" />
  </div>
</template>


<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.sidebar { 
  width: 260px;
  background-color: rgb(247, 247, 247);
}

.main-content {
  flex: 1;
  background-color: rgb(255, 255, 255);
}


</style>
