/*
 * @page：售后
 * @author: chenzhou
 * @update: 2017.11.04
 * @desc
 *
 */

<template>
  <section class="page">
    <!-- header  -->
    <header class="index__header">
      <Header-Component :index="index"></Header-Component>
    </header>

    <!-- 内容 -->
    <section class="aftermarket__wrap">
      <!-- 筛选操作  -->
      <div class="page__filter">
        <el-select v-model="value" placeholder="我的所有订单">
          <el-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <!-- 内容区 -->
      <div class="message__box">
        <!-- 收件人 -->
        <div class="message__recipients">
          <p>收件人：</p>
        </div>
        <!-- 主题消息 -->
        <div class="message__info">
          <h3 class="title">主题：</h3>
          <textarea class="textarea" placeholder="" rows="12"></textarea>
          <div class="message__actions">
            <p class="message__btn">发送</p>
          </div>
        </div>
      </div>

    </section>

  </section>
</template>

<script>
  import request from '@/util/request'
  import API from '@/util/api'
  import '@/util/util'
  import HeaderComponent from '@/components/header'


  // 子组件不需要引用直接使用
  window.request = request;
  if (process.env.NODE_ENV !== 'production') {
    request.post = request.get
  }

  export default {
    name: 'student-page',
    props: {
    },
    data() {
      return {
        index: 5,
        options: [{
          value: '10002',
          label: '123456789012345678'
        }, {
          value: '选项2',
          label: '123456789012345678'
        }, {
          value: '选项3',
          label: '123456789012345678'
        }, {
          value: '选项4',
          label: '123456789012345678'
        }, {
          value: '选项5',
          label: '123456789012345678'
        }],
      };
    },
    components: {
      HeaderComponent
    },
    computed: {
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
      }
    },
    filters: {
    },
    mixins: [ ],
    methods: {
      /*
       * @method 接收器初始化
       */
      init() {
        let self = this;

      },

      /*
       * @method 用户权限
       * @param  lessonID
       */
      getSaleInfo() {
        let self = this;
        let URL = API.live.GET_SALE_INFO;
        let params = {
          'num': 3
        }

        return request.get(URL, params)
          .then((res) => {
            if(res && res.data) {
              let data = res.data;

              console.log(data);

              this.list = data;



              return data;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    created() {
      // this.init();
    },
    mounted() {
      this.init();
    },
    updated() {
      window.language && window.language.translate(this.$el);
    },
    beforeDestroy() {
    }
  };
</script>

<style lang="scss">
  @import "~@/style/base.css";
  @import "~@/style/common";

  .el-carousel__button {
    width: 20px;
  }

  .iconfont {
    font-size: 22px;
  }

  .page {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
  }



  /*-------------------*\
    $ 筛选
  \*-------------------*/

  .page__filter {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 0 auto;
    width: 100%;
    max-width: 1000px;

    height: 50px;

    .el-input__inner {
      border: 1px solid #AB9485;
    }

    .el-select .el-input .el-input__icon {
      color: #AB9485;
    }
  }

  /*-------------------*\
    $ 内容展示
  \*-------------------*/

  .message__box {
    margin: 15px auto;
    width: 100%;
    max-width: 1000px;

    .message__recipients {
      padding: 0 30px;
      width: 100%;
      height: 60px;
      line-height: 60px;

      font-size: 24px;
      text-align: left;
      color: #000;
      background: #F28039;
    }

    .message__info {
      padding: 0 30px 45px;;
      width: 100%;

      font-size: 24px;
      text-align: left;
      color: #fff;
      background: #DBC309;

      .title {
        margin-bottom: 0;
        padding: 15px 0 10px;
        font-weight: normal;

      }

      .message__actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding-top: 24px;

        .message__btn {
          width: 170px;
          height: 44px;
          line-height: 44px;
          text-align: center;

          font-size: 24px;
          color: #AB9485;
          background: #000;
          border-radius: 22px/50%;
        }
      }
    }

  }


</style>
