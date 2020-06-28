import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPlaying:false
  },
  mutations: {
    changeState(){
      this.state.isPlaying = !this.state.isPlaying
    }
  },
  actions: {

  },
  modules: {
  }
})
