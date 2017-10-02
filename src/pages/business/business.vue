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
              <el-button type="primary" >立即创建</el-button>
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
              <el-button type="primary" >立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>
        </el-tab-pane>

        <el-tab-pane label="拍行信息" name="business">
          <!-- 拍品信息 -->
          <el-form class="product__form" ref="form" :model="business" label-width="80px">
            <el-form-item label="拍行名称">
              <el-input v-model="business.name" placeholder="拍行名称" value="拍行名称"></el-input>
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
              <el-button type="primary" >确定</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>
        </el-tab-pane>

        <el-tab-pane label="主标题" name="title">
          <!-- 拍品信息 -->
          <el-form class="product__title" ref="title" :model="product" label-width="80px">
            <el-form-item label="原属国">
              <el-col :span="6">
                <el-select v-model="product.origin" placeholder="商品原属国">
                  <el-option label="中国" value="china"></el-option>
                  <el-option label="美国" value="beijing2"></el-option>
                  <el-option label="非洲" value="shanghai22"></el-option>
                  <el-option label="欧洲" value="beijing4"></el-option>
                  <el-option label="日本" value="shanghai5"></el-option>
                </el-select>
              </el-col>
              <el-col :span="18" class="pl10">
                <el-input v-model="product.origin2" placeholder="地区" value=""></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="年份">
              <el-col :span="6">
                <el-select v-model="product.year" placeholder="">
                  <el-option label="公元" value="A.C."></el-option>
                  <el-option label="公元前" value="B.C."></el-option>
                </el-select>
              </el-col>
              <el-col :span="18" class="pl10">
                <el-input v-model="product.year2" placeholder="商品年份" value=""></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="品类">
              <el-col :span="6">
                <el-select v-model="product.category" placeholder="" @change="">
                  <el-option label="艺术品" value="A.C."></el-option>
                  <el-option label="珠宝" value="B.C."></el-option>
                </el-select>
              </el-col>
              <el-col :span="6" class="pl10">
                <el-select v-model="product.category2" placeholder="">
                  <el-option label="绘画" value="A.C."></el-option>
                  <el-option label="雕塑" value="B.C."></el-option>
                </el-select>
              </el-col>
              <el-col :span="6" class="pl10">
                <el-select v-model="product.category3" placeholder="">
                  <el-option label="油画" value="A.C."></el-option>
                  <el-option label="素描" value="B.C."></el-option>
                </el-select>
              </el-col>

            </el-form-item>

            <!-- 品牌的话显示品牌 -->
            <el-form-item label="作者">
              <el-col >
                <el-input v-model="product.year2" placeholder="作者" value=""></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="商品图片">
              <section class="image__list">
                <div class="pic-view" v-for="(item, index) in product.pics">
                  <img :src="item.thumb" :class="[item.pic ? '' : 'pic--loading']" :data-src="item.pic" :data-index="index"  @load="handlelaodImg" @click="handleScaleImage" />
                </div>
                <div class="image--add" id="container"><p class="camera" v-show="product.pics.length<9" id="file" ></p></div>
              </section>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" >确定</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>

        </el-tab-pane>

        </el-tabs>

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
  if (process.env.NODE_ENV !== 'production') {
    request.post = request.get
  }

  export default {
    name: 'student-page',
    props: {
    },
    data() {
      return {
        index: 1,
        isCollapse: false,
        activeName: 'title',

        // 图片放大数组
        scaleImages: [],
        product: {
          number: '',
          price: '',
          valuation: '',
          material: '',
          item_status: '',
          from: '',
          // 所属国
          origin: 'china',
          origin2: '',
          // 年份
          year: 'A.C.',
          year2: '',
          // 类目
          category: '',

          // 商品图片
          pics:[]
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

        setTimeout(()=> {
          this.initUpload();
        }, 1000)

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

      initUpload(){
        let self = this;

        var uploader = Qiniu.uploader({
          disable_statistics_report: false,   // 禁止自动发送上传统计信息到七牛，默认允许发送
          runtimes: 'html5,flash,html4',      // 上传模式,依次退化
          browse_button: 'file',         // 上传选择的点选按钮，**必需**
          // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
          // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
          // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
          uptoken : 'XbBjw6RmDf-8tTJ8vwVjI6fR1sOboimKSfnRK6Jf:fQAxf0ALWjk2P21PGzAgOuZWuQo=:eyJzY29wZSI6InlrdGZyb250ZW5kIiwiZGVhZGxpbmUiOjE1MDY5MjM4NDR9', // uptoken 是上传凭证，由其他程序生成
          // uptoken_url: '/uptoken',         // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
          uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
            // do something
            return uptoken;
          },
          get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
          // downtoken_url: '/downtoken',
          // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
          // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
          // save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `save_key`，则开启，SDK在前端将不对key进行任何处理
          domain: 'http://sfe.ykt.io/',     // bucket 域名，下载资源时用到，如：'http://xxx.bkt.clouddn.com/' **必需**
          container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
          max_file_size: '100mb',             // 最大文件体积限制
          // flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
          max_retries: 3,                     // 上传失败最大重试次数
          dragdrop: true,                     // 开启可拖曳上传
          drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
          chunk_size: '4mb',                  // 分块上传时，每块的体积
          auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
          //x_vars : {
          //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
          //    'time' : function(up,file) {
          //        var time = (new Date()).getTime();
                   // do something with 'time'
          //        return time;
          //    },
          //    'size' : function(up,file) {
          //        var size = file.size;
              // do something with 'size'
                //        return size;
          //    }
          //},
          init: {
            'FilesAdded': function(up, files) {
              plupload.each(files, function(file) {
                // 文件添加进队列后,处理相关的事情
                // console.log(file);
              });
            },
            'BeforeUpload': function(up, file) {
               // 每个文件上传前,处理相关的事情
               // console.log(file);
            },
            'UploadProgress': function(up, file) {
               // 每个文件上传时,处理相关的事情
            },
            'FileUploaded': function(up, file, info) {
               // 每个文件上传成功后,处理相关的事情
               // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
               // {
               //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
               //    "key": "gogopher.jpg"
               //  }
               // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

              var domain = up.getOption('domain');
              var res = JSON.parse(info);
              // 获取上传成功后的文件的Url
              var sourceLink = domain + res.key;

              var oPic = {
                pic: sourceLink,
                thumb: sourceLink + '?imageView2/1/w/300/h/300'
              };

              console.log(oPic);

              self.product.pics.push(oPic);
              // self.scaleImages
            },
            'Error': function(up, err, errTip) {
               //上传出错时,处理相关的事情
            },
            'UploadComplete': function() {
               //队列文件处理完毕后,处理相关的事情
            },
            'Key': function(up, file) {
              // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
              // 该配置必须要在 unique_names: false , save_key: false 时才生效

              var uuid = file.id;
              var name = file.name;
              var ext = name && name.substring(name.indexOf('.')) || '';
              var key = uuid + ext;

              // do something with key here
              return key
            }
          }
        });
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

      handleOpen() {

      },

      handleClose() {

      },

      /**
       *
       */
      handlelaodImg(evt) {
        let target = evt.target;
        // .pic-view
        let parentEl = target.parentNode;
        let src = target.dataset.src || target.src;
        let index = +target.dataset.index || 0;

        let width = target.naturalWidth || target.width;
        let height = target.naturalHeight || target.height;
        let rate = width/height;

        if(!src) {
          return ;
        }

        let item = { src: src, w: width || 750, h: height || 520 };
        this.scaleImages[index] = item;

      // 预览状态并且只有一张图片单独处理
      // if(this.ispreview && this.oSubject.pics && this.oSubject.pics.length === 1) {
      //   if(rate > 1) {
      //     parentEl.style.width = '100%';
      //     parentEl.style.paddingBottom = 100 / rate + '%';
      //   } else {
      //     parentEl.style.height = 325 + 'px';
      //     parentEl.style.width = 325 * rate + 'px';
      //   }
      // } else {
      //   if(rate > 1) {
      //     target.style.maxHeight = '100%';
      //     target.style.maxWidth = 'none';
      //   }
      // }

        // 矫正预加载 图片
        let oImg = new Image();
        oImg.onload = (e) => {
          this.scaleImages.forEach( (imgItem) => {
            if(src === imgItem.src) {
              imgItem.w = oImg.naturalWidth || oImg.width;
              imgItem.h = oImg.naturalHeight || oImg.height;
            }
          });
        };
        oImg.src = src;
      },

      /*
       * @method 图片缩放
       * @param
       */
      handleScaleImage(evt) {
        let targetEl = evt.target;
        let src = targetEl.dataset.src || targetEl.src;
        let pswpElement = document.querySelector('.J_pswp');
        let index = +targetEl.dataset.index || 0;
        let items = this.scaleImages;

        let options = {
          index: index,
          loop: false,
          maxSpreadZoom: 5,
          showAnimationDuration: 300,
          hideAnimationDuration: 300,
          showHideOpacity: true,

          closeEl: false,
          captionEl: false,
          fullscreenEl: false,
          zoomEl: false,
          shareEl: false,
          counterEl: false,
          arrowEl: false,
          preloaderEl: false,

          isClickableElement: function(el) {
            // return el.tagName === 'P';
          },
          getThumbBoundsFn: function(index) {
            // find thumbnail element
            var thumbnail = targetEl;

            // get window scroll Y
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            // optionally get horizontal scroll

            // get position of element relative to viewport
            var rect = thumbnail.getBoundingClientRect();

            // w = width
            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
          }
        };

        // this.gallery && this.gallery.destroy();
        this.gallery = null;
        // Initializes and opens PhotoSwipe
        let gallery = this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        gallery.init();

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
      max-width: 650px;
    }

  }


   /*-------------------*\
    $ 图片作答
  \*-------------------*/


  .image__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;

    padding: 15px 9px 13px;

    .image--add {
      position: relative;

      margin: 0 0.8% 1.6%;
      width: 31.733%;
      padding-bottom: 31.733%;
      border-radius: 2px;
      border: 1px solid #C8C8C8;

      .camera {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        opacity: 0;
      }
    }

    .image--add:before,
    .image--add:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 53px;
      height: 1px;

      transform: translate(-50%, -50%);

      background: #C8C8C8;
    }
    .image--add:after {
      width: 1px;
      height: 53px;
    }

    .pic-view {
      position: relative;
      margin: 0 0.8% 1.6%;
      width: 31.733%;
      padding-bottom: 31.733%;

      background: #c8c8c8;
      border-radius: 2px;
      overflow: hidden;
      -webkit-touch-callout: none;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        max-width: 100%;
        transform: translate(-50%, -50%);
      }

      .pic--loading {
        width: 75%;
      }
    }

  }



</style>
