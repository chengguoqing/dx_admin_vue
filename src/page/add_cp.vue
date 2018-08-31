
<template>
    <div >
         <el-container>
  <el-aside width="200px">


      <caidan xuzhong="1"></caidan>

    </el-aside>
  <el-main class="bgff">
           <section class="df_jh_dert">
                   <p class="bbm pm15">添加产品</p>
                   <section class="pd pt20">

                <section class="sd_jh_deet">


        <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="封面">
                        <section>
             <el-upload
  class="avatar-uploader"
  action="http://duxinggj.com/in_banner"
  :show-file-list="false"
  :on-success="handleAvatarSuccess">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </section>

                    </el-form-item>



    <el-form-item label="类型">
      <section class="pl20">
             <el-radio v-model="radio" label="1">pc</el-radio>
             <el-radio v-model="radio" label="2">phone</el-radio>
             <el-radio v-model="radio" label="3">app</el-radio>
        </section>
    </el-form-item>

               <el-form-item label="标题">
                    <el-input></el-input>
                </el-form-item>

              <el-form-item label="金额">
                    <el-input></el-input>
                </el-form-item>
</el-form>


    </section>

    </section>

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
                radio:"1",
                imageUrl:""
            }
        },
        components: {
            caidan
        },
        methods: {
   handleAvatarSuccess(data){
                this.imageUrl="http://duxinggj.com"+data.path
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
