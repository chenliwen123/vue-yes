<template>
  <div>
    <el-row>
      <el-button>确定</el-button>
      <el-button type="primary">确定</el-button>
      <el-button type="success">确定</el-button>
      <el-button type="info">确定</el-button>
      <el-button type="warning">确定</el-button>
      <el-button type="danger">确定</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button plain>确定</el-button>
      <el-button plain type="primary">确定</el-button>
      <el-button plain type="success">确定</el-button>
      <el-button plain type="info">确定</el-button>
      <el-button plain type="warning">确定</el-button>
      <el-button plain type="danger">确定</el-button>
    </el-row>
    <br>
<el-row>
  <el-button plain round>确定</el-button>
  <el-button plain round type="primary">确定</el-button>
  <el-button plain round type="success">确定</el-button>
  <el-button plain round type="info">确定</el-button>
  <el-button plain round type="warning">确定</el-button>
  <el-button plain round type="danger">确定</el-button>
</el-row>
    <br>
    <el-row>
      <el-button disabled >确定</el-button>
      <el-button disabled type="primary">确定</el-button>
      <el-button disabled type="success">确定</el-button>
      <el-button disabled type="info">确定</el-button>
      <el-button disabled type="warning">确定</el-button>
      <el-button disabled type="danger">确定</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button disabled plain>确定</el-button>
      <el-button disabled plain type="primary">确定</el-button>
      <el-button disabled plain type="success">确定</el-button>
      <el-button disabled plain type="info">确定</el-button>
      <el-button disabled plain type="warning">确定</el-button>
      <el-button disabled plain type="danger">确定</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button type="text">你好啊！年轻人</el-button>
      <el-button type="text" disabled> 你好 </el-button>
    </el-row>
    <br>
    <el-row>
      <el-button type="primary" class="el-icon-edit"></el-button>
      <el-button type="primary" class="el-icon-share"></el-button>
      <el-button type="primary" class="el-icon-delete"></el-button>
      <el-button type="primary" class="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>
      <el-button></el-button>
    </el-row>
    <br>
    <el-row>
      <el-button-group>
        <el-button type="primary" class="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-right el-icon-arrow-right"></i></el-button>
      </el-button-group>
    </el-row>
    <br>
    <el-row>
      <el-button type="primary">默认按钮</el-button>
      <el-button type="primary" size="medium">中等按钮</el-button>
      <el-button type="primary" size="small">小按钮</el-button>
      <el-button type="primary" size="mini">超小按钮</el-button>
    </el-row>
    <!--
    el-button
              type 按钮属性 primary
              plain  是否朴素
              disabled 是否禁止
              round  是否圆角
    -->
    <br>
    <el-row>
      <el-button-group>
        <el-link href="##">你好你好</el-link>
        <el-link href="##" type="success">你好你好</el-link>
        <el-link href="##" type="info">你好你好</el-link>
        <el-link href="##" type="primary">你好你好</el-link>
        <el-link href="##" type="warning">你好你好</el-link>
        <el-link href="##" type="danger">你好你好</el-link>
      </el-button-group>
    </el-row>
    <br>
    <el-row>
      <el-link href="##" disabled>你好</el-link>
      <el-link href="##" type="info" disabled>你好</el-link>
      <el-link href="##" type="primary" disabled>你好</el-link>
      <el-link href="##" type="success" disabled>你好</el-link>
    </el-row>
    <br>
    <el-row>
      <el-link href="##" :underline="false">你好</el-link>
      <el-link href="##" :underline="false" type="success">你好</el-link>
      <el-link href="##" :underline="false" type="primary">你好</el-link>
      <el-link href="##" :underline="false" type="wanger">你好</el-link>
    </el-row>
    <br>
    <el-row>
      <el-link href="##" icon="el-icon-edit" type="success" :underline="false">你好</el-link>
      <el-link href="##">我不是很开心<i class="el-icon-view el-icon--right"></i></el-link>
    </el-row>
    <br>
    <el-row>
      <el-radio v-model="radio" label="1">嘿boy</el-radio>
      <el-radio v-model="radio" label="2">嗨gry</el-radio>
    </el-row>
    <br>
    <el-row>
      <el-radio v-model="disabled" label="3" disabled>hello</el-radio>
      <el-radio v-model="disabled" label="4">Hi</el-radio>
    </el-row>
    <br>
    <el-radio-group v-model="group_radio">
      <el-radio label="1">你好很高兴和你接触</el-radio>
      <el-radio label="2">是啊很高兴认识你呢</el-radio>
      <el-radio label="3">我是蒙塔基的钢蛋</el-radio>
    </el-radio-group>
    <br>
    <br>
    <el-row>
      <el-radio-group v-model="button_radio">
        <el-radio-button label="你嘛时候是天下第一阿"></el-radio-button>
        <el-radio-button label="就在今天"></el-radio-button>
        <el-radio-button label="你们一起上吧"></el-radio-button>
      </el-radio-group>
    </el-row>
    <br>
    <el-row>
      <el-radio-group v-model="button_radio_sizi" size="medium">
        <el-radio-button label="你嘛时候是天下第一呀"></el-radio-button>
        <el-radio-button label="就在今天"></el-radio-button>
        <el-radio-button label="我是钢铁侠"></el-radio-button>
      </el-radio-group>
    </el-row>
    <br>
    <el-row>
      <el-radio-group v-model="button_radio_small" size="small">
        <el-radio-button label="疯子？"></el-radio-button>
        <el-radio-button label="天才？" disabled></el-radio-button>
        <el-radio-button label="还是？"></el-radio-button>
      </el-radio-group>
    </el-row>
    <br>
    <el-row>
      <el-radio-group v-model="quandisa" size="mini" disabled>
        <el-radio-button label="豆沙"></el-radio-button>
        <el-radio-button label="五仁"></el-radio-button>
        <el-radio-button label="白面"></el-radio-button>
        <el-radio-button label="什锦"></el-radio-button>
      </el-radio-group>
    </el-row>
    <br>
    <el-row>
      <el-radio v-model="shide" border label="1">你好你好</el-radio>
      <el-radio v-model="shide" border label="2">额不太好</el-radio>
    </el-row>
    <br>
    <el-row>
      <el-checkbox-group v-model="bian1">
        <el-checkbox label="多1">确定</el-checkbox>
        <el-checkbox label="多2">再次</el-checkbox>
        <el-checkbox label="多3" disabled>确定</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <br>
    <el-row>
      <el-checkbox :indeterminate="isIndeterminate">全选</el-checkbox>
      <br>
      <el-checkbox-group v-model="qxdd">
        <el-checkbox label="深圳">深圳</el-checkbox>
        <el-checkbox label="北京">北京</el-checkbox>
        <el-checkbox label="上海">上海</el-checkbox>
        <el-checkbox label="广州">广州</el-checkbox>
      </el-checkbox-group>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'uibutton',
  data(){
    return{
      radio:"1",
      disabled:"3",
      group_radio:"1",
      button_radio:"你嘛时候是天下第一阿",
      button_radio_sizi:"我是钢铁侠",
      button_radio_small:"天才？",
      quandisa:"白面",
      shide:"1",
      bian1:["多1","多3"],
      qxdd:["深圳"]
    }
  }
}
</script>
<style scoped type="scss">

</style>
