<template>
   <div class="page_header ">
    <!-- 导航信息 -->
    <div class="page__nav">
      <div class="nav__logo">
        <router-link to="/"><img src="http://ox4oktbuv.bkt.clouddn.com/o_1bt17tg2v1ece1qmqd8irl81n23g.png" alt="古一巷" /></router-link>
      </div>
      <div class="nav__menus">
        <ul class="nav__menus__wrap">
          <li :class="['nav__menus--item', index == 1 ? 'active' : '']"><router-link to="/live" tag="span">实时拍卖</router-link></li>
          <li class="nav__menus--item">下载App</li>
          <li class="nav__menus--item">搜索拍品</li>
          <li class="nav__menus--item">我的订单</li>
          <li class="nav__menus--item">售后</li>
        </ul>
      </div>
      <!-- <div class="nav__tel">电话: 010-88888888</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    index: {
      type: String,
      default: '0'
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
    background: #fff;
  }

  .page__nav {
    display: flex;
    // justify-content: space-around;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    padding: 12px 17px;

    width: 1200px;
    // height: 60px;
    line-height: 50px;

    font-size: 26px;
    color: #AB9485;
    background: #fff;


    .nav__logo {
      max-width: 100px;
      line-height: 100%;
      margin-right: 50px;

      img {
        width: 70px;
        height: 70px;

        cursor: pointer;
        border-radius: 8px;
        box-shadow: 1px 2px 4px rgba(0,0,0,0.2);
      }
    }

    .nav__menus {
      flex: 1;
      max-width: 750px;
      margin-top: -12px;
      .nav__menus__wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid #AB9485;

        .nav__menus--item {
          text-align: center;
          cursor: pointer;
        }

        .active {
          border-bottom: 2px solid #AB9485;
        }

      }
    }

    .nav__tel {

    }
  }
</style>
