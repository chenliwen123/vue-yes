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
          </el-col>
        </el-row>
      </div>
    </div>
  <!--
    ref="name"
    name 变成全局的对象
    调用的时候this.$refs.name
    closable 显示关闭按钮
    需要关闭的话  需要用@close的方法

    -->
</template>

<script>
export default {
  name: 'uitag',
  data(){
    return{
      tag:['标签一','标签二','标签三'],
      addtags:'',
      addtagshow:false,
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
    }
  }
}
</script>

<style scoped>
.el-col{margin-top:10px;}
  .el-new-tag{margin-left:10px;}
  .el-new-input{width:89px;height:32px;}
</style>
