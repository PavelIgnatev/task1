import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

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
    renderTemplate(state, data){
        state.data[router.history.current.query['slide']-1].alias = data[0]
        state.data[router.history.current.query['slide']-1].data = data[1]
    },
    offsetChange(state, data){
      state.data[data[0]].data.selectedUserId = data[1]
      state.data[data[0]+1].data.selectedUserId = data[1]
    },
    offChangePlus(state, slide){
      state.data[slide].data.offset += 1
    },
    offChangeMinus(state, slide){
      state.data[slide].data.offset -= 1
    }
  },
  getters: {
    isStateData(state){
      return Object.keys(state.data).length
    }
  },
})
export default store