/*
 * @page：首页
 * @author: chenzhou
 * @update: 2017.09.03
 * @desc
 *
 */

<template>
  <section class="page" @click="handleFilter">
    <!-- header  -->
    <header class="index__header">
      <Header-Component :index="index"></Header-Component>
    </header>

    <!-- 内容 -->
    <!-- <section class="index__content"> -->
      <!-- banner -->
      <section class="index__banner">
        <div class="banner__inner"></div>

      </section>

      <!-- 地域 -->
      <section class="index__market">
        <div class="market__wrap">
          <ul class="market__country">
            <li class="country--name">北美</li>
            <li class="country--city f24">北美</li>
            <li class="country--city f20">北美北美</li>
            <li class="country--city f28">北美</li>
            <li class="country--city f24">北美</li>
            <li class="country--city f20">北美</li>
          </ul>
          <ul class="market__country">
            <li class="country--name">欧洲</li>
            <li class="country--city f24">北美</li>
            <li class="country--city f20">北美</li>
            <li class="country--city f28">北美北美</li>
            <li class="country--city f20">北美</li>
          </ul>
          <ul class="market__country">
            <li class="country--name">日本</li>
            <li class="country--city f24">北美</li>
            <li class="country--city f20">北美</li>
            <li class="country--city f28">北美</li>
            <li class="country--city f24">北美</li>
            <li class="country--city f20">北美hahahh</li>
            <li class="country--city f28">北美</li>
            <li class="country--city f24">北美</li>
          </ul>
          <ul class="market__country">
            <li class="country--name">其它</li>
            <li class="country--city f24">北美</li>
            <li class="country--city f20">北北美美</li>
            <li class="country--city f28">北美</li>
            <li class="country--city f24">北美</li>
            <li class="country--city f20">北美</li>
          </ul>
        </div>

      </section>

      <!-- banner -->
      <section class="index__recommend">
        <div class="recommends__wrap">
          <div class="recommend__area1">
            <div class="recommend--desc">
              <p>尺寸：18cm x 27cm<br>在一个月黑风高的夜晚<br>卡夫爷爷的爷爷卖了这个花瓶<br>卡夫爷爷的爷爷卖了这个花瓶<br>卡夫爷爷的爷爷卖了</p>
            </div>
            <div class="recommend__image-wrap">
              <img class="recommend--image" src="https://p1.liveauctioneers.com/5982/110342/56611031_1_x.jpg?version=0&width=250&format=pjpg&auto=webp" alt="">
            </div>
          </div>
          <div class="recommend__area2">
            <div class="recommend--desc">
              <p>尺寸：18cm x 27cm<br>在一个月黑风高的夜晚<br>卡夫爷爷的爷爷卖了这个花瓶<br>卡夫爷爷的爷爷卖了这个花瓶<br>卡夫爷爷的爷爷卖了</p>
            </div>
            <div class="recommend__image-wrap">
              <img class="recommend--image" src="https://p1.liveauctioneers.com/5584/110913/56921625_1_x.jpg?version=1508273393&width=340&format=pjpg&auto=webp">
            </div>
          </div>
          <div class="recommend__area3">
            <div class="recommend--desc">
              <p>尺寸：18cm x 27cm<br>在一个月黑风高的夜晚<br>卡夫爷爷的爷爷卖了这个花瓶<br>卡夫爷爷的爷爷卖了这个花瓶<br>卡夫爷爷的爷爷卖了</p>
            </div>
            <div class="recommend__image-wrap">
              <img class="recommend--image" src="https://p1.liveauctioneers.com/1384/110732/56839596_1_x.jpg?version=1507908521&width=250&format=pjpg&auto=webp">
            </div>
          </div>
        </div>

      </section>
      <section class="index__recommend2">
      </section>

      <!-- footer -->
      <div class="index__footer"><Footer-Component></Footer-Component></div>
    <!-- </section> -->

    <!-- footer -->
    <!-- <div class="index__footer"><Footer-Component></Footer-Component></div> -->

    <router-view></router-view>
  </section>
</template>

<script>
  import request from '@/util/request'
  import API from '@/util/api'
  import '@/util/util'
  import { configWX } from '@/util/wx-util'

  import HeaderComponent from '@/components/header'
  import FooterComponent from '@/components/footer'


  // 子组件不需要引用直接使用
  window.request = request;
  if (process.env.NODE_ENV !== 'production') {
    // request.post = request.get
  }

  export default {
    name: 'student-page',
    props: {
    },
    data() {
      return {
        presentationMap: new Map(),

        // 习题map
        problemMap: new Map(),

        // timeline列表
        cards: []
      };
    },
    components: {
      HeaderComponent,
      FooterComponent
    },
    computed: {
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...

        if(from.name == 'student-danmu-page' || from.name == 'student-submission-page') {
          document.title = this.courseName && this.courseName;
          setTimeout(() => {
            typeof this.handleScrollToTop === 'function' && this.handleScrollToTop();
          }, 300)
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
      },

      /*
       * @method 直播悬停反面等事件
       */
      iniTimeline(lessonID) {
        let self = this;

        Promise.all([]).then((res) => {
          if (process.env.NODE_ENV !== 'production') {
            // self.testTimeline();
          }

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

          // sentry 配置
          // this.setSentry();
        });
      },

      /*
      * @method sentry ga 配置
      */
      setSentry() {
        if(typeof Raven !== 'undefined') {
          Raven.config('http://1a033df516274a349716c21d7d4ce6b2@rain-sentry.xuetangx.com/4').install();
          Raven.setUserContext({ userid: this.userID });
        } else {
          setTimeout(() => {
            Raven.config('http://1a033df516274a349716c21d7d4ce6b2@rain-sentry.xuetangx.com/4').install();
            Raven.setUserContext({ userid: this.userID });
          }, 1500)
        }

        typeof ga === 'function' && ga('set', 'userId', this.userID);
      },

      /*
       * @method 用户权限
       * @param  lessonID
       */
      getUserInfo(lessonID) {
        let self = this;
        let URL = API.GET_USER_INFO;
        let param = {
          'lesson_id': lessonID
        }

        return request.get(URL, param)
          .then((res) => {
            if(res && res.data) {
              let data = res.data;

              self.userID = data.user_id;
              self.avatar = data.avatar;
              self.userAuth = data.user_auth;

              return data;
            }
          });
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
              self.pro_perm_info = data.pro_perm_info
              // auth
              self.userID = data.userID;
              self.avatar = data.avatar;
              self.userAuth = data.userAuth;

              self.presentationList = data.presentationList;
              self.quizList = data.quizList;
              self.presentationID = data.activePresentationID;

              // classroom
              self.classroom = data.classroom;

              // set presentation map
              if(self.presentationList.length) {
                for(let i = 0; i < self.presentationList.length; i++) {
                  let presentation = self.presentationList[i];

                  self.formatPresentation(presentation, presentation.presentationID);
                }
              }

              // set quiz map
              if(self.quizList && self.quizList.length) {
                self.quizList.forEach( function(quiz, index) {
                  self.quizMap.set(quiz.quizID, quiz);
                });
              }

              // set title
              let presentationData = self.presentationMap.get(self.presentationID);
              presentationData.Title && (self.title = presentationData.Title);
              // 课程title
              document.title = self.courseName = data.classroom && data.classroom.courseName;

              return presentationData;
            }
          })
          .catch(error => {
            console.log(error);

            if(error && error.status_code === 601) {
              // 课程结束
              console.log('课程结束');
              location.href = '/v/index/course/normalcourse/learning_lesson_detail/' + this.lessonID;
            } else if(error && error.status_code === 603) {
              // 没有权限
              console.log('没有权限');
            }
          });
      },

      /*
      * @method 格式化ppt数据
      * @param
      */
      formatPresentation(presentation, presentationID) {
        if(presentation) {
          let pptData = presentation['Slides'];

          if(pptData.length) {
            pptData.forEach( (slide, index) => {
              // 收藏 不懂
              if( slide['tag'] && slide['tag'].length ) {
                slide['tag'].forEach((tag)=>{
                  tag === 1 && (slide['question'] = 1);
                  tag === 2 && (slide['store'] = 1);
                })
              }

              // 问题结果
              if (slide['Problem'] && slide['Result']) {
                slide['Problem']['Result'] = slide['Result'];
              }
            });

            presentation['Slides'] = pptData;
          }

          this.presentationMap.set(presentationID || presentation.presentationID, presentation);
        }
      },

      /*
      * @method 下拉刷新touchend 回调
      * @param
      */


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
      * @method 绑定滚动事件
      * @param
      */
      bindTouchEvents() {
        this.$el.querySelector('.J_timeline').addEventListener('touchmove', this.handleTouchMove);
        this.$el.querySelector('.J_timeline').addEventListener('touchend', this.handleTouchMove);
      },
      unbindTouchEvents() {
        this.$el.querySelector('.J_timeline').removeEventListener('touchmove', this.handleTouchMove);
        this.$el.querySelector('.J_timeline').removeEventListener('touchend', this.handleTouchMove);
      },


      /*
       * @method more
       *
       */
      handleMoreActions() {
        if(this.isMore) {
          this.isMore = false;
        } else {
          this.isMore = true;
        }
      },


      /*
       * @method 滚动到最顶部
       *
       */
      handleScrollToTop() {
        let timelineEl = this.$el.querySelector('.J_cards')

        // timelineEl.scrollIntoView({block: 'start', behavior: 'smooth'});
        timelineEl.scrollIntoView();
        this.hasMsg = false;
      },


      /*
       * @method 页面事件过滤
       *
       */
      handleFilter(evt) {
        let targetEl = typeof event !== 'undefined' && event.target || evt.target

        this.isMore = false;
      },

      /*
       * @method 返回上一页
       *
       */
      handleBack() {
        if(this.backURL) {
          location.href = this.backURL;
        } else if(this.classroom && this.classroom.courseId) {
          location.href = '/v/index/course/normalcourse/manage_classroom/'+ this.classroom.courseId + '/' + this.classroom.classroomId;
        } else {
          this.$router.back();
        }
      }
    },
    created() {
      this.init();
    },
    mounted() {
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
  // @import "~@/style/font/iconfont/iconfont.css";
  // @import "~@/style/animate.css";
  // @import "~@/style/mintui.css";
  @import "~@/style/base.css";

  .page {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    // padding-bottom: 180px;
    // height: auto !important;
    min-height: 100%;
  }

  .page-fixed {
    z-index: 1;
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }


  .index__content {
    position: relative;
    width: 100%;
    height: 100%;
    // overflow: hidden;

    // padding-bottom: 180px;
    // height: auto !important;
    // min-height: 600px;

    background: #fff;
  }



  /*-------------------*\
    $ banner
  \*-------------------*/

  .index__banner {
    width: 100%;
    height: calc(100% - 100px);

    background: #FDFDFD;

    .banner__inner {
      width: 100%;
      height: 100%;
      background-image: url(https://p1.liveauctioneers.com/dist/images/hunt.jpg?format=pjpg&auto=webp);

      background-position: center, center;
      background-repeat: no-repeat;
      background-size: contain;
      // background-size: cover;
    }
  }




  /*-------------------*\
    $ 市场
  \*-------------------*/


  .index__market {
    width: 100%;
    height: 100%;

    background: #AB9485;

    .market__wrap {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      margin: 0 auto;
      padding: 100px 0 0;
      width: 1000px;

      color: #fff;

      .market__country {
        flex: 1;
        max-width: 135px;
        text-align: left;
        line-height: 1.5;

        .country--name {
          font-size: 26px;
        }

        .country--city {
          // font-size: 20px;
          cursor: pointer;
        }
      }
    }
  }


  .index__recommend {
    position: relative;
    min-width: 100%;
    height: 100%;
    // mixnoverflow: auto;
    overflow: visible;

    .recommends__wrap {
      margin: 0 auto;
      width: 1000px;
    }

    .recommend__area1,
    .recommend__area2,
    .recommend__area3 {
      position: absolute;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      color: #fff;
      cursor: pointer;

      .recommend--desc {
        text-align: left;
        width: 260px;
        font-size: 16px;
      }

      .recommend__image-wrap {
        position: relative;
        width: 300px;
        height: 400px;
        // background: #c8c8c8;
      }

      .recommend--image {
        position: absolute;
        // top: 50%;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        max-width: 100%;
        max-height: 100%;
      }
    }

    .recommend__area1 {
      top: 50px;
      left: 100px;
    }

    .recommend__area2 {
      top: calc(100% - 200px);
      right: 100px;
      align-items: center;
    }

    .recommend__area3 {
      bottom: calc(-100% + 50px);
      left: 100px;
    }
  }

  .index__recommend,
  .index__recommend2 {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
     background: #B04D39;
  }

  .index__recommend2 {
    background: #DBC309;
  }


  /*-------------------*\
    $ 网络超时重连
  \*-------------------*/

  .index__footer {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    width: 100%;
  }



</style>
