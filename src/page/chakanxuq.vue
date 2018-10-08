<template>
    <div >
         <el-container>
  <el-aside width="200px">


      <caidan xuzhong="3"></caidan>

    </el-aside>
  <el-main class="bgff">
      <jilu></jilu>
           <section class="df_jh_dert">
                   <p class="bbm pm15">查看需求</p>
               <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="openid"
           prop="user_id"
                   
       >
          
    </el-table-column>
                   
    <el-table-column
                     prop="xuqiu"
        label="需求"
       >
          
    </el-table-column>
                       <el-table-column
                     prop="phone"
        label="电话"
                                          width="200"  
       >
          
    </el-table-column>
                   
                     <el-table-column
        label="微信"
        prop="weixin"
        width="200"               
       >
    </el-table-column>
                   
                   
                   <el-table-column fixed="right" label="操作"    width="200"  >
    <template slot-scope="scope">
           <el-button type="text" v-if="scope.row.type==0" @click="scope.row.type=1;xiugai(scope.row.id)">确认</el-button>
            <el-button type="text" v-if="scope.row.type!=0">已完成</el-button>
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
    import jilu from "../components/jilu"
    
    export default {
        data() {
            return {
                tableData: ""
            }
        },
        components: {
            caidan,
            jilu
        },
        methods: {
            xiugai(id) {
                let th = this
                this.post("xiugai_xuqiu", {
                    id: id
                }, function() {
                    th.$alert('修改成功', '标题', {
                        confirmButtonText: '确定',
                        callback: action => {

                        }
                    })
                })
            },
            delect(id, idx) {
                let th = this
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => { 
                    this.post("del_xuqiu", {
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
            this.post("get_xuqiu", {}, function(data) {
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


</style>
