<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
   <!--  <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-search"></i>
        <span slot="title">商品信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">所有商品</el-menu-item>
        <el-menu-item index="1-1">最近商品</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
    <el-menu-item index="1">
      <router-link to="/product" tag="div">
        <i class="el-icon-search"></i>
        <span>拍品信息</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/info" tag="div">
        <i class="el-icon-menu"></i>
        <span>拍行信息</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/auction" tag="div">
        <i class="el-icon-star-on"></i>
        <span>拍场信息</span>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'business-nav',
  props: {
    isCollapse: true
  },
  data () {
    return {
    }
  },
  methods: {
    handleOpen() {

    },

    handleClose() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~@/style/base.css";
  @import "~@/style/layout";
</style>
