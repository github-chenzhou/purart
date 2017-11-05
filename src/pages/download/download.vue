/*
 * @page：首页
 * @author: chenzhou
 * @update: 2017.09.03
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
    <section class="page__download">

    </section>


    <!-- footer -->
    <!-- <div class="index__footer"><Footer-Component></Footer-Component></div> -->

    <router-view></router-view>
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
        index: 2,
        scaleImages: []
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
    mixins: [],
    methods: {
      /*
       * @method 接收器初始化
       */
      init() {
        let self = this;

        this.getSaleInfo();
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

<style lang="scss" scoped>
  @import "~@/style/base.css";
  @import "~@/style/common";

  .page {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
  }

  .page__download {
    width: 100%;
    height: 554px;
    background: #000;
  }


</style>
