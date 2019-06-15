<template>
    <div>
      <el-row>
        <el-tabs v-model="tabs">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>
      <br>
      <el-row>
        <el-tabs v-model="tabs" type="card">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>
      <br>
      <el-row>
        <el-tabs v-model="tabs" type="border-card">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>
      <br>
      <el-row>
        <el-radio-group v-model="position">
          <el-radio-button label="left">left</el-radio-button>
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
        </el-radio-group>
        <el-tabs v-model="tabs" :tab-position="position">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>
      <br>
      <el-row>
        <el-tabs v-model="tabs" type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i>用户管理</span>
            用户管理
          </el-tab-pane>
          <el-tab-pane label="配置管理">
             配置管理内容
          </el-tab-pane>
          <el-tab-pane label="角色管理">
            角色管理内容
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿内容</el-tab-pane>
        </el-tabs>
      </el-row>
      <br>
      <el-row>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <br>
      <el-row>

      </el-row>
    </div>
</template>

<script>
export default {
  name: 'uitab',
  data(){
    return{
      tabs:"",
      position:"left",
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
