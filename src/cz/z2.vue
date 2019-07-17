<template>
    <div>
      <h2>我是第二个子组件</h2>
      <p>{{massage}}</p>
      <el-button v-on:click="sendmsgtoparent" plain type="success">向父组件传值</el-button>
    </div>
</template>

<script>
    export default {
        name: "z2",
      props:["massage"],
      data(){
          return{
          }
      },
      methods:{
        sendmsgtoparent:function () {
          this.$emit("listentochildevent","我是组价二 我是传过来的值");
        }
      }

    }
</script>

<style scoped>

</style>
