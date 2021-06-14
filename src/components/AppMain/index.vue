<template>
  <div>
    <div class="main">
      <router-view></router-view> <!-- 组件的出口 -->
    </div>
  </div>
</template>

<style lang="less" scoped>
  /* 主区域 */
  .main {
    position: absolute;
    top: 50px;
    left: 230px;
    bottom: 0px;
    right: 0px;
    padding: 10px;
    overflow-y: auto;
  }
  </style>