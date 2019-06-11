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
    comments: {},
  },
  mutations: {
    setBugs(state, data) {
      state.newBug = data
    },
    setComments(state, data) {
      Vue.set(state.comments, data.id, data.comments)
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('/bugs')
        commit("setBugs", res.data.results)
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
    },

    async getBugById({ commit, dispatch }, payload) {
      try {
        let res = await _api.get('bugs/', payload)
        router.push({ name: 'v-buggered', params: { id: res.data.results._id } })
      } catch (error) {
        console.error(error)
      }
    },
    getComments({ commit, dispatch }, data) {
      debugger
      _api.get('bugs/' + data + "/notes")
        .then(res => {
          commit('setComments', { comments: res.data.results, id: data })
          console.log('getcomments output', res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addComment({ commit, dispatch }, data) {
      _api.post('bugs/' + data.bug + "/notes", data)
        .then(res => {
          debugger
          dispatch('getComments', data.bug)
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }


  }

}
)

