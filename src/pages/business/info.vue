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
        <el-col :span="18" class="pl10">
          <el-input v-model="business.address2" placeholder="拍行地址" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="街道">
        <el-input v-model="business.street" placeholder="街道" value=""></el-input>
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
      <el-form-item label="加价幅度">
        <el-input v-model="business.increase_rate" placeholder="加价幅度" value=""></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handelconfirm" >确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'business-info',
  props: {
    isCollapse: true
  },
  data () {
    return {
       business: {
        // 拍行名称
        name: '',
        // 拍行地址
        address: '',
        address2: '',
        // 街道
        street: '',
        // 拍行邮编
        zip_code: '',
        email: '',
        tel: '',
        // 拍行简介
        intro: '',
        // 加价幅度
        increase_rate: ''
      }
    }
  },
  methods: {
    handelconfirm() {
      let URL = API.business.CREAT_BUSINESS || 'http://47.95.231.215:8000/seller/business_input/';

      // lessons
      return request.post(URL, this.business)
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
    max-width: 650px;
  }
</style>
