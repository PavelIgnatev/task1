import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: {}, 

  },
  mutations: {
    renderTemplateAll(state, data){
      Object.keys(data).map(item => data[item].alias != 'vote' ? '' : data[item].data.selectedUserId ? '' : data[item].data.selectedUserId = -1)
      Object.keys(data).map(item => data[item].alias != 'vote' ? '' : data[item].data.offset ? data[item].data.offset = 4 : data[item].data.offset = 4)
      state.data = data
    },
    selectedUser(state, data){
      state.data[data[0]].data.selectedUserId = data[1]
      state.data[data[0]+1].data.selectedUserId = data[1]
    },
    offChange(state, data){
      state.data[data[0]].data.offset += data[1]
  }}
})
export default store