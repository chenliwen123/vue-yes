<template>
    <div>
      <el-form :model="form" ref="form" label-width="80px" class="bzform">
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
      <br>
      <hr>
      <el-form :inline="true" :model="form1">
        <el-form-item label="审批人">
          <el-input placeholder="请填写审批人" v-model="form1.spr"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form1.hdqy">
            <el-option value="区域一" label="区域一"></el-option>
            <el-option value="区域二" label="区域二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @submit.native.prevent>确定</el-button>
        </el-form-item>
      </el-form>
      <br>
      <hr>
      <el-radio-group v-model="align" size="small">
        <el-radio-button label="left" value="left">左对齐</el-radio-button>
        <el-radio-button label="right" value="right">右对齐</el-radio-button>
        <el-radio-button label="top" value="top">顶部对齐</el-radio-button>
      </el-radio-group>
      <el-form :model="form2" label-width="80px" :label-position="align">
        <el-form-item label="名称">
          <el-input v-model="form2.mingcheng" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form2.quyu" placeholder="请选择活动区域">
            <el-option label="区域一" value="区域一"></el-option>
            <el-option label="区域二" value="区域二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input placeholder="请填写活动形式" v-model="form2.xingshi"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>
<!--
@submit.native.prevent  阻止默认行为
form 表单上 :model= 的是一个对象  form表单内的v-model= 对象.属性
:inline 让表单在一行显示 如果这一行放不下会换行
el-form-item 有个 label 属性   这个属性就是行标题
el-form label-width="80px"  这个80是  input 输入框 距离左侧的距离
        :label-position 选择对齐方式
-->
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
      },
      form1:{
        spr:'',
        hdqy:'',
      },
      align:'left',
      form2:{
        mingcheng:"",
        quyu:"",
        xingshi:"",
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.bzform{max-width:640px;width:100%;}
  .el-select{width:100%;}
  .el-data-prcker{width:100%;}
  .el-input{width:100%;}
  .el-checkbox{width:calc(50% - 60px);text-align:left;}
  .el-checkbox-group{display:flex;flex-wrap:wrap;justify-content:flex-start;}
  .el-radio-group{text-align:left;display:flex;height:40px;align-items:center;}
</style>
