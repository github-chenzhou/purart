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
      <div class="auction__product" v-for="product in list">
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
        <div class="auction--btn">一键拍卖</div>
      </div>

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
  import { configWX } from '@/util/wx-util'

  import HeaderComponent from '@/components/header'
  import FooterComponent from '@/components/footer'


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
      HeaderComponent,
      FooterComponent
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

        this.getSaleInfo();

        // 图标数据 已完成 已看 班级人数
        this.drawPie([3, 10], document.querySelectorAll('.J_round svg')[0]);
        this.drawPie([4, 10], document.querySelectorAll('.J_round svg')[1]);
        this.drawPie([7, 10], document.querySelectorAll('.J_round svg')[2]);

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
       * @method 画弧线
       * @param
       */
      drawPie(arr, svg) {
        let self = this;
        // 1.算比例
        var sum = arr[1];

        // 如果班级一个人都没有，则不画饼图
        if(sum == 0) return;

        var aScale = [];
        for(var i=0;i<arr.length;i++) {
          aScale[i]=arr[i]/sum;
        }

        // 2.算角度
        var aAngle=[];
        for(var i = 0; i < arr.length; i++) {
          aAngle[i] = 270 * aScale[i];
        }

        // var svg = document.querySelector('.J_round svg');

        var r = 33;
        var centX = 150, centY = 75;

        var path = self.createSVG('path');
        path.setAttribute("d", this.describeArc(centX, centY,r, 225, 225 + aAngle[0]));
        path.setAttribute("style","fill:#F3F3F3;stroke:#000000;stroke-width:5");
        svg.appendChild(path);

        var path3 = self.createSVG('path');
        path3.setAttribute("d", this.describeArc(centX, centY, r, 225 + aAngle[0], 225 + aAngle[1]));
        path3.setAttribute("style","fill:#F3F3F3;stroke:#AB9485;stroke-width:5");
        svg.appendChild(path3);
      },
      // 创建svg元素
      createSVG(tag) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
      },
      describeArc(x, y, radius, startAngle, endAngle) {
        var start = this.polarToCartesian(x, y, radius, endAngle);
        var end = this.polarToCartesian(x, y, radius, startAngle);

        var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
          "M", start.x, start.y,
          "A", radius, radius, 0, arcSweep, 0, end.x, end.y
        ].join(" ");

        return d;
      },
      polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
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

  .el-carousel__button {
    width: 20px;
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
    height: calc(100% - 110px);
    // min-height: 667px;
    min-height: 520px;

    margin-bottom: 20px;

    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    background: #fff;
  }

  .auction__product {
    // width: 375px;
    // min-height: 667px;
    width: 380px;
    height: 100%;
    min-height: 520px;

    // background: #ccc;
    .product__info {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 480px;

      background-image: url(http://ox4oktbuv.bkt.clouddn.com/o_1btj7tr89btv1cak1i3o73qdvm25.png);
      background-position: center, center;
      background-repeat: no-repeat;
      background-size: cover;

      .product__wrap {
        padding-top: 60px;
      }

      .product__inner {
        margin:0 auto;

        .image_wrap {
          box-sizing: border-box;
          margin: 10px auto 15px;

          width: 188px;
          height: 188px;
          // background: #CA8D28;

          .image__wrapper {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .live--image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .product__title {
          padding: 0 7px;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          font-size: 15px;
          color: #000;
        }
        .product__desc {
          font-size: 12px;
          color: #4A4A4A;
        }

      }

      .auction__round {
        z-index: 1;
        position: absolute;
        top: -50px;

        margin: auto;
        left: 0;
        right: 0;

        svg {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }

        .round__info {
          position: absolute;
          top: 52px;
          left: 50%;
          transform: translateX(-50%);

          line-height: 1;
          font-size: 10px;
          color: #AB9485;

          .round--count {
            font-size: 26px;
            color: #000;
          }
        }
      }

      .product__bid {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 120px;
        font-size: 12px;

        img {
          display: block;
          margin: 0 auto;
          width: 70px;
          height: 70px;
        }

        .price__list {
          position: relative;
          .price__item {
            display: inline-block;
          }
          .price__item:nth-child(1) {
            position: absolute;
            top: 45px;
            left: 0;

            transform: rotate(-90deg);
          }

          .price__item:nth-child(2) {
            position: absolute;
            top: 13px;
            left: 13px;
            transform: rotate(-45deg);
          }

          .price__item:nth-child(4) {
            position: absolute;
            top: 13px;
            right: 13px;
            transform: rotate(45deg);
          }

          .price__item:nth-child(5) {
            position: absolute;
            transform: rotate(90deg);
            top: 45px;
            right: 0;
          }
        }
      }
    }

    .auction--btn {
      margin: 17px auto 0;
      width: 140px;
      height: 35px;
      line-height: 35px;

      font-size: 16px;
      color: #fff;
      text-align: center;
      background: #AB9485;
      box-shadow: 0 1px 3px rgba(0,0,0,0.5);
      border-radius: 4px;
    }
  }






  /*-------------------*\
    $ 网络超时重连
  \*-------------------*/

  .index__footer {
    width: 100%;
  }



</style>
