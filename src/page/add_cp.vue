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


        <el-form ref="ruleForm" :model="ruleForm" label-width="80px">

                <el-form-item label="封面">
                        <section>
             <el-upload
  class="avatar-uploader"
  action="http://127.0.0.1:8084/up_img"
  :show-file-list="false"
  :on-success="handleAvatarSuccess">
  <img v-if="this.ruleForm.fengmian" :src="this.ruleForm.fengmian" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </section>

                    </el-form-item>



    <el-form-item label="类型">
      <section class="pl20">
             <el-radio v-model="ruleForm.leixing" label="1">pc</el-radio>
             <el-radio v-model="ruleForm.leixing" label="2">phone</el-radio>
             <el-radio v-model="ruleForm.leixing" label="3">app</el-radio>
        </section>
    </el-form-item>

               <el-form-item label="标题">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>

              <el-form-item label="金额">
                    <el-input v-model="ruleForm.jiner"></el-input>
                </el-form-item>
            
                   <el-form-item label="网盘地址" >
                    <el-input v-model="ruleForm.wangpan"></el-input>
                </el-form-item>
            
                    <el-form-item label="详情">
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
            
            <el-form-item class="cen sdf_deeett mt40">
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
    import shiti from "../shiti.js"
    export default {
        data() {
            return {
                imageUrl: "",
                dialogImageUrl: "",
                dialogVisible: false,
                ruleForm: {
                    fengmian: "", //封面
                    leixing: "1", //类型
                    leixing_text: "", //类型中文
                    title: "", //标题
                    jiner: "", //金额
                    wangpan: "", //网盘地址
                    xiangqing: "",
                    file_list: []
                }
            }
        },
        components: {
            caidan
        },
        methods: {
            submitForm() { //提交
                var sd_err = []
                this.ruleForm.file_list.map(a => {
                    sd_err.push(a.url)
                })
                let th = this
                this.ruleForm.xiangqing = sd_err.join(",")
                if (this.ruleForm.leixing == 1) {
                    this.ruleForm.leixing_text = "pc"
                }
                if (this.ruleForm.leixing == 2) {
                    this.ruleForm.leixing_text = "phone"
                }
                if (this.ruleForm.leixing == 3) {
                    this.ruleForm.leixing_text = "app"
                }
                if (this.$route.query.id) {
                    this.post("xiugai_cp_w", this.ruleForm, function(data) {
                        
                        th.$alert('修改成功', '标题', {
                            confirmButtonText: '确定',
                            callback: action => {
                                th.hf("cp_list")
                            }
                        })
                    })
                } else {
                    this.post("add_cp", this.ruleForm, function(data) {
                        th.$alert('添加成功', '标题', {
                            confirmButtonText: '确定',
                            callback: action => {
                                th.hf("cp_list")
                            }
                        })
                    })
                }



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



            let th = this
            if (this.$route.query.id) {
                this.post("get_cp_w", {
                    id: this.$route.query.id
                }, function(data) {
                    th.ruleForm = data[0]
                    let ing_er = []


                    data[0].xiangqing.split(",").map(a => {
                        let sd_ert = {}
                        sd_ert.url = a
                        ing_er.push(sd_ert)
                    })


                    console.log(ing_er);
                    th.ruleForm.file_list = ing_er
                })
            }

        },
    }

</script>
<style scoped>


</style>
