<template>
   <div class="page_header page-fixed">
     <!--  <el-menu theme="dark" :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="3"><router-link to="/business">管理</router-link></el-menu-item>
      </el-menu> -->

      <!-- 导航信息 -->
      <div class="page__nav">
        <div class="nav__logo">
          <router-link to="/index"><img src="http://ox4oktbuv.bkt.clouddn.com/o_1bt17tg2v1ece1qmqd8irl81n23g.png" alt="古一巷" /></router-link>
        </div>
        <div class="nav__menus">
          <ul class="nav__menus__wrap">
            <li class="nav__menus--item">即时</li>
            <li class="nav__menus--item">搜索</li>
            <li class="nav__menus--item">订单</li>
            <li class="nav__menus--item">售后</li>
            <li class="nav__menus--item">下载</li>
          </ul>
        </div>
        <div class="nav__tel">电话: 010-88888888</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    index: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      title: "后台"
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


  .page_header {
     background: #282C2F;
  }

  .page__nav {
    display: flex;
    // justify-content: space-around;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 3px 17px;

    width: 1200px;
    height: 60px;
    line-height: 60px;

    font-size: 16px;
    color: #fff;
    background: #282C2F;


    .nav__logo {
      max-width: 100px;
      line-height: 100%;

      img {
        width: 50px;
        height: 50px;

        cursor: pointer;
      }
    }

    .nav__menus {
      height: 100%;
      .nav__menus__wrap {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;

        .nav__menus--item {
          width: 90px;
          text-align: center;
          cursor: pointer;
        }

      }
    }

    .nav__tel {

    }
  }
</style>
