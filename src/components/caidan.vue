<template>
    <div >

          <el-menu
      :default-active="xuzhong"
      class="el-menu-vertical-demo">

             <el-menu-item index="0" @click="hf('')">
        <i class="el-icon-menu"></i>
        <span slot="title">店铺设置{{xuzhong}}</span>
      </el-menu-item>


            <el-menu-item index="1" @click="hf('add_cp')">
        <i class="el-icon-menu"></i>
        <span slot="title">添加产品</span>
      </el-menu-item>



    </el-menu>


    </div>
        </template>
<script>
    export default {
        props: {
            xuzhong:""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
