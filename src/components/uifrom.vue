<template>
    <div>
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择区域">
            <el-option label="区域一" value="区域一">区域一</el-option>
            <el-option label="区域二" value="区域二">区域二</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" placeholder="请选择开始时间"></el-date-picker>
          </el-col>
          <el-col :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker v-model="form.date2" placeholder="请选择结束时间"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="及时送达">
          <el-switch style="display:flex;justify-content:flex-start;align-items:center;height:40px;" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox value="美食/餐厅线上活动" label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox value="地推活动" label="地推活动" name="type"></el-checkbox>
            <el-checkbox value="线下主题活动" label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox value="单纯品牌曝光" label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下免费场地"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.region"></el-input>
        </el-form-item>
        <el-form-item style="text-align:left;">
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'uifrom',
  data(){
    return{
      form:{
        name:'',
        region:'',
        date1:'',
        date2:'',
        delivery:false,
        type:[],
        resource:'',
        desc:'',
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.el-form{max-width:640px;width:100%;}
  .el-select{width:100%;}
  .el-data-prcker{width:100%;}
  .el-input{width:100%;}
  .el-checkbox{width:calc(50% - 60px);text-align:left;}
  .el-checkbox-group{display:flex;flex-wrap:wrap;justify-content:flex-start;}
  .el-radio-group{text-align:left;display:flex;height:40px;align-items:center;}
</style>
