<template>
    <div>
      <el-row>
        <el-color-picker v-model="value"></el-color-picker>
        <!--没有默认值  还以为是个关闭按钮呢  -->
      </el-row>
      <br>
      <el-row>
        <el-color-picker v-model="value1"></el-color-picker>
      </el-row>
      <br>
      <el-row>
        <el-color-picker v-model="value1" show-alpha></el-color-picker>
        <!--
        el-color-picker
        show-alpha 显示透明度
        -->
      </el-row>
      <br>
      <el-row>
        <el-color-picker v-model="value1" :predefine="predefineColors"></el-color-picker>
        <!--
        :predefine    预选择颜色值 数组array
        -->
      </el-row>
      <br>
      <el-row>
        <el-color-picker v-model="value1"></el-color-picker>
        <el-color-picker v-model="value1" size="medium"></el-color-picker>
        <el-color-picker v-model="value1" size="small"></el-color-picker>
        <el-color-picker v-model="value1" size="mini"></el-color-picker>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'uicolorpicker',
  data(){
    return{
      value:null,
      value1:'#409EFF',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
    }
  },
  methods:{},
  mounted(){},
  created(){},

}
</script>

<style scoped>

</style>
