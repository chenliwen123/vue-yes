<template>
    <div>
     <el-row>
       <el-col :span="6">
         <el-link @click="messagebox">你好啊！点我下试试</el-link>
       </el-col>
       <el-col :span="6">
         <el-link @click="messagesc">你真的要删除啊？</el-link>
       </el-col>
       <el-col :span="6">
         <el-link @click="messagesr">来输入点什么</el-link>
       </el-col>
       <el-col :span="6">
         <el-link @click="messagcancel">关闭和取消的区别</el-link>
       </el-col>
     </el-row>
    </div>
</template>

<script>
export default {
  name: 'messagetc',
  data(){
    return{

    }
  },
  methods:{
    messagebox:function () {
     const h= this.$createElement;
      this.$alert('这是一段内容','标题',{
        confirmButtonText:"确定",
        callback:action => {
          this.$message({
            message:h('p',{style:"color:#F00000;"},'这是回调出的内容'),
          })
        }
      });
    },
    messagesc:function () {
      this.$confirm('确认要删除吗？','标题',{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning"
      }).then(()=>{
        this.$message({
          message:"删除成功",
          type:"success",
        });
      }).catch(()=>{
        this.$message({
          type:"info",
          message:"取消删除"
        })
      })
    },
    messagesr:function () {
      this.$prompt('请输入你的邮箱','提示',{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage:"邮箱输入不合法",
      }).then(( {value} )=>{
        this.$message({
          message:'你的邮箱是'+value,
          type:"success"
        });
      }).catch(()=>{
        this.$message({
          message:"你取消了输入",
          type:"info"
        })
      })
    },
    messagcancel:function () {
      this.$confirm('检测到没有保存,确认保存嘛？','提示',{
        distinguishCancelAndClose:true,
        confirmButtonText:"保存",
        cancelButtonText:"取消",
      }).then(()=>{
        this.$message({
          type:"success",
          message:"保存成功"
        });
      }).catch(action=>{
        this.$message({
          type:"info",
          message:action=='cancel'? "放弃保存离开页面":"关闭留在本页"
        });
      })
    }
  //  then(({value})=>{value})   then 成功回调  value 写法 then(({value})=>{})
    // catch (actioin=>{})       反之的回调   value 写法   catch(action=>{
    //
    // })

    //this.$confirm('检测提示','title',{
    // confrimButtonText:"保存",
    // cancelButtonText:"取消",
    // });
  }
}
</script>

<style scoped>

</style>
