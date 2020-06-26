import Vue from 'vue'
import Vuex from 'vuex'
import Services from './services'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games: [],
    statistics: [],
    players: [],
  },
  actions: {
    async fetchGames({commit}) {
      let {data} = await Services.fetchGames()
      commit('SET_GAMES', data)
    },
    async fetchStatistics({commit}) {
      let {data} = await Services.fetchStatistics()
      commit('SET_STATISTICS', data)
    },
    async fetchPlayers({commit}) {
      let {data} = await Services.fetchPlayers()
      commit('SET_PLAYERS', data)
    }
  },
  mutations: {
    SET_GAMES(state, payload) {
      state.games = payload
    },
    SET_STATISTICS(state, payload) {
      state.statistics = payload
    },
    SET_PLAYERS(state, payload) {
      state.players = payload
    }
  }
})

export default store