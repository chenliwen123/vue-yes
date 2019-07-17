<template>
    <div>
      <z2 v-bind:massage="mag" v-on:listentochildevent="function123456"></z2>
    </div>
</template>

<script>
  import z2 from "./z2"
    export default {
      name: "f.vue",
      components:{z2},
      data(){
          return{
            mag:"hello,msg"
          }
      },
      methods:{
        function123456:function (data) {
          console.log(data);
        }
      }
    }
</script>

<style scoped>

</style>
