<template>
    <div >
         <el-container>
  <el-aside width="200px">


  <caidan xuzhong="0"></caidan>

    </el-aside>
  <el-main class="bgff">

        <section class="df_jh_dert">

            <p class="bbm pm15">店铺设置</p>

            <section class="pd pt20">

                <section class="sd_jh_deet">
             <el-form ref="ruleForm"  :model="ruleForm" :rules="rules" label-width="80px">
                    <el-form-item label="轮播图">
                        <section>

                            <el-upload
  action="http://127.0.0.1:8084/up_img"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
    :file-list="ruleForm.file_list"
:on-success="chengguong"
        >

  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>





      </section>

                    </el-form-item>




                    <el-form-item label="头像" >
                        <section>
             <el-upload
  class="avatar-uploader"
  action="http://127.0.0.1:8084/up_img"
  :show-file-list="false"
  :on-success="handleAvatarSuccess">
  <img v-if="ruleForm.fengmian" :src="ruleForm.fengmian" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </section>

                    </el-form-item>


      <el-form-item label="欢迎语" prop="hyy">
    <el-input v-model="ruleForm.hyy"></el-input>
  </el-form-item>

                  <el-form-item label="介绍" prop="jiesao">
    <el-input v-model="ruleForm.jiesao"></el-input>
  </el-form-item>

                  <el-form-item label="电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>

                  <el-form-item label="微信" prop="weixin">
    <el-input v-model="ruleForm.weixin"></el-input>
  </el-form-item>



         <el-form-item class="cen sdf_deeett">
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button class="dsf_deet">重置</el-button>
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
                dialogImageUrl: "",
                banner_url: [],
                dialogVisible: false,
                //                file_list: [{
                //                    url: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_a91ff3574c8d7c9a67edd3edc822fe1e.jpg"
                //                }],

                ruleForm: {
                    hyy: "", //欢迎语
                    jiesao: "", //介绍
                    phone: "",
                    weixin: "",
                    fengmian: "",
                    banner: "",
                    file_list: [],
                    banner: "",
                    fengmian: "", //头像
                },
                rules: {

                    hyy: {
                        required: true,
                        message: '请输入欢迎语',
                        trigger: 'blur'
                    },
                    jiesao: {
                        required: true,
                        message: '请输入介绍',
                        trigger: 'blur'
                    },
                    phone: {
                        required: true,
                        message: '请输入电话',
                        trigger: 'blur'
                    },
                    weixin: {
                        required: true,
                        message: '请输入微信',
                        trigger: 'blur'
                    }
                }
            }
        },
        components: {
            caidan
        },
        methods: {
            submitForm(formName) { //表单提交

                        var sd_err=[]
                        this.ruleForm.file_list.map(a=>{
                            sd_err.push(a.url)
                        })

                        this.ruleForm.banner = sd_err.join(",")
                        this.post("set_user", this.ruleForm, function(data) {})

//                            this.$refs[formName].validate((valid) => {
//                    if (valid) {
//                    } else {
//                        console.log('error submit!!');
//                        return false;
//                    }
//                });
            },
            handleAvatarSuccess(data) {
                this.ruleForm.fengmian = data.data
            },

            handleRemove(file, fileList) {
                console.log(fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            chengguong(data) {
                let da_der = {}
                da_der.url = data.data
                this.ruleForm.file_list.push(da_der)
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_deert {
        height: 100%;
    }

</style>
