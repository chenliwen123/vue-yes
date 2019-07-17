<template>
    <div>
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item>
          <template slot="title">chenliwen<i class="header-icon el-icon-info"></i></template>
          <div>你好 我是陈立文,我是一个垃圾  一个啥也不会的垃圾  希望你有一天变成大佬  能够领跑的大佬</div>
          <div>你好 我是陈立文 ,不要有这种想法,你慢慢学习就好 , 不想那么多事</div>
        </el-collapse-item>
        <el-collapse-item title="chenliwen" name="2">
          <div>你好 我是陈立文,我是一个垃圾  一个啥也不会的垃圾  希望你有一天变成大佬  能够领跑的大佬</div>
          <div>你好 我是陈立文 ,不要有这种想法,你慢慢学习就好 , 不想那么多事</div>
        </el-collapse-item>
        <el-collapse-item title="chenliwen" name="3">
          <div>你好 我是陈立文,我是一个垃圾  一个啥也不会的垃圾  希望你有一天变成大佬  能够领跑的大佬</div>
          <div>你好 我是陈立文 ,不要有这种想法,你慢慢学习就好 , 不想那么多事</div>
        </el-collapse-item>
        <el-collapse-item title="chenliwen" name="4">
          <div>你好 我是陈立文,我是一个垃圾  一个啥也不会的垃圾  希望你有一天变成大佬  能够领跑的大佬</div>
          <div>你好 我是陈立文 ,不要有这种想法,你慢慢学习就好 , 不想那么多事</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  <!--
      v-model=""   默认显示数组
      accordion    是否显示手风琴效果
      -->
</template>

<script>
export default {
  name: 'collapse',
  data(){
    return{
      activeNames:['1'],
    }
  }
}
</script>

<style scoped>

</style>
