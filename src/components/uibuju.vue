<template>
  <div>
<el-container>
  <el-header>Header</el-header>
  <el-main>admin</el-main>
</el-container>
    <br>
    <el-container>
      <el-header>header</el-header>
      <el-main>main</el-main>
      <el-footer>footer</el-footer>
    </el-container>
    <br>
    <el-container>
      <el-aside>aside</el-aside>
      <el-main>main</el-main>
    </el-container>
    <br>
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside>aside</el-aside>
        <el-main>main</el-main>
      </el-container>
    </el-container>
    <br>
<el-container>
  <el-header>header</el-header>
  <el-container>
    <el-aside>aside</el-aside>
<el-container>
  <el-main>main</el-main>
  <el-footer>footer</el-footer>
</el-container>
  </el-container>
</el-container>
    <br>
    <el-container>
      <el-aside>aside</el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>main</el-main>
      </el-container>
    </el-container>
    <br>
    <el-container>
      <el-aside>aside</el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>main</el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
    <br>


    <el-container>
      <el-aside style="width:300px;height:500px;border:1px solid #eee;">
        <el-menu :default-openeds="['1','1-4']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">选项一</el-menu-item>
              <el-menu-item index="1-2">选项二</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="1-3">选项三</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项四</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="2-1">选项一</el-menu-item>
              <el-menu-item index="2-2">选项二</el-menu-item>
              <el-menu-item index="2-3">选项三</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="2-5">选项四</el-menu-item>
              <el-menu-item index="2-6">选项五</el-menu-item>
              <el-menu-item index="2-7">选项六</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">分组三</template>
              <el-menu-item-group>
                <el-menu-item index="2-4-1">分组三--1</el-menu-item>
                <el-menu-item index="2-4-2">分组三--2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项一</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container style="height:500px;">
        <el-header style="text-align:right;font-size:12px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right:15px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>编辑</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>chenliwen</span>
        </el-header>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" class="title" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
    <!--
    el-container 容器标签
    el-header 头部标签
    el-aside  左侧标签
    el-footer 尾部标签
    el-menu   菜单标签 :default-openeds=['1','3'] 几个菜单默认显示第一个 和第三个
    el-submenu 菜单列表 index 索引
    template 导航按钮 slot='title'
    el-menu-item-group 选项分组
    el-menu-item 列表选项 index带索引
    -->
  </div>
</template>
<script>
export default {
  name:'uibuju',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
};
</script>
<style scoped type="scss">

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    width:100px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .inner{
     width: 265px;
    height: 400px;
    position: absolute;
top: 33px;
   left: 13px;
    overflow:hidden;}
          .innerbox{
  overflow-x: hidden;
    overflow-y: auto;
    color: #000;
    font-size: .7rem;
    font-family: "\5FAE\8F6F\96C5\9ED1",Helvetica,"黑体",Arial,Tahoma;
   height: 100%;}
          /*滚动条样式*/
  .innerbox::-webkit-scrollbar { width: 4px; }
          .innerbox::-webkit-scrollbar-thumb {
 border-radius: 10px;
-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);}
          .innerbox::-webkit-scrollbar-track {
 -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
background: rgba(0,0,0,0.1); }
</style>
