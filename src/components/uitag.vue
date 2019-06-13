<template>
    <div>
      <el-row>
        <el-col :span="24">
          <el-tag>标签</el-tag>
          <el-tag type="success">标签</el-tag>
          <el-tag type="info">标签</el-tag>
          <el-tag type="warning">标签</el-tag>
          <el-tag type="danger">标签</el-tag>
        </el-col>
        <el-col>
          <el-tag class="el-new-tag" v-for="item in tag" :key="item" :disable-transitions="true" closable @close="guanb(item)" type="success">{{item}}</el-tag>
          <el-input size="small" ref="sabeTagInput" class="el-new-input" v-if="addtagshow" v-model="addtags" @keydown.enter.native="addtag" @blur="addtag"></el-input>
          <el-button v-else size="small" @click="tagshow">+ New Tag</el-button>
        </el-col>
        <el-col>
          <el-tag effect="plain" type="success" closable>标签一</el-tag>
        </el-col>
      </el-row>
      <div>
        <br><br><br><br><br><br>
        <el-row>
          <el-col :span="10">
            <el-progress :percentage="50"></el-progress>
            <el-progress :percentage="100" status="success"></el-progress>
            <el-progress :percentage="50" status="exception"></el-progress>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <!--<el-progress type="circle" :percentage="0"></el-progress>-->
            <!--<el-progress type="circle" :percentage="25"></el-progress>-->
            <!--<el-progress type="circle" :percentage="100" status="success"></el-progress>-->
            <!--<el-progress type="circle" :percentage="50" status="exception"></el-progress>-->
            <el-progress type="circle" :percentage="1"></el-progress>
            <el-progress type="circle" :percentage="10"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="99" status="exception"></el-progress>
            <el-progress type="circle" :percentage="percentage"></el-progress>
          </el-col>
        </el-row>
        <!--
  ref="name"
  name 变成全局的对象
  调用的时候this.$refs.name
  closable 显示关闭按钮
  需要关闭的话  需要用@close的方法
  -->
        <el-row>
          <el-col>
            <el-pagination layout="prev,pager,next" :total="50"></el-pagination>
            <el-pagination layout="prev,pager,next" :total="1000"></el-pagination>
            <el-pagination layout="prev,pager,next" :total="1000" background></el-pagination>
            <el-pagination layout="prev,pager,next" :total="1000" small></el-pagination>

          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-pagination
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
            <el-pagination
              :page-sizes="[100,200,300,400]"
              :page-size="100"
              layout="total,sizes,prev,pager,next,jumper"
              :total="400"
              small
            >
            </el-pagination>
            <!--
el-pagination
    layout 设置显示内容 prev 上一页 next 下一页 pager 显示页码 total 显示总数 sizes 每页的个数 jumper 跳转到
    :total 这是多少条记录
    :page-size 100个一页
    :page-sizes="[100,200,300,400]"   可以选择每页多少个
    每十条记录 是一页
    background 设置按钮背景
    small 翻页变小
-->
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'uitag',
  data(){
    return{
      tag:['标签一','标签二','标签三'],
      addtags:'',
      addtagshow:false,
      percentage:10,
    }
        },
  methods:{
    guanb:function (item) {
      this.tag.splice(this.tag.indexOf(item),1);
    },
    tagshow:function () {
      this.addtagshow=true;
      this.$nextTick(_=>{
        this.$refs.sabeTagInput.$refs.input.focus();
      })
    },
    addtag:function () {
      let addtags=this.addtags;
      if (addtags){
        this.tag.push(this.addtags);
      }
      this.addtagshow=false;
      this.addtags=null;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>
.el-col{margin-top:10px;}
  .el-new-tag{margin-left:10px;}
  .el-new-input{width:89px;height:32px;}
</style>
