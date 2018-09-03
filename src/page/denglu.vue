<template>
    <div >
          <div class="denglu_erert">
     <vue-particles color="#dedede"   :linesWidth="3"   :lineOpacity="0.5" class="bg_fdert"></vue-particles>  
    </div>
        
    <section class="denglu_ert">
        <p class="fz18 z3">用户登录</p>
        
          <el-form   class="mt20">
               <el-form-item  class="fz16 z3">
    <el-input placeholder="请输入用户名" v-model="form_r.phone"></el-input>
                
  </el-form-item>
              
               <el-form-item class="fz16 z3">
      <el-input placeholder="请输入密码" type="password" v-model="form_r.user_password"></el-input>
  </el-form-item>
           <el-form-item class="fz16 z3 mt40">
                <el-button type="primary" class="fz16 w100" @click="denglu">登录</el-button>
    </el-form-item>
               
              
               
    </el-form>
        
    </section>
   
      
      
    </div>
        </template>
<script>
    export default {
        data() {
            return {
                form_r:{
                    phone:"",
                    user_password:""
                }
            }
        },
        components: {

        },
        methods: {
            denglu(){
                let th=this
                this.post("load_in",this.form_r,function(data,dataer){
                    localStorage.token=dataer.token
                    th.hf("")
                })
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .denglu_ert .el-input__inner {
        font-size: 16px;
        color: #333
    }

</style>
<style scoped>
    .denglu_erert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: url("../assets/img/denglu.jpg") center center;
        background-size: cover;
    }

    .denglu_ert {
        width: 350px;
        height: 280px;
        background: rgba(255, 255, 255, 0.6);
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
        border-radius: 4px;
        padding: 20px;
    }

</style>
