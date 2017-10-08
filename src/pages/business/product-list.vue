/*
 * @page：商家商品列表 组件
 * @author: chenzhou
 * @update: 2017.10.06
 * @desc
 *
 */

<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="编码"
      width="180">
      <template scope="scope">
        <!-- <el-icon name="time"></el-icon> -->
        <span style="margin-left: 10px">{{ scope.row.number }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="品类"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <!-- <p>姓名: {{ scope.row.category }}</p> -->
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.category }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="图片"
      width="180">
      <template scope="scope">
        <img style="margin-left: 10px" :src="scope.row.pics[0]" v-if="scope.row.pics.length" />
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)"><router-link :to="'/product/' + scope.row.sale_id" tag="span">编辑</router-link></el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'business-production-list',
  data () {
    return {
      auction_id: 0,
       tableData: [{

          number: 'LOT201710060001',
          category: '艺术品',
          pics: []
        }]
    }
  },
  created() {
    this.auction_id = +this.$route.params.id;

    if(this.auction_id) {
      this.getProductList(this.auction_id);
    }
  },
  methods: {
    /*
     * @method 根据排场读取拍品列表
     * @param
     */
    getProductList(auction_id) {
      let URL = API.business.SALE_LIST;
      let params = {
        auction_id: auction_id
      };

      // auction
      return request.get(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;
            console.log(res);

            this.tableData = data.list;

            return data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);

      let URL = API.business.DEL_SALE;
      let params = {
        'sale_id': row.sale_id
      }

      this.$confirm('确认删除拍品?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          return request.post(URL, params)
            .then((res) => {
            if(res && res.data) {
              let data = res.data;

              console.log(res);
              // 删除排场展示信息
              this.tableData.splice(index, 1);

              this.$message({
                type: 'success',
                message: '删除成功!'
              });

              return data;
            }
          })
          .catch(error => {
            console.log(error);
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
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
