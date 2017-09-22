/*
 * @page：商家首页
 * @author: chenzhou
 * @update: 2017.09.16
 * @desc
 *
 */

<template>
  <section class="page">

    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          </el-menu>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9">
        <section class="">
      <!-- header  -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="拍品信息" name="product">
          <!-- 拍品信息 -->
          <el-form class="product__form" ref="form" :model="product" label-width="80px">
            <el-form-item label="号码">
              <el-input v-model="product.number" placeholder="LOT" value="LOT"></el-input>
            </el-form-item>
            <el-form-item label="起拍价格">
              <el-input v-model="product.price" placeholder="起拍价格" value=""></el-input>
            </el-form-item>
            <el-form-item label="市场估价">
              <el-input v-model="product.valuation" placeholder="市场估价" value=""></el-input>
            </el-form-item>
            <el-form-item label="材质">
              <el-select v-model="product.material" multiple placeholder="请选择材质">
                <el-option-group
                  v-for="group in groups"
                  :key="group.label"
                  :label="group.label">
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-option-group>

               <!--
                <el-option label="布料" value="beijing6"></el-option>
                <el-option label="纸" value="shanghai5"></el-option>
                <el-option label="皮革" value="beijing6"></el-option>
                <el-option label="玻璃" value="beijing6"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="长宽高">
              <el-input v-model="product.inch" placeholder="x*y*z cm" value=""></el-input>
            </el-form-item>
            <el-form-item label="重量">
              <el-input v-model="product.weight" placeholder="重量" value=""></el-input>
            </el-form-item>
            <el-form-item label="商品状况">
              <el-select v-model="product.item_status" placeholder="请选择商品状况">
                <el-option label="完好" value="jinshu"></el-option>
                <el-option label="很好" value="beijing2"></el-option>
                <el-option label="磨损" value="shanghai22"></el-option>
                <el-option label="裂痕" value="beijing4"></el-option>
                <el-option label="断裂" value="shanghai5"></el-option>
                <el-option label="易碎" value="shanghai5"></el-option>
                <el-option label="背部贴板" value="shanghai5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="来源">
              <el-input type="textarea" v-model="product.from" placeholder="来源" value=""></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>

        </el-tab-pane>

        <el-tab-pane label="拍场信息" name="auction">
          <!-- 拍场信息 -->
          <el-form class="product__form" ref="form" :model="auction" label-width="80px">
            <el-form-item label="拍品概括">
              <el-input type="textarea" v-model="auction.summary" placeholder="拍品概括" value=""></el-input>
            </el-form-item>
            <el-form-item label="佣金比例">
              <el-select v-model="auction.commission_rate" filterable allow-create placeholder="请选择佣金比例">
                <el-option label="99:1" value="jinshu"></el-option>
                <el-option label="98:2" value="beijing2"></el-option>
                <el-option label="100:2" value="shanghai22"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="拍卖时期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="auction.date" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1"> </el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="auction.time" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>
        </el-tab-pane>

        <el-tab-pane label="拍行信息" name="business">
          <!-- 拍品信息 -->
          <el-form class="product__form" ref="form" :model="business" label-width="80px">
            <el-form-item label="拍行名称">
              <el-input v-model="business.name" placeholder="LOT" value="拍行名称"></el-input>
            </el-form-item>
            <el-form-item label="拍行地址">
              <el-col :span="6">
                <el-select v-model="business.address" placeholder="请选择商品状况">
                  <el-option label="中国" value="jinshu"></el-option>
                  <el-option label="美国" value="beijing2"></el-option>
                  <el-option label="非洲" value="shanghai22"></el-option>
                  <el-option label="欧洲" value="beijing4"></el-option>
                  <el-option label="日本" value="shanghai5"></el-option>
                </el-select>
              </el-col>
              <el-col :span="18">
                <el-input v-model="business.address2" placeholder="拍行地址" value=""></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="拍行邮编">
              <el-input v-model="business.zip_code" placeholder="拍行邮编" value=""></el-input>
            </el-form-item>
            <el-form-item label="拍行邮箱">
              <el-input v-model="business.email" placeholder="拍行邮箱" value=""></el-input>
            </el-form-item>
            <el-form-item label="拍行电话">
              <el-input v-model="business.tel" placeholder="拍行电话" value=""></el-input>
            </el-form-item>
            <el-form-item label="拍行简介">
              <el-input v-model="business.intro" type="textarea" placeholder="拍行简介" value=""></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>
        </el-tab-pane>
      </el-tabs>

        </section>
      </el-col>
    </el-row>


    <section class="">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="拍品信息" name="product">
          <!-- 拍品信息 -->
          <el-form class="product__form" ref="form" :model="product" label-width="80px">
            <el-form-item label="号码">
              <el-input v-model="product.number" placeholder="LOT" value="LOT"></el-input>
            </el-form-item>
            <el-form-item label="起拍价格">
              <el-input v-model="product.price" placeholder="起拍价格" value=""></el-input>
            </el-form-item>
            <el-form-item label="市场估价">
              <el-input v-model="product.valuation" placeholder="市场估价" value=""></el-input>
            </el-form-item>
            <el-form-item label="材质">
              <el-select v-model="product.material" multiple placeholder="请选择材质">
                <el-option-group
                  v-for="group in groups"
                  :key="group.label"
                  :label="group.label">
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-option-group>

               <!--
                <el-option label="布料" value="beijing6"></el-option>
                <el-option label="纸" value="shanghai5"></el-option>
                <el-option label="皮革" value="beijing6"></el-option>
                <el-option label="玻璃" value="beijing6"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="长宽高">
              <el-input v-model="product.inch" placeholder="x*y*z cm" value=""></el-input>
            </el-form-item>
            <el-form-item label="重量">
              <el-input v-model="product.weight" placeholder="重量" value=""></el-input>
            </el-form-item>
            <el-form-item label="商品状况">
              <el-select v-model="product.item_status" placeholder="请选择商品状况">
                <el-option label="完好" value="jinshu"></el-option>
                <el-option label="很好" value="beijing2"></el-option>
                <el-option label="磨损" value="shanghai22"></el-option>
                <el-option label="裂痕" value="beijing4"></el-option>
                <el-option label="断裂" value="shanghai5"></el-option>
                <el-option label="易碎" value="shanghai5"></el-option>
                <el-option label="背部贴板" value="shanghai5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="来源">
              <el-input type="textarea" v-model="product.from" placeholder="来源" value=""></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>

        </el-tab-pane>

        <el-tab-pane label="拍场信息" name="auction">
          <!-- 拍场信息 -->
          <el-form class="product__form" ref="form" :model="auction" label-width="80px">
            <el-form-item label="拍品概括">
              <el-input type="textarea" v-model="auction.summary" placeholder="拍品概括" value=""></el-input>
            </el-form-item>
            <el-form-item label="佣金比例">
              <el-select v-model="auction.commission_rate" filterable allow-create placeholder="请选择佣金比例">
                <el-option label="99:1" value="jinshu"></el-option>
                <el-option label="98:2" value="beijing2"></el-option>
                <el-option label="100:2" value="shanghai22"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="拍卖时期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="auction.date" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1"> </el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="auction.time" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>
        </el-tab-pane>

        <el-tab-pane label="拍行信息" name="business">
          <!-- 拍品信息 -->
          <el-form class="product__form" ref="form" :model="business" label-width="80px">
            <el-form-item label="拍行名称">
              <el-input v-model="business.name" placeholder="LOT" value="拍行名称"></el-input>
            </el-form-item>
            <el-form-item label="拍行地址">
              <el-col :span="6">
                <el-select v-model="business.address" placeholder="请选择商品状况">
                  <el-option label="中国" value="jinshu"></el-option>
                  <el-option label="美国" value="beijing2"></el-option>
                  <el-option label="非洲" value="shanghai22"></el-option>
                  <el-option label="欧洲" value="beijing4"></el-option>
                  <el-option label="日本" value="shanghai5"></el-option>
                </el-select>
              </el-col>
              <el-col :span="18">
                <el-input v-model="business.address2" placeholder="拍行地址" value=""></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="拍行邮编">
              <el-input v-model="business.zip_code" placeholder="拍行邮编" value=""></el-input>
            </el-form-item>
            <el-form-item label="拍行邮箱">
              <el-input v-model="business.email" placeholder="拍行邮箱" value=""></el-input>
            </el-form-item>
            <el-form-item label="拍行电话">
              <el-input v-model="business.tel" placeholder="拍行电话" value=""></el-input>
            </el-form-item>
            <el-form-item label="拍行简介">
              <el-input v-model="business.intro" type="textarea" placeholder="拍行简介" value=""></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>
        </el-tab-pane>
      </el-tabs>

    </section>



    <!-- footer -->
    <section class="index__footer ">
    </section>

    <router-view></router-view>
  </section>
</template>

<script>
  import request from '@/util/request'
  import API from '@/util/api'
  import '@/util/util'


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
        activeName: 'product',
        product: {
          number: '',
          price: '',
          valuation: '',
          material: '',
          item_status: '',
          from: ''
        },
        auction: {
          summary: '',
          commission_rate: '',
          date: '',
          time: '',
        },
        business: {
          name: '',
          address: '',
          zip_code: '',
          email: '',
          tel: '',
          intro: ''
        },
        groups: [{
            label: '金属',
            options: [{
              value: 'jin',
              label: '金'
            }, {
              value: 'yin',
              label: '银'
            },{
              value: 'tie',
              label: '铁'
            },{
              value: 'tong',
              label: '铜'
            }]
          }, {
            label: '石材',
            options: [{
              value: 'Chengdu',
              label: '钻石'
            }, {
              value: 'Shenzhen',
              label: '大理石'
            }, {
              value: 'Guangzhou',
              label: '玉石'
            }, {
              value: 'Dalian',
              label: '水晶'
            }]
        }],
        presentationMap: new Map(),
        // timeline列表
        cards: []
      };
    },
    components: {
      // identity: () => import('@/components/student/identityBinding.vue')
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

          self.bindTouchEvents();

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
       * @method 返回上一页
       *
       */
      handleBack() {
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
    width: 450px;
    text-align: left;
  }




  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }



  /*-------------------*\
    $ 时间轴 列表
  \*-------------------*/



  /*-------------------*\
    $ 网络超时重连
  \*-------------------*/



</style>
