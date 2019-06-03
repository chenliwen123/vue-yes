<template>
    <div>
      <el-container style="height:100%;">
        <el-aside style="width:200px;">
          <el-menu>
            <el-submenu index="1">
              <template slot="title">英雄联盟</template>
              <el-menu-item-group>
                <el-menu-item v-for="(item,index) in this.$store.state.zbfs" v-if="item.leixing=='英雄联盟'" @click="nihao(item.name)" :key="index" index="index">{{item.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">炉石传说</template>
              <el-menu-item v-for="(item,index) in this.$store.state.zbfs" v-if="item.leixing=='炉石传说'" @click="nihao(item.name)" :key="index">{{item.name}}</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
            <template slot="title">一起看</template>
            <el-menu-item v-for="(item,index) in this.$store.state.zbfs" v-if="item.leixing=='一起看'" @click="nihao(item.name)" :key="index">{{item.name}}</el-menu-item>
          </el-submenu>
            <el-submenu index="4">
              <template slot="title">来新人了</template>
              <el-menu-item-group>
                <el-menu-item index="4-1"><el-input v-model="name" placeholder="name" clearable></el-input></el-menu-item>
                <el-menu-item index="4-2"><el-input v-model="url" placeholder="url" clearable></el-input></el-menu-item>
                <el-menu-item index="4-3"><el-input v-model="pingtai" placeholder="pingtai" clearable></el-input></el-menu-item>
                <el-menu-item index="4-4"><el-input v-model="leixing" placeholder="leixing" @keyup.enter.native="addzb" clearable></el-input></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="border-main">
          <iframe width="100%" height="100%" :src="this.$store.state.src" frameborder="0"></iframe>
        </el-main>
      </el-container>

    </div>
</template>

<script>
    export default {
        name: "zbvideo.vue",
      data(){
          return{
            name:"",
            url:"",
            pingtai:"",
            leixing:"",
          }
      },methods:{
          nihao(name){
            this.$store.commit('huidiao',name);
          },
        addzb(){
            var _this=this;
            if(this.name==null||this.url==null||this.pingtai==null||this.leixing==null){
              alert("不能有空值！");
              return false;
            }else{
              this.$axios.post('http://web1905131950037.bj01.bdysite.com/public/index.php/index/Index/tjvideozb',"name="+this.name+"&url="+this.url+"&pingtai="+this.pingtai+"&leixing="+this.leixing).then(function(data){
                _this.successts();
                _this.name=_this.url=_this.pingtai=_this.leixing=null;
              });
            }
        },
        successts(){
            this.$alert('添加成功','成功提示',{
              confirmbuttontext:'确定',
        });
      },
      },
      mounted(){
        var _this=this
        this.$axios.post('http://web1905131950037.bj01.bdysite.com/public/index.php/index/Index/videozb').then(function(data){
          _this.$store.commit('zbqh',data.data);
        });
      }
    }
</script>

<style scoped>
.border-main{
  padding:5px;
  height: 100vh;
  overflow:hidden;
  position:fixed;
  bottom:0;
  right:0;
  width:calc(100% - 210px);
}
</style>
