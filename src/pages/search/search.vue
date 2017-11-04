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
    <section class="live__auction">
      <!-- 筛选操作  -->
      <div class="auction__filter">
        <div class="field has-addons search__cmp">
          <div class="control search__ipt">
            <input class="input" type="text" placeholder="">
          </div>
          <div class="control search__btn">
            <!-- is-info -->
            <a class="button">搜索</a>
          </div>
        </div>

        <div class="field has-addons search__fields">
          <p :class="['control', type == 1 ? 'active' : '']"  @click="handelfilter(1, $event)">
            <a class="button">
              <span class="icon is-small">
                <i class="iconfont icon-paixu"></i>
              </span>
              <span>按价格排序</span>
            </a>
          </p>
          <p :class="['control', type == 2 ? 'active' : '']"  @click="handelfilter(2, $event)">
            <a class="button">
              <span class="icon is-small">
                <i class="iconfont icon-paixu"></i>
              </span>
              <span>按人数排序</span>
            </a>
          </p>
          <p class="control">
            <a class="button">
              <span>筛选</span>
            </a>
          </p>
        </div>
      </div>


      <!-- 内容区 -->
      <el-carousel class="search__list" height="500px" interval="1000000000" arrow="always" autoplay="false" indicator-position="none">
        <el-carousel-item class="auction__product--wrap" v-for="product in list" :key="product">
        <div class=" auction__product">
        <div class="product__info">
          <div class="product__wrap">
            <!-- 拍品内容展示 -->
            <div class="product__inner">
              <p class="product__title">{{ product.description }} | {{ product.title }}</p>
              <!-- 图片列表 -->
              <div class="image_wrap">
                <el-carousel :interval="4500" height="188px" v-if="product.imgs.length">
                  <el-carousel-item v-for="(item, index) in product.imgs" :key="item">
                    <div class="image__wrapper">
                      <img class="live--image" :data-index="index" :src="item" @load="handlelaodImg" @click="handleScaleImage" />
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <!-- 商品信息 v-for="tag in product.tags" -->
              <div class="product__desc">
                <!-- <p class="">尺寸：18cm x 27cm</p> -->
                <p class="">{{ product.tags[0] }}</p>
                <p class="">{{ product.tags[1] }}</p>
                <p class="">尺寸：{{ product.tags[2] }}</p>
                <!-- <p class="">国宝级</p> -->
                <p class="">{{ product.tags[3] }}</p>
              </div>
            </div>
          </div>

          <!-- round -->
          <div class="auction__round J_round">
            <svg width="340" height="120" class=""></svg>
            <div class="round__info">
              <p class="round__tag">ROUND</p>
              <p class="round--count">02</p>
              <p class="round--time">2:30</p>
            </div>
          </div>

          <!-- 钟表 -->
          <div class="product__bid">
            <!-- 价格 -->
            <ul class="price__list">
              <li class="price__item">300</li>
              <li class="price__item">400</li>
              <li class="price__item">500</li>
              <li class="price__item">1000</li>
              <li class="price__item">1200</li>
            </ul>
            <!-- 按钮 -->
            <img class="" src="http://ox4oktbuv.bkt.clouddn.com/o_1btj89ii66ku1uld14lkjmu60s2r.png">
          </div>
        </div>
        </div>
        </el-carousel-item>
      </el-carousel>

    </section>

  </section>
</template>

<script>
  import request from '@/util/request'
  import API from '@/util/api'
  import '@/util/util'
  import drawmixin from '@/pages/live/draw-mixin'

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
        index: 3,
        // 1 按价格排序 2 按人数排序
        type: 1,
        scaleImages: [],
        list: [
          {
            "imgs": [
              "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg"
            ],
            "tags": [
              "包邮包险",
              "完好",
              "55",
              "国宝级"
            ],
            "sale_id": 5,
            "description": "酷玩",
            "title": "中国55通天塔画意"
          },
          {
            "imgs": [
              "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805nl5i5en1v2766118mub.jpeg",
              "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg",
              "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n5af1qp41r3f5lojcld.jpeg"
            ],
            "tags": [
              "包邮包险",
              "很好",
              "40*30*79",
              "国宝级"
            ],
            "sale_id": 6,
            "description": "酷玩",
            "title": "中国201王锴画意"
          },
          {
            "imgs": [
              "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805nl5i5en1v2766118mub.jpeg",
              "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg",
              "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n5af1qp41r3f5lojcld.jpeg"
            ],
            "tags": [
              "包邮包险",
              "很好",
              "40*30*79",
              "国宝级"
            ],
            "sale_id": 6,
            "description": "酷玩",
            "title": "中国201王锴画意"
          }]
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
    mixins: [ drawmixin ],
    methods: {
      /*
       * @method 接收器初始化
       */
      init() {
        let self = this;

        this.getSaleInfo();

        // 图标数据 已完成 已看 班级人数
        this.drawPie([3, 10], document.querySelectorAll('.J_round svg')[0]);
        this.drawPie([7, 10], document.querySelectorAll('.J_round svg')[1]);
        this.drawPie([9, 10], document.querySelectorAll('.J_round svg')[2]);

        setTimeout(()=>{
          require(['photoswipe', 'photoswipe/dist/photoswipe-ui-default', 'photoswipe/dist/photoswipe.css'], function(PhotoSwipe, PhotoSwipeUI_Default) {
            window.PhotoSwipe = PhotoSwipe;
            window.PhotoSwipeUI_Default = PhotoSwipeUI_Default;
          })
        }, 1500)
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
      },

      /*
       * @method 读取商品状态
       * @param
       */
      getSaleStatus(saleID) {
        // sale_id=1
        let self = this;
        let URL = API.live.GET_SALE_STATUS;
        let params = {
          'sale_id': saleID
        }

        return request.get(URL, params)
          .then((res) => {
            if(res && res.data) {
              let data = res.data;

              console.log(data);

              return data;
            }
          })
          .catch(error => {
            console.log(error);
          });
      },

      /*
       * @method 搜索
       * @param
       */
      handelsearch() {

      },

      /*
       * @method 读取商品状态
       * @param
       */
      handelfilter(type, evt) {
        this.type = type;
      },

      /*
       * @method 图片加载完成回调
       * @param
       */
      handlelaodImg(evt) {
        let target = evt.target;
        let src = target.src;
        let index = +target.dataset.index || 0;

        let width = target.naturalWidth || target.width;
        let height = target.naturalHeight || target.height;
        let rate = width/height;
        let targetWidth = rate * 300;

        target.style.width = targetWidth + 'px';

        let item = { src: src, w: width, h: height };
        this.scaleImages[index] = item;
      },

      /*
       * @method 图片缩放
       * @param
       */
      handleScaleImage(evt) {
        let targetEl = evt.target;
        let src = targetEl.src;
        let pswpElement = document.querySelector('.J_pswp');
        let index = +targetEl.dataset.index || 0;
        let items = this.scaleImages;
        // let items = [src];

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

        // Initializes and opens PhotoSwipe
        let gallery = this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        gallery.init();
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

  .page-fixed {
    z-index: 1;
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }


  .live__auction {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: calc(100% - 100px);
    min-height: 520px;

    margin-bottom: 20px;

    background: #fff;
  }


  /*-------------------*\
    $ 筛选
  \*-------------------*/

  .auction__filter {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;

    .button, input {
      height: 48px;
      color: #AB9485;
      font-size: 22px;
    }

    .active {
      background: rgba(171,148, 113, 0.3);
    }

    .search__cmp {
      margin-right: 30px;
      margin-bottom: 0;

      color: #AB9485;
      border: 1px solid #AB9485;
      border-radius: 3px;

      .search__ipt {
        width: 350px;
        input:active {
          border: none;
        }
      }

      .search__ipt:active {
        border: none;
      }

      .search__btn {
        .button {
          width: 80px;
          border: none;
          border-left: 1px solid #AB9485;
        }
      }
    }

    .search__fields {
      .button {
        background: transparent;
        border: 1px solid #AB9485;
      }
    }
  }

  /*-------------------*\
    $ 内容展示
  \*-------------------*/

  .search__list {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
  }

  .auction__product--wrap {
     width: 100%;
  }

  .auction__product {
    margin: 20px auto 0;
  }


</style>
