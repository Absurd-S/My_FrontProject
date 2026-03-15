<script setup>
import LayoutSidebar from './components/LayoutSidebar.vue'
import LayoutMain from './components/LayoutMain.vue'

</script>


<template>
  <div class="app-container">
    <LayoutSidebar class="sidebar" />
    <LayoutMain class="main-content" />
  </div>
</template>


<style scoped>
.app-container {
  border: 5px solid red;
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
