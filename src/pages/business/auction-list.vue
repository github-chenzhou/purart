/*
 * @page：商家拍场列表
 * @author: chenzhou
 * @update: 2017.10.07
 * @desc
 *
 */

<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="拍场编码"
      width="280">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.auction_num }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="拍品列表"
      width="120">
      <template scope="scope">
        <span><router-link :to="'/products/' + scope.row.auction_id" tag="span">拍品列表</router-link></span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button size="small"><router-link :to="'/auction/' + scope.row.auction_id" tag="span">编辑</router-link></el-button>
        <el-button size="small"><router-link :to="{ name: 'business-product', params: { id: 0 }, query: { auction_id: scope.row.auction_id }}" tag="span">新增拍品</router-link></el-button>
        <el-button size="small"><router-link :to="{ name: 'business-auction-live', params: { id: scope.row.auction_id }}" tag="span">拍场现场</router-link></el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'business-auction-list',
  data () {
    return {
       tableData: [{
          auction_id: '10001',
          auction_num: 'LOT201710060001'
        }]
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let URL = API.business.GET_AUCTION_LIST;
      let params = {
        business_id: '1'
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

    /*
     * @method 删除排场
     * @param
     */
    handleDelete(index, row) {
      console.log(index, row);
      let URL = API.business.DEL_AUCTION;
      let params = {
        'auction_id': row.auction_id
      }

      this.$confirm('确认删除排场?', '提示', {
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
