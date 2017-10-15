/*
 * @page：商家拍场信息 组件
 * @author: chenzhou
 * @update: 2017.10.03
 * @desc
 *
 */

<template>
  <!-- 拍场信息 -->
  <div class="business__product">
    <el-form class="product__form" ref="form" :model="auction" label-width="80px">
      <el-form-item label="拍品概括">
        <el-input type="textarea" v-model="auction.summary" placeholder="拍品概括" value=""></el-input>
      </el-form-item>
      <el-form-item label="佣金比例">
        <el-select v-model="auction.commission_rate" filterable allow-create placeholder="请选择佣金比例">
          <el-option label="99:1" value="1"></el-option>
          <el-option label="98:2" value="2"></el-option>
          <el-option label="100:2" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="拍卖日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="auction.date" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="11" class="pl10">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="auction.time" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handelconfirm">立即创建</el-button>
        <el-button @click="handelreset">重置</el-button>
      </el-form-item>

     </el-form>
  </div>
</template>

<script>

import moment from 'moment';

export default {
  name: 'business-auction',
  props: {
    isCollapse: true
  },
  data () {
    return {
      auction: {
        auction_id: 0,
        // 排场编码
        auction_num: '',
        business_id: 1,
        summary: '',
        commission_rate: '',
        date: '',
        time: ''
      },
      oReset: {
        summary: '',
        commission_rate: '',
        date: '',
        time: ''
      }
    }
  },
  created() {
    this.auction.auction_id = +this.$route.params.id;

    if(this.auction.auction_id) {
      this.getAuction(this.auction.auction_id);
    }
  },
  methods: {
    /*
     * @method 图片放大
     * @param
     */
    getAuction(auction_id) {
      let URL = API.business.GET_AUCTION;
      let params = {
        auction_id: auction_id
      };

      // auction
      return request.get(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            console.log(res);

            this.auction = data;
            this.auction.date = moment(this.auction.date, "YYYY-MM-DD HH-mm-ss");
            this.auction.time = moment(this.auction.date, "YYYY-MM-DD HH-mm-ss");

            return data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    /*
     * @method 重置
     * @param
     */
    handelreset(evt) {
      this.auction = Object.assign(this.auction, this.oReset, {

      });
    },

    handelconfirm() {
      let URL = API.business.CREAT_AUCTION;
      let params = {
        auction_id: this.auction.auction_id,
        business_id: this.auction.business_id,
        summary: this.auction.summary,
        commission_rate: this.auction.commission_rate,
        date: this.auction.date
      };

      params['date'] = moment(this.auction.date).format('YYYY-MM-DD') + ' ' + moment(this.auction.time).format('HH-mm-ss');

      console.log(params);

      // auction
      return request.post(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            this.$message({
              showClose: true,
              message: '排场信息创建成功',
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
  .business__product {
    padding: 20px 0;
    max-width: 650px;
  }
</style>
