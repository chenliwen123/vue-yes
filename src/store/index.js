import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    name:0,
    count:0,
    todos:[
      {id:1,text:"...",done:true},
      {id:2,text:"...",done:true},
    ],
    zbfs:{},
    src:"##"
  },//存放数据的地方 只能在mutations中的函数里修改state的数据
  mutations:{
    showPeople:function (state,msg) {
      state.name=msg;
    },
    zbqh:function(state,data){
      state.zbfs=data;
    },
    increment:function(){
      store.state.count++;
    },
    huidiao(state,name){
      state.src=state.zbfs.find(zbf=>zbf.name==name).url
    }
  },//修改state的方法 调用时要store.commit('showPeople');   这里储存的方法都是同步不支持异步
  actions:{
    incrementAsync (store) {
      setTimeout(() => {
        store.commit('increment')
      }, 1000)
    }
  },//异步的方法  也可以调用mutations 中的方法  要store.commit(); 正常调用actions中的方法 store.dispatch();
  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo=>todo.done);
    },
    doneTodosCount:(state,getters)=>{
      return getters.doneTodos.length;
    },
    doneTodoid:(state)=>(id)=>{
      return state.todos.find(todo=>todo.id===id);
    },
  },
});
export default  store
