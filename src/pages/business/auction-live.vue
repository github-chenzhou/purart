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
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <div>LOT2017100800003</div>
      </div>
      <!-- 拍品状态操作 -->
      <div class="product__status">
        <el-button type="" @click="handelstart">开始</el-button>
        <el-button type="" @click="handelpurse">暂停</el-button>
        <el-button type="primary" @click="handelconfirm">成交</el-button>
        <el-button type="" @click="">下一个</el-button>
      </div>
    </div>

    <el-form class="product__form" ref="form" :model="product" label-width="110px">
      <el-form-item label="网上用户出价">
        <el-col :span="3" class="pl10">
          <span>3200</span><span>￥</span>
        </el-col>
        <el-col :span="4" class="pl10">
          <span>网上用户数</span>
        </el-col>
        <el-col :span="3" class="pl10">
          <span>320</span>
        </el-col>
        <el-col :span="5" class="pl10">
          <el-button type="primary">确认</el-button>
        </el-col>
      </el-form-item>
      <el-form-item label="现场价格">
        <el-col :span="10" class="pl10">
          <el-input v-model="product.valuation" placeholder="现场价格" value=""></el-input>
        </el-col>
        <el-col :span="5" class="pl10">
          <el-button type="primary" @click="handelconfirm">提交</el-button>
        </el-col>
      </el-form-item>
      <el-form-item label="当前加价幅">
        <el-col :span="10" class="pl10">
          <el-input v-model="product.valuation" placeholder="当前加价幅" value=""></el-input>
        </el-col>
        <el-col :span="5" class="pl10">
          <el-button type="primary" @click="handelconfirm">确认</el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="现场人数">
        <el-col :span="10" class="pl10">
          <el-input v-model="product.valuation" placeholder="现场人数" value=""></el-input>
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
  name: 'business-product',
  props: {
    isCollapse: true
  },
  data () {
    return {
      // time
      curr_time: '',
      // 图片放大数组
      scaleImages: [],
      pics: [],
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
        // 市场估值
        valuation: '',
        // 材质
        material: [],
        // 尺寸单位
        measurement_unit: 'cm',
        // 长宽高
        inch: '',
        // 商品重量单位
        weight_unit: 'g',
        // 商品重量
        weight: '',
        // 商品状况
        item_status: '完好',
        // 来源
        come_from: '',
        // 所属国
        origin: '中国',
        // 所属国地区
        origin2: '',
        // 公元前 B.C. 公元 A.C.
        year: '公元',
        // 年份
        year2: '',
        // 类目
        // 一级类目
        category: '画意',
        // 二级类目
        category2: '',
        // 三级类目
        category3: '',
        // 作者
        author: '',

        // 商品图片
        pics:[]
      }
    }
  },
  created() {
    this.product.sale_id = +this.$route.params.id;
    this.product.auction_id = +this.$route.query.auction_id;

    if(this.product.sale_id) {
      this.getProduct(this.product.sale_id);
    }
  },
  mounted() {
    this.init();
  },
  methods: {

    init() {
      setInterval(() => {
        this.curr_time = moment().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
    /*
     * @method 根据排场读取拍品列表
     * @param
     */
    getProduct(sale_id) {
      let URL = API.business.GET_SALE;
      let params = {
        sale_id: sale_id
      };

      // auction
      return request.get(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;
            console.log(res);

            this.product = data;
            this.pics = this.product.pics;

            return data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    /*
     * @method 暂停
     * @param
     */
    handelpurse() {

    },

    /*
     * @method 暂停
     * @param
     */
    handelstart() {

    },

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
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~@/style/base.css";
  @import "~@/style/layout";

  .business__product {
    padding: 20px 0;
    max-width: 650px;
  }

  .live__products {
    padding: 0 17px 20px;
  }

  .carousel {
    padding-bottom: 25px;
    height: auto;
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

  /*-------------------*\
    $ 图片作答
  \*-------------------*/


  .image__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;

    padding: 15px 0 13px;

    .image--add {
      position: relative;

      margin: 0 0.8% 1.6%;
      width: 31.733%;
      padding-bottom: 31.733%;
      border-radius: 2px;
      border: 1px solid #C8C8C8;

      cursor: pointer;

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
