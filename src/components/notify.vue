<template>
    <div>
      <el-button plain @click="notify1">这是一个会关闭的</el-button>
      <el-button olain @click="notify2">我是不会自动关闭的</el-button>
    </div>
</template>

<script>
export default {
  name: 'notify',
  data(){
    return{

    }
  },
  methods:{
    notify1:function () {
      const h = this.$createElement;
      this.$notify({
        title:"标题",
        message:h('p',{style:"color:teal"},'hello,hello'),
      });
    },
    notify2:function () {
      this.$notify({            //this.$notify $notify
        title:"ahahahahahahah",   //标题啦
        message:"我是一段内容",  //这是弹出时显示的内容
        duration:0,             //显示时间 0为一直显示   默认是4500 毫秒
        position:"bottom-right", //提示位置
        type:"success",       //提示类型
        customClass:"calss1",//自定义class
        showClose:true,   //是否显示关闭按钮  默认是true
        onclose:" ",   //关闭的时候调用函数
        dangerouslyUseHTMLString:true //message是否可以写标签   默认是false
      });
    }
  }
}
</script>

<style scoped>

</style>
