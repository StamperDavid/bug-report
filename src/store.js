import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

const _api = axios.create({
  baseURL: 'https:bcw-sandbox.herokuapp.com/api/David'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newBug: [],
    report: [],
  },
  mutations: {
    setBugs(state, data) {
      state.newBug = data
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('/bugs')
        commit("setBugs", res.data)
        console.log(res.data.results)
      }
      catch (e) {
        console.error(e)
      }
    },
    async createbug({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('bugs', payload)
        router.push({ name: 'v-buggered', params: { id: res.data.results._id } })
      } catch (error) {
        console.error(error)
      }
    }

  }
})
