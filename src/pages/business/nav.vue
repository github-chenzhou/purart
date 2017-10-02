<template>
   <div class="page_header page-fixed">
      <el-menu theme="dark" :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="" target="_blank">管理</a></el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    index: 1
  },
  data () {
    return {
    }
  },
  methods: {
    handleSelect() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~@/style/base.css";
  @import "~@/style/layout";
</style>
