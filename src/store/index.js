import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    permissions: {
      username: 'Charles Darrow',
      password: 'monopoly'
    }
  },
  mutations: {
    credentials (state, user) {
      state.username = user.username
      state.password = user.password
    }
  },
  actions: {
  },
  modules: {
  }
})
