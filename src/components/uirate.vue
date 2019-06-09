<template>
<div>
    <el-row>
      <el-rate v-model="value" :max="10" allow-half="false"></el-rate>
    </el-row>
  <br>
  <el-row>
    <el-rate v-model="value" :colors="['#99A9BF','#F7BA2A','#FF9900']"></el-rate>
  </el-row>
  <br>
  <el-row>
    <el-rate v-model="value" show-text></el-rate>
  </el-row>
  <br>
  <el-row>
    <el-rate
      v-model="value"
      :icon-classes="Classes"
      void-icon-class="icon-rate-face-off"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
  </el-row>
  <br>
  <el-row>
    <el-rate v-model="value1" disabled  text-color="#ff990" show-score score-template="{value}"></el-rate>
  </el-row>
</div>
</template>
<script>
export default {
  name:'uirate',
  data(){
    return{
      value:null,
      Classes:['icon-rate-face-1','icon-rate-face-2','icon-rate-face-3'],
      value1:3.5,
    }
  },
  methods:{

  },

}
</script>
<style scoped>

</style>
