<template>
<div >
  <section class="df_deeert">
                <p class="sd_jh_deer" :class="sd.cls" v-for="(sd,idx) in $store.state.luyou_e" @click="tiaodf(sd)">
                    {{sd.name}}
            <i class="el-icon-close df_dder" @click.stop="sd_dff(idx)"></i>
            </p>
            </section>

</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            tiaodf(sd){
                this.$store.state.luyou_e.map(a=>{
                    a.cls=""
                })
                sd.cls="act"
                this.hf(sd.url)
            },
            sd_dff(idx) {
                this.$store.state.luyou_e.splice(idx, 1);
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .df_deeert {
        background: #223538;

    }

    .sd_jh_deer {
        display: inline-block;
        padding: 10px 20px;
        color: #fff;
        cursor: pointer;
        
        position: relative
    }
    .sd_jh_deer.act,.sd_jh_deer:hover{
        background: #000000;
    }

    .df_dder {
        position: absolute;
        right: 0px;
        top: 0px;
        display: none
    }
    .sd_jh_deer.act .df_dder, .sd_jh_deer:hover .df_dder{
        display: block
    }
 

</style>
