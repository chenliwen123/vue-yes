<template>
    <div>
      <el-container style="width:500px;margin:0 auto;display:flex;flex-wrap:wrap;">
        <el-row style="width:100%;">
          <el-slider v-model="value">
          </el-slider>
        </el-row>
        <br>
        <el-row style="width: 100%;">
          <el-slider v-model="value" :show-tooltip="false">
          </el-slider>
        </el-row>
        <br>
        <el-row style="width: 100%;">
          <el-slider v-model="value" :format-tooltip="formatTooltip">
          </el-slider>
        </el-row>
        <br>
          <el-row style="width:100%;">
            <el-slider
            v-model="value"
            disabled
            ></el-slider>
          </el-row>
        <br>
        <el-row style="width: 100%;">
          <el-slider v-model="value" :step="10"></el-slider>
        </el-row>
        <br>
        <el-row>
<el-slider v-model="value" :step="10" show-stops></el-slider>
        </el-row>
        <br>
        <el-row>
          <el-slider v-model="value" show-input></el-slider>
        </el-row>
        <br>
        <el-row>
          <el-slider v-model="value1" show-stops :step="1" :max="10" range></el-slider>
        </el-row>
        <br>
        <el-row>
          <el-slider v-model="value" vertical height="200px"></el-slider>
        </el-row>
      </el-container>
    </div>
  <!--
  el-container 居中是flex 居中 justify-content:center;换行也是flex-wrap:wrap;
  el-slider 写法
  element 标签名就是class 名
  show-tooltip  显示数值
  format-tooltip 运行函数 返回value
  disabled 禁用
  :step  步长
  show-stops 切割步长
  show-input 显示input 框  有控制按钮
  :max :min 最大最小值
  range 是否区间模式
  vertical 竖向 height="200px"
  -->
</template>

<script>
export default {
  name: 'uislider',
  data(){
    return{
      value:100,
      value1:[4,8],
    }
  },
  methods:{
    formatTooltip(val){
      return val/100;
    }
  }
}
</script>

<style scoped>
  .el-container>.el-row{width:100%;}
</style>
