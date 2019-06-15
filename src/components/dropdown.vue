<template>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          下来菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in msg" :disabled="item.disabled" :divided="item.divided" :key="item">{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
export default {
  name: 'dropdown',
  data(){
    return{
      msg:[
        {name:"黄金糕",disabled:false,divided:false},
        {name:"狮子头",disabled:false,divided:false},
        {name:"螺蛳粉",disabled:false,divided:false},
        {name:"双皮奶",disabled:true,divided:false},
        {name:"蚵仔煎",disabled:false,divided:true},
      ]
    }
  },methods:{

  }
}
</script>

<style scoped>

</style>
