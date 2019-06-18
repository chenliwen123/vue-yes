<template>
    <div>
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤一"></el-step>
        <el-step title="步骤二"></el-step>
        <el-step title="步骤三"></el-step>
      </el-steps>
      <el-button @click="xiayibu">下一步</el-button>
      <el-steps :active="active" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
</template>

<script>
export default {
  name: 'stesp',
  data(){
    return{
      active:0,
    }
  },methods:{
    xiayibu(){
      if (this.active++ > 3) this.active = 0;
    }
  }
}
</script>

<style scoped>

</style>
