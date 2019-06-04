<template>
    <div>
      <el-row>
        <el-select name="selcet1" v-model="msg" placeholder="请选择">
          <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value">{{item.label}}</el-option>
        </el-select>
      </el-row>
      <br>
      <el-row>
        <el-select v-model="msg" placeholder="来选一个吧！">
          <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled">{{item.label}}</el-option>
        </el-select>
      </el-row>
      <br>
      <el-row>
        <el-select v-model="msg" disabled placeholder="你看坏了吧">
          <el-option v-for="item in options" :value="item.value" :key="item.value" :label="item.label">{{item.label}}</el-option>
        </el-select>
      </el-row>
      <br>
      <el-row>
        <el-select v-model="msg" clearable>
          <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value">{{item.label}}</el-option>
        </el-select>
      </el-row>
      <br>
      <el-row>
        
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'ui_select',
  data(){
    return {
      msg:"",
      options:[
        {label:"双皮奶",value:"选项一",disabled:false},
        {label:"黄金糕 ",value:"选项二",disabled:true},
        {label:"蚵仔煎",value:"选项三",disabled:false},
        {label:"龙须面",value:"选项四",disabled:false},
        {label:"北京烤鸭",value:"选项五",disabled:false},
      ],
    }
  }
}
</script>

<style scoped>

</style>
