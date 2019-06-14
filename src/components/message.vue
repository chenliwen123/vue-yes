<template>
    <div>
      <el-row>
        <el-col :span="12">
          <el-button type="success" @click="message1">确定</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" @click="message2">确定</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><el-button type="success" @click="messagesuccess">成功</el-button></el-col>
        <el-col :span="6"><el-button type="warning" @click="messagewarning">警告</el-button></el-col>
        <el-col :span="6"><el-button type="danger" @click="messagedanger">错误</el-button></el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="8"><el-button type="success" @click="addclose1">成功</el-button></el-col>
        <el-col :span="8"><el-button type="warning" @click="addclose2">警告</el-button></el-col>
        <el-col :span="8"><el-button type="danger" @click="addclose3">错误</el-button></el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'message',
  data(){
    return{

    }
  },
  methods:{
    message1:function () {
      this.$message('这是一条提示框');
    },
    message2:function () {
      const h = this.$createElement;
      this.$message({
        message:h('p',null,[
          h('span',null,'我是一条提示'),
          h('i',{style:'color:#f00000;'},'好的'),
        ])
      });
    },
    messagesuccess:function () {
      const h =this.$createElement;
      this.$message({
        message:h('p',null,[
          h('strong',null,'我是一个成功的提示,'),
          h('span',{style:'font-weight:700;'},'我是成功提示的附属品'),
        ]),
        type:'success'
      })
    },
    messagewarning:function () {
      const h =this.$createElement;
      this.$message({
        message:h('span',null,'这是个警告的提示'),
        type:'warning'
      })
    },
    messagedanger:function () {
      this.$message.error('我是一条错误的提示')
    },
    addclose1:function () {
      this.$message({
        message:"我是可以关闭的成功提示",
        type:'success',
        showClose:true,
      })
    },
    addclose2:function () {
      this.$message({
        message:"我是可关闭的警告提示框",
        type:"warning",
        showClose:true,
      });
    },
    addclose3:function () {
      this.$message({
        message:"这是一条错误的提示",
        type:'error',
        showClose:true,
        center:true
      });
    }
  }
}
</script>
<!--
this.$message({
    message:""  提示文字 可以写标签
    如果想改变样式
    message:this.$createElement('标签名',{style:"样式"},'显示内容');
    showClose  默认值是false showClose:true,
    center 默认是false   center:true,
    type  有选项 success danger warning

})
-->
<style scoped>
a{text-decoration:none;}
</style>
