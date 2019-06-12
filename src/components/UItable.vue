<template>
    <div>
      <el-table
      :data="data"
      stripe
      border
      height="250"
      style="width:100%;"
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
      <br>
      <br>
      <el-table
        ref="multipleTable"
      :data="data"
      style="width:100%;"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" width="120"><template slot-scope="scope">{{scope.row.date}}</template></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <!--
      添加一列 el-table-column 设置type="selection" 就是多选
      -->
      <br>
      <br>
        <el-table
          :data="data"
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      <!--
      sortable 列排序
      -->
      <br>
      <br>
      <el-table
      :data="data"
      style="width:100%;">
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left:10px">{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column
        label="名称"
        width="150"
        >
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名:{{scope.row.name}}</p>
              <p>地址:{{scope.row.address}}</p>
              <div slot="reference">
                <el-tag>{{scope.row.name}}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="success">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'UItable',
  data(){
    return{
      data:[
        {date:"2016-05-01",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-02",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-03",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-04",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
        {date:"2016-05-05",name:"陈立文",address:"大连市甘井子区马兰街道马兰广场"},
      ],
    }
  },
  methods:{
    formatter(row, column) {
      return row.address;
    }
  }
}
</script>

<style scoped>

</style>
