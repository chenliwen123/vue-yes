<template>
    <div>
         <el-row>
           <el-col>
             <el-badge :value="12">
               <el-button size="small">评论</el-button>
             </el-badge>
             <el-badge :value="50">
               <el-button size="small">回复</el-button>
             </el-badge>
             <el-badge :value="22" type="primary">
               <el-button size="small">评论</el-button>
             </el-badge>
             <el-badge :value="99" type="warning">
               <el-button size="small">回复</el-button>
             </el-badge>
           </el-col>
         </el-row>
      <br>
      <br>
      <el-row>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            点我查看 <i class="el-icon-caret-bottom le-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              消息
              <el-badge :value="12"></el-badge>
            </el-dropdown-item>
            <el-dropdown-item>
              回复
              <el-badge :value="3" type="success"></el-badge>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
      <br>
      <el-row>
        <el-badge :value="200" :max="99">
          <el-button type="small">消息</el-button>
        </el-badge>
        <el-badge :value="100" :max="10">
          <el-button type="small">回复</el-button>
        </el-badge>
      </el-row>
      <br>
      <el-row>
        <el-badge value="hot" type="primary">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge value="new" type="warning">
          <el-button size="small">消息</el-button>
        </el-badge>
      </el-row>
      <br>
      <el-row>
        <el-badge is-dot>最新数据</el-badge>
        <el-badge is-dot>
          <el-button class="el-icon-share" type="primary" size="small"></el-button>
        </el-badge>
      </el-row>
      <el-row>
        <el-alert title="你好你好" type="success"></el-alert>
        <el-alert title="你好你好" type="info"></el-alert>
        <el-alert title="你好你好" type="warning"></el-alert>
        <el-alert title="你好你好" type="error"></el-alert>
      </el-row>
      <br>
      <el-row>
        <el-alert title="你好你好" type="success" effect="dark"></el-alert>
        <el-alert title="你好你好" type="info" effect="dark"></el-alert>
        <el-alert title="你好你好" type="warning" effect="dark"></el-alert>
        <el-alert title="你好你好" type="error" effect="dark"></el-alert>
      </el-row>
      <el-row>
        <el-alert title="不可关闭的el-alert" type="success" :closable="false"></el-alert>
        <el-alert title="自定义关闭" type="info" close-text="知道了"></el-alert>
        <el-alert title="回调关闭" type="warning" @close="nihaonihao"></el-alert>
      </el-row>
      <br>
      <el-row>
        <el-alert title="成功的" type="success" show-icon close-text="啊了扫"></el-alert>
        <el-alert title="信息的" type="info" show-icon close-text="啊了扫"></el-alert>
        <el-alert title="危险" type="warning" show-icon close-text="啊了扫"></el-alert>
        <el-alert title="错误" type="error" show-icon close-text="啊了扫"></el-alert>
      </el-row>
      <br>
      <el-row>
        <el-alert title="我得让他们居中" center show-icon type="success"></el-alert>
        <el-alert title="我得让他们居中" center show-icon type="info"></el-alert>
        <el-alert title="我就让他们居中" center show-icon type="warning"></el-alert>
        <el-alert title="它们可算居中了" center show-icon type="error"></el-alert>
      </el-row>
      <br>
      <el-alert title="我有一些描述" type="success" show-icon description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"></el-alert>
      <!--
      el-badge
           type=""  控制消息颜色
           :value   消息条数
           :max     最大数 显示+
           is-dot   显示小红点 el-badge 属性
      -->
    </div>
</template>

<script>
export default {
  name: 'badge',
  data(){
    return {

    }
  },
  methods:{
    nihaonihao:function () {
      alert("你好你好");
    }
  }
}
</script>

<style scoped>
.el-badge{margin:10px 0 0 40px;}
  .el-dropdown-link{color: #3884f0;}
</style>
