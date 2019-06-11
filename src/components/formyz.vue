<template>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
           <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select  v-model="ruleForm.region">
            <el-option value="区域一" label="区域一"></el-option>
            <el-option value="区域二" label="区域二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" placeholder="请选择开始日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2" style="text-align:center;">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker v-model="ruleForm.date2" placeholder="请选择结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" value="美食/餐厅线上活动"></el-checkbox>
            <el-checkbox label="地推活动" value="地推活动"></el-checkbox>
            <el-checkbox label="线下主题活动" value="线下主题活动"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" value="单纯品牌曝光"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleForm)">确定</el-button>
          <el-button plain>重置</el-button>
        </el-form-item>
        <el-form-item label="请输入QQ号" prop="number">
          <el-input v-model.number="ruleForm.number" placeholder="来一个QQ 号吧"></el-input>
        </el-form-item>
      </el-form>
    </div>
  <!--
  el-form
      :model="" (对象)
      ref="name"  name (对象)   是验证表单的名字 调用时是 this.$refs['name'].validate((valid)=>{ valid 是布尔值
         if(valid){}else{}
      })
      :rules=rules 验证的对象(对象)
          el-form-item prop="name"    name是rules里的一个属性(数组)
          name:[{required:(true)不允许为空,message:"提示语",trigger:"触发条件"}]//数组里面的都是对象 也就是条件
          label-width="80px" 不能带分号  小伙子

  -->
</template>

<script>
export default {
  name: 'formyz',
  data(){
    return{
      ruleForm:{
        name:'',
        region:'',
        date1:'',
        date2:'',
        delivery:'',
        type:[],
        resource:'线上品牌赞助',
        desc:'',
        number:'',
      },
      rules:{
        name:[
          {required:true,message:'请输入活动名称',trigger:"blur"},
          {min:3,max:5,message:'名称长度最小3最大5',trigger:'blur'},
        ],
        region:[
          {required:true,message:'请选择活动区域',trigger:"change"},
        ],
        date1:[
          {type:'date',required:true,message:'请选择开始日期',trigger:"change"},
        ],
        date2:[
          {type:'date',required:true,message:'请选择结束日期',trigger:"change"},
        ],
        type:[
          {type:'array',required:true,message:'至少选择一个活动类型',trigger:"change"},
        ],
        resource:[
          {required:true,message:"必须选择一个资源",trigger:'change'}
        ],
        desc:[
          {required:true,message:"必须填写活动形式",trigger:"blur"}
        ],
        number:[
          {required:true,message:"请输入QQ号",trigger:'blur'},
          {type:"number",message:"输入数字"}
        ]
      }
    }
  },
  methods:{
    submitForm(ruleForm) {
      console.log(this.$refs);
      this.$refs['ruleForm'].validate((valid) => {
        console.log(valid);
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  mounted(){},
  created(){},

}
</script>

<style scoped>
.el-select{width:100%;}
  .el-input{width:100%;}
  .el-form-item{text-align:left;}
  .el-checkbox{width:calc(50% - 60px);}
</style>
