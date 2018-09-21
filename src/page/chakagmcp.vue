<template>
    <div >
         <el-container>
  <el-aside width="200px">


      <caidan xuzhong="4"></caidan>

    </el-aside>
  <el-main class="bgff">
           <section class="df_jh_dert">
                   <p class="bbm pm15">查看购买的产品</p>
               <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="openid"
           prop="openid"
                       width="300"  
                   
       >
          
    </el-table-column>
                   
    <el-table-column
        label="封面"
                      width="150"  
       >
           <template slot-scope="scope">
               
           <img :src="scope.row.fengmian" class="femhn_dert">    
</template>

</el-table-column>



<el-table-column prop="title" label="标题">

</el-table-column>
<el-table-column prop="jiner" label="金额" width="200">

</el-table-column>




<el-table-column fixed="right" label="操作" width="200">
    <template slot-scope="scope">
      
           <el-button type="text" @click="delect(scope.row.id,scope.$index)">删除</el-button>
      </template>
</el-table-column>




</el-table>


</section>

</el-main>
</el-container>



</div>
</template>
<script>
    import caidan from "../components/caidan"
    export default {
        data() {
            return {
                tableData: ""
            }
        },
        components: {
            caidan
        },
        methods: {

            delect(id, idx) {
                let th = this
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.post("del_cmcp", {
                        id: id
                    }, function() {
                        th.tableData.splice(idx, 1);
                    })
                }).catch(() => {

                });

            },
        },
        mounted() {
            let th = this
            this.post("get_cp_sd_sy", {}, function(data) {
                th.tableData = data
            })
        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            time_er(num) {

                return 222
            }
        }
    }

</script>
<style scoped>
    .femhn_dert {
        width: 100px;
        height: 100px;
    }

</style>
