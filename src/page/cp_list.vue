<!--产品列表-->
<template>
    <div >
         
                 <el-container>
  <el-aside width="200px">


      <caidan xuzhong="2"></caidan>

    </el-aside> 
  <el-main class="bgff">
            <section class="df_jh_dert">
                <jilu></jilu>
                   <p class="bbm pm15">产品列表</p>
                
                <section>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="添加时间"
        width="180">
          <template slot-scope="scope">
              <span v-text="time_c(scope.row.add_time)"></span>
        
</template>
</el-table-column>
<el-table-column prop="title" label="标题">
</el-table-column>
<el-table-column prop="jiner" label="金额">
</el-table-column>

<el-table-column prop="leixing_text" label="类型">
</el-table-column>


<el-table-column fixed="right" label="操作">
    <template slot-scope="scope">
        <el-button type="text" @click="shezhi_e(scope.row.id,scope.$index,1)" v-if="scope.row.is_index==0">首页推荐</el-button>
 <el-button type="text" @click="shezhi_e(scope.row.id,scope.$index,0)" v-else>取消首页推荐</el-button>

        <el-button type="text" @click="handleClick(scope.row.id)">编辑</el-button>
           <el-button type="text" @click="delect(scope.row.id,scope.$index)">删除</el-button>
      </template>
</el-table-column>



</el-table>



</section>

</section>




</el-main>

</el-container>

</div>
</template>
<script>
    import caidan from "../components/caidan"
     import jilu from "../components/jilu"

    export default {
        data() {
            return {
                tableData: []
            }
        },
        components: { 
            caidan,
            jilu
        },
        methods: {
            handleClick(id) { //编辑
                this.hf('add_cp?id=' + id)
            },
            delect(id, idx) {
                let th = this
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.post("delect_er", {
                        id: id
                    }, function() {
                        th.tableData.splice(idx, 1);
                    })
                }).catch(() => {

                });

            },
            shezhi_e(id, idx, idexer) { //首页推荐

                let cps_e = {},
                    th = this
                cps_e.id = id
                cps_e.type = 1
                cps_e.is_index = idexer
               
                this.post("xiugai_cp_w", cps_e, function(data) {
                    th.tableData[idx].is_index = idexer
                })
            }
        },
        mounted() {
            let th = this
            this.post("get_cp", {}, function(data) {

                th.tableData = data
            })
        },
    }

</script>
<style scoped>


</style>
