<template>
    <div>
      <el-table
      :data="data"
      stripe
      border
      height="250"
      style="width:100px;"
      >
        <el-table-column
        prop="date"
        fixed
        label="日期"
        width="180"
        ></el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        ></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <!--
        el-table 标签
            :data 数组  内容是对象
            stripe  实现:nth-child(2n)改变背景颜色
            border  实现表格有外框
            height  给固定的高  就会固定
            max-height 如果大于固定的高度 就会出现流体滚动
          el-table-column 列标签
            prop 数组对象的属性
            label 列标题
            flex 固定某个列值
      -->
    </div>
</template>

<script>
export default {
  name: 'UItable',
  data(){
    return{
      data:[
        {date:"2016-05-02",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-02",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-02",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-02",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-02",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
      ],
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
