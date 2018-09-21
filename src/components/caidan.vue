<template>
    <div >

          <el-menu
      :default-active="xuzhong"
      class="el-menu-vertical-demo">

             <el-menu-item index="0" @click="hf('')">
        <i class="el-icon-menu"></i>
        <span slot="title">店铺设置</span>
      </el-menu-item>


            <el-menu-item index="1" @click="hf('add_cp')">
        <i class="el-icon-menu"></i>
        <span slot="title">添加产品</span>
      </el-menu-item>

   <el-menu-item index="2" @click="hf('cp_list')">
        <i class="el-icon-menu"></i>
        <span slot="title">产品列表</span>
      </el-menu-item>
              
                 <el-menu-item index="3" @click="hf('chakanxuq')">
        <i class="el-icon-menu"></i>
        <span slot="title">查看需求</span>
      </el-menu-item>
              
              
                   <el-menu-item index="4" @click="hf('chakagmcp')">
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
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
