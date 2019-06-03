<template>
    <div style="width:1000px;margin:0 auto;">
      <el-row><el-input placeholder="你好" v-model="input_ui"></el-input></el-row>
      <br>
      <el-row><el-input placeholder="你好啊" v-model="input_ui" disabled></el-input></el-row>
      <br>
      <el-row><el-input placeholder="你好你好" clearable v-model="input_ui"></el-input></el-row>
      <br>
      <el-row>
        <el-input v-model="input_ui" placeholder="请输入你的银行卡密码" show-password></el-input>
      </el-row>
      <br>
      <el-row>
        <el-input v-model="input_ui" suffix-icon="el-icon-date" placeholder="请输入日期"></el-input>
        <br>
        <el-input style="margin-top:15px;" v-model="input_ui" placeholder="请输入搜索条件" prefix-icon="el-icon-search"></el-input>
      </el-row>
      <br>
      <el-row>
        <el-input v-model="input_ui" placeholder="这是一个textarea" type="textarea" autosize></el-input>
      </el-row>
      <br>
      <el-row>
        <el-input v-model="input_ui" placeholder="请输入你的域名">
          <template slot="prepend">http://</template>
        </el-input>
        <el-input style="margin:15px 0 0 0;" v-model="input_ui" placeholder="请输入关于.com的域名">
         <template slot="append">.com</template>
        </el-input>
      </el-row>
      <br>
      <el-row>
        <el-input v-model="input_ui" placeholder="舒服啊" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option value="1">订单号</el-option>
            <el-option value="2">用户名</el-option>
          </el-select>
        </el-input>
        <el-input placeholder="请输入内容" v-model="input_ui" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-row>
      <br>
      <el-row>
        <el-input placeholder="22222" v-model="input_ui">
          <template slot="prepend">啊啊啊啊</template>
        </el-input>
        <el-input placeholder="11" v-model="input_ui" size="large">
          <template slot="prepend">啊啊啊啊</template>
        </el-input>
        <el-input v-model="input_ui" placeholder="啊啊啊啊" size="small">
          <template slot="prepend">啊啊啊啊</template>
        </el-input>
        <el-input v-model="input_ui" size="mini">
          <template slot="prepend">啊啊啊啊啊</template>
        </el-input>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "ui_input",
      data(){
          return{
            input_ui:"",
            select:"",
          }
      },
    }
</script>

<style scoped>

</style>
