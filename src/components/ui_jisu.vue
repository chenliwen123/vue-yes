<template>
    <div>
        <el-row>
          <el-input-number v-model="n1" :min="1" :max="10"></el-input-number>
        </el-row>
        <br>
        <el-row>
          <el-input-number v-model="n1" :min="1" :max="10" disabled></el-input-number>
        </el-row>
      <br>
      <el-row>
        <el-input-number v-model="n1" :step="2" :min="1" :max="10"></el-input-number>
      </el-row>
      <br>
      <el-row>
        <el-input-number v-model="n1" :step="2" step-strictly></el-input-number>
      </el-row>
      <br>
      <el-row>
        <el-input-number v-model="num" :step="0.1" step-strictly :precision="2" :max="10"></el-input-number>
      </el-row>
      <br>
      <el-row>
        <el-input-number v-model="n1" :max="10" :min="1" controls-position="right">

        </el-input-number>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'ui_jisu',
  data(){
    return{
      n1:1,
      num:1,
    }
  }
}
</script>

<style scoped>

</style>
