<template>
  <div>
    <div class="main">
      <!-- <router-view></router-view> 组件的出口 -->
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

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
    overflow-x:hidden;
  }
  </style>