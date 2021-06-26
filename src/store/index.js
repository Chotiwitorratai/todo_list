import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
			{ text: 'พี่พลเลี้ยงชาบู', done: false },
			{ text: 'พี่เบสเลี้ยงปิ้งย่าง', done: false },
      { text: 'พี่ปอนด์เลี้ยงโมโม่', done: true },
		],
    datas: [
      
    ]
  },
  mutations: {
    addTodo: function(state, todoText) {
			state.todos.push({
				text: todoText,
				done: false
			});
			console.log(state.todos);
		},
    missionCompleted: function(state,index){
			state.todos[index].done = true
    },
    deleteTodo: function(state,index){
      state.todos.splice(index, 1);
    },
    getData: function(state ,data){
      state.datas = data
    }
  },
  getters: {

  },
  actions: {

  },
  modules: {
  }
})
