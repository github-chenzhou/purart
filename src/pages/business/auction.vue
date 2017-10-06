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
          <el-option label="99:1" value="jinshu"></el-option>
          <el-option label="98:2" value="beijing2"></el-option>
          <el-option label="100:2" value="shanghai22"></el-option>
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
        <el-button>取消</el-button>
      </el-form-item>

     </el-form>
  </div>
</template>

<script>
export default {
  name: 'business-auction',
  props: {
    isCollapse: true
  },
  data () {
    return {
      auction: {
        summary: '',
        commission_rate: '',
        date: '',
        time: '',
      }
    }
  },
  methods: {
    handelconfirm() {
      // let URL = 'http://47.95.231.215:8000/seller/auction_input/';
      let URL = API.business.CREAT_BUSINESS || '/seller/sale_input/';

      // auction
      return request.post(URL, this.auction)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            console.log(res);

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
  }
</style>
