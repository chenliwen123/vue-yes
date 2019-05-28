<template>
  <div class="hello">
    <h1 @click="hahah(20)">{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    ...mapMutations([
                   'showPeople'
                 ]),//映射成功了  调用的时候   就直接this.showPeople
    ...mapActions(['incrementAsync']),//映射成功
    hahah(a){
      this.showPeople(a);
      console.log(this.$store.state.name);
      console.log(this.$store.state.count);
    },
  },
  mounted(){
    // console.log(this);
    // console.log(this.$Store.state.name);
    this.incrementAsync();//映射成功后调用的方法
    //不映射应该 this.$stoer.dispatch('incrementAsync');
  },
  created () {
    console.log(this.$store);
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
