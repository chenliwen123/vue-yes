<template>
  <div>
    <el-row>
      <el-time-select
      v-model="value"
      :picker-options="{
      start:'08:30',
      step:'0:15',
      end:'18:30'
      }"
      placeholder="nihaonihao"
      ></el-time-select>
    </el-row>
    <br>
    <el-row>
      <el-time-select v-model="value" :picker-options="{
      start:'08:30',
      step:'00:15',
      end:'18:30',
      }" placeholder="开始时间"></el-time-select>
      <el-time-select v-model="value2" :picker-options="{
      start:'08:30',
      step:'00:15',
      end:'18:30',
      minTime:value
      }" placeholder="结束时间"></el-time-select>
    </el-row>
    <br>
    <el-row>
      <el-time-picker
        is-range
        v-model="value4"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="请选择时间范围"
      >
      </el-time-picker>
    </el-row>
    <br>
    <el-date-picker
      v-model="value6"
    type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    :default-time="['12:00:00']"
    >
    </el-date-picker>
  </div>
</template>
<script>
    export default {
      name: "uitimepicker",
      data(){
          return{
            value:"",
            value2:"",
            value6:"",
            value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
          }
      },
      methods:{

      }
    }
</script>
<style scoped>

</style>
