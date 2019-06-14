<template>
    <div>
      <el-menu mode="horizontal" :default-active="activeIndex">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu  index="2">
          <template slot="title">游戏</template>
          <el-menu-item index="2-1">我的世界</el-menu-item>
          <el-menu-item index="2-2">装机模拟器</el-menu-item>
          <el-menu-item index="2-3">英雄联盟</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>充值中心</el-menu-item>
        <el-submenu index="4">
          <template slot="title">订单管理</template>
          <el-menu-item index="4-1">订单一</el-menu-item>
          <el-menu-item index="4-2">订单二</el-menu-item>
          <el-menu-item index="4-3">订单三</el-menu-item>
          <el-menu-item index="4-4">订单四</el-menu-item>
          <el-menu-item index="4-5">订单五</el-menu-item>
        </el-submenu>
      </el-menu>
      <hr>
      <el-menu mode="horizontal" :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的游戏</template>
          <el-menu-item index="2-1">我的世界</el-menu-item>
          <el-menu-item index="2-2">装机模拟器</el-menu-item>
          <el-menu-item index="2-3">英雄联盟</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>充值中心</el-menu-item>
        <el-submenu index="4">
          <template slot="title">订单管理</template>
          <el-menu-item index="4-1">订单一</el-menu-item>
          <el-menu-item index="4-2">订单二</el-menu-item>
          <el-menu-item index="4-3">订单三</el-menu-item>
          <el-menu-item index="4-4">订单四</el-menu-item>
          <el-menu-item index="4-5">订单五</el-menu-item>
        </el-submenu>
      </el-menu>
      <hr>
<div style="display:flex;justify-content:flex-start;flex-wrap:wrap;">
  <el-menu :default-active="activeIndex" class="el-menuhor">
    <el-menu-item index="1"><i class="el-icon-location"></i><span>处理中心</span></el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i><span>我的游戏</span></template>
      <el-menu-item index="2-1">我的世界</el-menu-item>
      <el-menu-item index="2-2">装机模拟器</el-menu-item>
      <el-menu-item index="2-3">英雄联盟</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" disabled>充值中心</el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-document"></i><span>订单管理</span>
    </el-menu-item>
  </el-menu>
  <el-menu :default-active="activeIndex" class="el-menuhor" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1"><i class="el-icon-location"></i><span>处理中心</span></el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i><span>我的游戏</span></template>
      <el-menu-item index="2-1">我的世界</el-menu-item>
      <el-menu-item index="2-2">装机模拟器</el-menu-item>
      <el-menu-item index="2-3">英雄联盟</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" disabled><i class="el-icon-setting"></i><span>充值中心</span></el-menu-item>
    <el-menu-item index="4"><i class="el-icon-document"></i><span>订单管理</span></el-menu-item>
  </el-menu>
  <br>
</div>
      <br>
      <el-row>
        <el-radio-group v-model="sollapse">
          <el-radio-button :label="true">折贴</el-radio-button>
          <el-radio-button :label="false">展开</el-radio-button>
        </el-radio-group>
      </el-row>
      <el-menu :collapse="sollapse" :default-active="activeIndex" class="el-menuhor">
        <el-menu-item><i class="el-icon-location"></i><span>处理中心</span></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i><span>我的游戏</span></template>
          <el-menu-item index="2-1">我的世界</el-menu-item>
          <el-menu-item index="2-2">装机模拟器</el-menu-item>
          <el-menu-item index="2-3">英雄联盟</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled><i class="el-icon-setting"></i><span>充值中心</span></el-menu-item>
        <el-menu-item index="4"><i class="el-icon-document"></i><span>个人中心</span></el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'navmenu',
  data(){
    return{
      activeIndex: '1',
      activeIndex2: '1',
      sollapse:true,
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.el-menuhor:not(.el-menu--collapse){width:200px;min-width:50px;border-right:1px solid #ddd;margin-left:50px;}
</style>
