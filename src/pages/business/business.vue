/*
 * @page：商家首页
 * @author: chenzhou
 * @update: 2017.09.16
 * @desc
 *
 */

<template>
  <section class="page">
    <Header-Component :index="index"></Header-Component>

    <div class="page__content">
      <section class="content__left">
        <Nav-Component :is-collapse="isCollapse"></Nav-Component>
      </section>

      <section class="content__right">

        <router-view></router-view>

      </section>
    </div>

    <!-- footer -->
    <section class="index__footer ">
    </section>

  </section>
</template>

<script>
  import request from '@/util/request'
  import API from '@/util/api'
  import '@/util/util'
  // import '@/util/uploader'

  import HeaderComponent from '@/components/header'
  import NavComponent from './nav'


  // 子组件不需要引用直接使用
  window.request = request;
  window.API = API;
  if (process.env.NODE_ENV !== 'production') {
    // request.post = request.get
  }

  export default {
    name: 'student-page',
    props: {
    },
    data() {
      return {
        index: '3',
        isCollapse: false,
        presentationMap: new Map()
      };
    },
    components: {
      HeaderComponent,
      NavComponent
    },
    computed: {
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...

        if(from.name == 'student-danmu-page') {

        }
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

        setTimeout(()=>{
          require(['photoswipe', 'photoswipe/dist/photoswipe-ui-default', 'photoswipe/dist/photoswipe.css'], function(PhotoSwipe, PhotoSwipeUI_Default) {
            window.PhotoSwipe = PhotoSwipe;
            window.PhotoSwipeUI_Default = PhotoSwipeUI_Default;
          })
        }, 1500)

        setTimeout(()=>{
          require(['moment'], function(moment) {
            window.moment = moment;
          })
        }, 2500)

        // self.bindTouchEvents();
      },


      /*
      * @method sentry ga 配置
      */
      setGA() {
        typeof ga === 'function' && ga('set', 'userId', this.userID);
      },


      /*
      * @method 读取直播的课程列表和auth信息
      * @param  init: 是否初始化socket
      */
      getPresentationList() {
        let self = this;
        let URL = API.student.GET_PRESENTATION_LIST;
        let param = {
          'lesson_id': this.lessonID
        }

        // lessons
        return request.get(URL, param)
          .then((res) => {
            if(res && res.data) {
              let data = res.data;

              // auth
              self.userID = data.userID;
              self.avatar = data.avatar;
              self.userAuth = data.userAuth;

              self.presentationList = data.presentationList;
              self.quizList = data.quizList;
              self.presentationID = data.activePresentationID;

              return presentationData;
            }
          })
          .catch(error => {
            console.log(error);

            if(error && error.status_code === 601) {
              // 课程结束
              console.log('课程结束');
            } else if(error && error.status_code === 603) {
              // 没有权限
              console.log('没有权限');
            }
          });
      },

      /*
      * @method 下拉刷新touchend 回调
      * @param
      */
      handleClick(tab, event) {
        console.log(tab, event);
      },

      /*
      * @method handleTimeline滚动检测
      * @param
      */
      handleTouchMove(evt) {
        let target = typeof event !== 'undefined' && event.currentTarget || evt.currentTarget;

        if(this.hasMsg && target.scrollTop < 200) {
          this.hasMsg = false;
        }
      },

      /*
       * @method 返回上一页
       *
       */
      handleBack() {
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
      this.unbindTouchEvents();
    }
  };
</script>

<style lang="scss">

  .page {
    width: 100%;
    height: 100%;
  }

  .page-fixed {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }




  /*-------------------*\
    $ header
  \*-------------------*/

  .product__form {
    min-width: 450px;
    text-align: left;
  }



  /*-------------------*\
    $
  \*-------------------*/

  .page__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    padding-top: 61px;

    width: 100%;
    height: 100%;
    // height: calc(100% - 61px);


    .content__left {
      position: fixed;
      margin-right: 20px;
      width: 180px;
      height: 100%;
      text-align: left;
      background-color: #eef1f6;
    }

    .content__right {
      flex: 1;
      margin-left: 200px;
    }

  }


</style>
