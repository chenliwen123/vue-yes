import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    todos:[
      {id:1,text:"...",done:false},
      {id:2,text:"...",done:true},
    ]
  },
  mutations:{
    showPeople:function (state,msg) {
      state.name=msg;
    }
  },
  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo=>todo.done);
    },
    doneTodosCount:(state,getters)=>{
      return getters.doneTodos.length;
    },
    doneTodoid:(state)=>(id)=>{
      return state.todos.find(todo=>todo.id===id);
    }
  }
});
console.log(store.getters.doneTodos);
console.log(store.getters.doneTodosCount);
console.log(store.getters.doneTodoid(store.state,2))
export default  store
