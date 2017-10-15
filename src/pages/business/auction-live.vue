/*
 * @page：商家拍场直播
 * @author: chenzhou
 * @update: 2017.10.08
 * @desc
 *
 */

<template>
  <!-- 拍品信息 -->
  <div class="business__product">
    <!-- 当前时间 -->
    <div class="">当前时间：{{ curr_time }}</div>
    <!-- 排场拍品列表 -->
    <div class="live__products">
      <div class="carousel">
        <el-carousel :interval="4500" type="card" height="200px" v-if="product.pics.length">
          <el-carousel-item v-for="(item, index) in product.pics" :key="item">
            <div class="image__wrapper"><img class="live--image" :data-index="index" :src="item" :alt="product.number" @load="handlelaodImg" @click="handleScaleImage" /></div>
          </el-carousel-item>
        </el-carousel>
        <div>{{ product.number }}</div>
      </div>
      <!-- 拍品状态操作 -->
      <div class="product__status">
        <el-button type="" @click="handelstart">开始</el-button>
        <el-button type="" @click="handelpause">暂停</el-button>
        <el-button type="primary" @click="handelconfirm">成交</el-button>
        <el-button type="" @click="handelnext">下一个</el-button>
      </div>
    </div>

    <el-form class="product__form" ref="form" :model="product" label-width="110px">
      <el-form-item label="网上用户出价">
        <el-col :span="3" class="pl10">
          <span>{{ online.user_price }}</span><span>￥</span>
        </el-col>
        <el-col :span="6" class="pl10">
          <span>出价人数: <span>{{ online.bid_user_num }}</span></span>
        </el-col>
        <el-col :span="6" class="pl10">
          <span>网上用户数: <span>{{ online.user_num }}</span></span>
        </el-col>
        <el-col :span="5" class="pl10">
          <el-button type="primary">确认</el-button>
        </el-col>
        <div class="arrow-right icon" v-if="owner"></div>
      </el-form-item>
      <el-form-item label="现场价格">
        <el-col :span="10" class="pl10">
          <el-input v-model="product.price" placeholder="现场价格" value=""></el-input>
        </el-col>
        <el-col :span="5" class="pl10">
          <el-button type="primary" @click="handelconfirm">提交</el-button>
        </el-col>
        <div class="arrow-right icon" v-if="!owner"></div>
      </el-form-item>
      <el-form-item label="当前加价幅">
        <el-col :span="10" class="pl10">
          <el-input v-model="product.increase_rate" placeholder="当前加价幅" value=""></el-input>
        </el-col>
        <el-col :span="5" class="pl10">
          <el-button type="primary" @click="handelconfirm">确认</el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="现场人数">
        <el-col :span="10" class="pl10">
          <el-input v-model="product.w" placeholder="现场人数" value=""></el-input>
        </el-col>
        <el-col :span="5" class="pl10">
          <el-button type="primary" @click="handelconfirm">提交</el-button>
        </el-col>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'business-live',
  props: {
    isCollapse: true
  },
  data () {
    return {
      // time
      curr_time: '',
      // 图片放大数组
      scaleImages: [],
      // 该商品归属网上用户: 1  还是现场: 0
      owner: 0,
      // 商品序号
      index: 0,
      products: [
        {
          sale_id: 1001,
          currency: '￥',
          number: 'LOT2017100800003',
          price: '3000',
          increase_rate : 50,
          pics:[
            "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805nl5i5en1v2766118mub.jpeg",
            "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg",
            "http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n5af1qp41r3f5lojcld.jpeg",
            "http://ox4oktbuv.bkt.clouddn.com/o_1brt9nicb12aro15b1ifqk101mg.jpeg"]
        }
      ],
      product: {
        sale_id: 0,
        // 排场ID
        auction_id: 3,
        // 商品编号
        number: '',
        // 币种
        currency: '￥',
        // 起拍价格
        price: '',
        // 商品图片
        pics:[]
      },
      // 网上
      online: {
        "user_price": 0,
        "bid_user_num": 0,
        "user_num": 0
      }
    }
  },
  created() {
    this.auction_id = +this.$route.params.id;

    if(this.auction_id) {
      this.getProductList(this.auction_id);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // this.product = this.products[0];
      setInterval(() => {
        this.curr_time = moment().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
    /*
     * @method 根据排场读取拍品列表
     * @param
     */
    getProductList(auction_id) {
      let URL = API.business.SALE_LIST;
      let params = {
        auction_id: auction_id,
        status: 1
      };

      // auction
      return request.get(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            this.products = data.list;
            this.product = this.products[0];

            this.getOnline(this.product.sale_id);

            return data;
          }
        })
        .catch(error => {
          this.product = this.products[0];
          console.log(error);
        });
    },

    getOnline(sale_id) {
      let URL = API.business.GET_ONLINE;
      let params = {
        sale_id: sale_id
      };

      // auction
      return request.get(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            this.online = data;
            return data;
          }
        })
        .catch(error => {
          this.product = this.products[0];
          console.log(error);
        });
    },

    /*
     * @method 暂停
     * @param
     */
    handelpause() {
      let URL = API.business.CREAT_PRODUCT;

      this.$message({
        type: 'success',
        message: '拍卖已暂停'
      });
    },

    /*
     * @method 暂停
     * @param
     */
    handelstart() {
      let URL = API.business.CREAT_PRODUCT;

      this.$message({
        type: 'success',
        message: '拍卖已开始'
      });
    },

    /*
     * @method 下一个拍品
     * @param
     */
    handelnext() {
      this.index = this.index + 1;

      if(this.index <= this.products.length) {
        this.product = this.products[this.index];

        this.getOnline(this.product.sale_id);
      }
    },

    /*
     * @method 确认
     * @param
     */
    handelconfirm() {
      let URL = API.business.CREAT_PRODUCT;

      // product
      return request.post(URL, this.product)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            console.log(res);

            this.$message({
              showClose: true,
              message: '拍品创建成功',
              type: 'success'
            });

            return data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

     /*
     * @method 图片加载完成回调
     * @param
     */
    handlelaodImg(evt) {
      let target = evt.target;
      // .pic-view
      // let parentEl = target.parentNode;
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~@/style/base.css";
  @import "~@/style/layout";

  .business__product {
    margin: 0 auto;
    padding: 10px 20px 20px;
    max-width: 650px;
  }

  .live__products {
    padding: 0 17px 20px;
  }

  .carousel {
    padding-bottom: 25px;
    height: auto;

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

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .arrow-right.icon {
    position: absolute;
    left: -125px;
    top: 7px;
    color: red;
    margin-left: 2px;
    margin-top: 10px;
    width: 16px;
    height: 1px;
    background-color: currentColor;
  }

  .arrow-right.icon:before {
    content: '';
    position: absolute;
    right: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 1px currentColor;
    border-right: solid 1px currentColor;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }

</style>
