<template>
  <div>
    <div class="navbar">
      <el-menu :router='true' default-active="/home" class="el-menu-vertical-demo" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/member">
          <i class="el-icon-s-custom"></i>
          <span slot="title">会员管理</span>
        </el-menu-item>
        <el-menu-item index="/supplier">
          <i class="el-icon-menu"></i>
          <span slot="title">供应商管理</span>
        </el-menu-item>
        <el-menu-item index="/goods">
          <i class="el-icon-suitcase-1"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/staff">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style lang="less" scoped>
  /* 左侧样式 */
  .navbar {
    position: absolute;
    width: 230px;
    top: 49px;
    left: 0px;
    bottom: 0px;
    overflow-y: auto;
    background-color: #545c64;
  }
  .el-menu {
    border-right: none;
  }
  </style>