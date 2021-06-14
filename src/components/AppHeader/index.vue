<template>
  <div>
    <!-- logo和文字 -->
    <div class="header">
      <a href="#/">
        <img class="logo" src="@/assets/logo.png" width="25px" />
        <span class="company">管理系统</span>
      </a>
      <!--  下拉菜单-->
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          您好
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="edit">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-operation" command="quit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleCommand(command){
        this.$message(`点击了${command}`)
      }
    },
  }
</script>

<style lang="less" scoped>
/* 头部样式 */
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #999;
  a{
    float: left;
  }
}
.logo {
  vertical-align: middle;
  padding: 0px 10px 0px 40px;
}
.company {
  position: absolute;
  color: white;
}
.el-dropdown{
    float: right;
    margin-right: 40px; 
}
.el-dropdown-link{
    color: white;
    cursor: pointer;
}
  </style>