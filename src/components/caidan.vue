<template>
    <div >

          <el-menu
      :default-active="xuzhong"
      class="el-menu-vertical-demo">

             <el-menu-item index="0" @click="tiaozs('','店铺设置')">
        <i class="el-icon-menu"></i>
        <span slot="title">店铺设置</span>
      </el-menu-item>


            <el-menu-item index="1" @click="tiaozs('add_cp','添加产品')">
        <i class="el-icon-menu"></i>
        <span slot="title">添加产品</span>
      </el-menu-item>

   <el-menu-item index="2" @click="tiaozs('cp_list','产品列表')">
        <i class="el-icon-menu"></i>
        <span slot="title">产品列表</span>
      </el-menu-item>
              
                 <el-menu-item index="3" @click="tiaozs('chakanxuq','查看需求')">
        <i class="el-icon-menu"></i>
        <span slot="title">查看需求</span>
      </el-menu-item>
              
              
                   <el-menu-item index="4" @click="tiaozs('chakagmcp','查看购买的产品')">
        <i class="el-icon-menu"></i>
        <span slot="title">查看购买的产品</span>
      </el-menu-item>
              
              
              
              
               <el-menu-item index="20" @click="tuichu_er">
        <i class="el-icon-menu"></i>
        <span slot="title">退出登录</span>
      </el-menu-item>
              
              
    </el-menu>


    </div>
        </template>
<script>
    export default {
        props: {
            xuzhong: ""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            tuichu_er() {
                localStorage.token = ""
                this.hf("denglu")
            },
            tiaozs(url, name) {
                var sd_sddf = {},
                    th = this
                sd_sddf.cls = "act"
                sd_sddf.name = name
                sd_sddf.url = url
                this.$store.state.luyou_e.map((a, idx) => {
                    a.cls=""
                    if (a.name == name) {
                        this.$store.state.luyou_e.splice(idx, 1);
                    }
                })

                this.$store.state.luyou_e.push(sd_sddf)





                this.hf(url)
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
