import { ref, watch } from 'vue';

//尝试从浏览器的 localStorage 中读取旧数据
const localData = localStorage.getItem('deepseek_history');

// 创建公共状态：历史会话列表,如果本地有数据，就解析出来；如果没有，就给一个空数组 []
export const chatHistoryList = ref(localData ? JSON.parse(localData) : []);

// 当前正在聊天的会话 ID (用于区分主区域该显示哪个聊天)
export const activeChatId = ref(null);

// 使用 watch 深度监听 chatHistoryList，如果有任何变化，就自动存入硬盘
watch(chatHistoryList, (newValue) => {
    localStorage.setItem('deepseek_history', JSON.stringify(newValue));
}, { deep: true }); // deep: true 开启深度监听