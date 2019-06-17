<template>
    <div>
      <el-row>
        <el-dropdown type="primary">
        <span class="el-dropdown-link">
          下来菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in msg" :disabled="item.disabled" :divided="item.divided" :key="item.name">{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
      <br>
      <el-row>
        <el-dropdown split-button type="primary">
            下拉菜单
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in msg" :key="item.name" :disabled="item.disabled" :divided="item.divided">{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-dropdown type="primary">
            <span>下拉菜单<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in msg" :key="item.name" :icon="item.icon">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="12">
          <el-dropdown trigger="click">
            <span>下来菜单<i class="el-icon--right el-icon-arrow-down"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in msg" :key="item.name" :icon="item.icon">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <br>
        <el-col>
          <el-dropdown @command="hanshu">
            <span>下拉菜单<i class="el-icon--right el-icon-arrow-down"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in msg" :key="item.name" :command="item.name" :icon="item.icon">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'dropdown',
  data(){
    return{
      msg:[
        {name:"黄金糕",disabled:false,divided:false,icon:"el-icon-plus"},
        {name:"狮子头",disabled:false,divided:false,icon:"el-icon-circle-plus"},
        {name:"螺蛳粉",disabled:false,divided:false,icon:"el-icon-circle-plus-outline"},
        {name:"双皮奶",disabled:true,divided:false,icon:"el-icon-check"},
        {name:"蚵仔煎",disabled:false,divided:true,icon:""},
      ]
    }
  },methods:{
    hanshu:function (s) {
      this.$message({
        message:"hahah"+s,
        type:"success"
      });
    }
  }
}
</script>

<style scoped>
.el-dropdown:hover{cursor: pointer;}
</style>
