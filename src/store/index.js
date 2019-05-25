import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    name:"奥利给",
    age:23
  },
  mutations:{
    showPeople:function (state,msg) {
      state.name=msg;
    }
  },
});
export default  store
