<template>
  <div>
    <el-row>
      <el-button>确定</el-button>
      <el-button type="primary">确定</el-button>
      <el-button type="success">确定</el-button>
      <el-button type="info">确定</el-button>
      <el-button type="warning">确定</el-button>
      <el-button type="danger">确定</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button plain>确定</el-button>
      <el-button plain type="primary">确定</el-button>
      <el-button plain type="success">确定</el-button>
      <el-button plain type="info">确定</el-button>
      <el-button plain type="warning">确定</el-button>
      <el-button plain type="danger">确定</el-button>
    </el-row>
    <br>
<el-row>
  <el-button plain round>确定</el-button>
  <el-button plain round type="primary">确定</el-button>
  <el-button plain round type="success">确定</el-button>
  <el-button plain round type="info">确定</el-button>
  <el-button plain round type="warning">确定</el-button>
  <el-button plain round type="danger">确定</el-button>
</el-row>
    <br>
    <el-row>
      <el-button disabled >确定</el-button>
      <el-button disabled type="primary">确定</el-button>
      <el-button disabled type="success">确定</el-button>
      <el-button disabled type="info">确定</el-button>
      <el-button disabled type="warning">确定</el-button>
      <el-button disabled type="danger">确定</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button disabled plain>确定</el-button>
      <el-button disabled plain type="primary">确定</el-button>
      <el-button disabled plain type="success">确定</el-button>
      <el-button disabled plain type="info">确定</el-button>
      <el-button disabled plain type="warning">确定</el-button>
      <el-button disabled plain type="danger">确定</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button type="text">你好啊！年轻人</el-button>
      <el-button type="text" disabled> 你好 </el-button>
    </el-row>
    <br>
    <el-row>
      <el-button type="primary" class="el-icon-edit"></el-button>
      <el-button type="primary" class="el-icon-share"></el-button>
      <el-button type="primary" class="el-icon-delete"></el-button>
      <el-button type="primary" class="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>
      <el-button></el-button>
    </el-row>
    <br>
    <el-row>
      <el-button-group>
        <el-button type="primary" class="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-right el-icon-arrow-right"></i></el-button>
      </el-button-group>
    </el-row>
    <br>
    <el-row>
      <el-button type="primary">默认按钮</el-button>
      <el-button type="primary" size="medium">中等按钮</el-button>
      <el-button type="primary" size="small">小按钮</el-button>
      <el-button type="primary" size="mini">超小按钮</el-button>
    </el-row>
    <!--
    el-button
              type 按钮属性 primary
              plain  是否朴素
              disabled 是否禁止
              round  是否圆角
    -->
  </div>
</template>
<script>
export default {
  name:'uibutton',
  data(){
    return{

    }
  }
}
</script>
<style scoped type="scss">

</style>
