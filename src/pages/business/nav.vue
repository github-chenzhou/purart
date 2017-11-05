<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <router-link to="/info" tag="div">
          <i class="el-icon-menu"></i>
          <span>拍行信息</span>
        </router-link>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1"><router-link to="/auctions" tag="div"><i class="el-icon-more"></i>拍场列表</router-link></el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="2">
      <router-link to="/auction/0" tag="div">
        <i class="el-icon-star-on"></i>
        <span>创建拍场</span>
      </router-link>
    </el-menu-item>
   <!--  <el-menu-item index="3">
      <router-link to="/products/0" tag="div">
        <i class="el-icon-more"></i>
        <span>拍品列表</span>
      </router-link>
    </el-menu-item> -->
   <!--  <el-menu-item index="4">
      <router-link to="/product/0" tag="div">
        <i class="el-icon-search"></i>
        <span>拍品信息</span>
      </router-link>
    </el-menu-item> -->
    <el-menu-item index="3">
      <router-link to="/live/3" tag="div">
        <i class="el-icon-more"></i>
        <span>现场直播</span>
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

  .el-menu-item-group__title {
    padding-top: 0;
  }
</style>
