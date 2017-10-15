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
      <el-form-item label="拍行名称" prop="name" :rules="[{required: true, message: '拍行名称不能为空'}]">
        <el-input v-model="business.name" placeholder="拍行名称" value="拍行名称"></el-input>
      </el-form-item>
      <el-form-item label="拍行地址">
        <el-col :span="5">
          <el-select v-model="business.address" placeholder="请选拍行地址">
            <el-option label="中国" value="中国"></el-option>
            <el-option label="美国" value="美国"></el-option>
            <el-option label="非洲" value="非洲"></el-option>
            <el-option label="欧洲" value="欧洲"></el-option>
            <el-option label="日本" value="日本"></el-option>
          </el-select>
        </el-col>
        <el-col :span="13" class="pl10">
          <el-input v-model="business.address2" placeholder="省市" value=""></el-input>
        </el-col>
        <!--  <el-col :span="13" class="pl10">
          <el-input v-model="business.address3" placeholder="区县街道" value=""></el-input>
        </el-col> -->
      </el-form-item>
      <el-form-item label="街道" prop="street" :rules="[{required: true, message: '街道不能为空'}]">
        <el-input v-model="business.street" placeholder="街道" value=""></el-input>
      </el-form-item>
      <el-form-item label="拍行邮编" prop="zip_code" :rules="[{required: true, message: '邮编不能为空'}]">
        <el-input v-model="business.zip_code" placeholder="拍行邮编" value=""></el-input>
      </el-form-item>
      <el-form-item label="拍行邮箱" prop="email" :rules="[{required: true, message: '邮箱不能为空'},
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
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
        <el-button @click="handelreset">重置</el-button>
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
        business_id: 0,
        // 拍行名称
        name: '',
        // 拍行地址
        address: '中国',
        address2: '',
        // address3: '',
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
      },
      oReset: {
        // 拍行名称
        name: '',
        // 拍行地址
        address: '中国',
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
  created() {
    this.business.business_id =  +this.$route.params.id || 0;

    if(this.business.business_id) {
      this.getProduct(this.product.sale_id);
    }
  },
  methods: {
    /*
     * @method 读取拍卖行信息
     * @param
     */
    getBusiness() {
      let URL = API.business.GET_BUSINESS;
      let params = {
        business_id: this.business.business_id
      };

      // business
      return request.get(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            console.log(res);

            this.business = data;

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
      this.business = Object.assign(this.business, this.oReset, {

      });
    },

    /*
     * @method 拍行提交
     * @param
     */
    handelconfirm() {
      let URL = API.business.CREAT_BUSINESS;

      // lessons
      return request.post(URL, this.business)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            console.log(res);

            this.$message({
              showClose: true,
              message: '拍行创建成功',
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
