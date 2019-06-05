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
        <el-select v-model="msg" multiple>
          <el-option v-for="item in options" :key="item.label" :value="item.label" :label="item.label">{{item.label}}</el-option>
        </el-select>
      </el-row>
      <br>
      <el-row>
        <el-select v-model="msg" multiple collapse-tags>
          <el-option v-for="item in options" :label="item.label" :value="item.label" :key="item.value">{{item.label}}</el-option>
        </el-select>
      </el-row>
      <br>
      <el-row>
        <el-select v-model="msg" filterable>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label">{{item.label}}</el-option>
        </el-select>
      </el-row>
      <br>
      <el-row>
        <el-select v-model="msg" filterable multiple collapse-tags allow-create default-first-option>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label">{{item.label}}</el-option>
        </el-select>
      </el-row>
    </div>
  <!--
      el-select          select标签
      el-option          option选项标签  需要有:key :value :label 三个属性
      disabled           禁用属性
      clearabel          清空属性
      multiple           多选
      filterabel         select 标签输入
      collapse-tags      多选时变成数字
      allow-create       添加 选项
      default-first-option 添加的位置再option 最后
  -->
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
