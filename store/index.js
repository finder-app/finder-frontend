export const state = () => ({
  idToken: null,
  footPrintCount: 0,
})

export const getters = {
  getIdToken: state => state.idToken,
  getFootPrintCount: state => state.footPrintCount,
}

export const mutations = {
  setIdToken(state, idToken) {
    state.idToken = idToken
    localStorage.setItem('idToken', idToken)
  },
  unsetIdToken(state) {
    state.idToken = null
    localStorage.removeItem('idToken')
  },
  setFootPrintCount(state, footPrintCount) {
    state.footPrintCount = footPrintCount
  },
}

export const actions = {
  nuxtClientInit({ commit }) {
    const idToken = localStorage.getItem('idToken')
    if (idToken) {
      commit('setIdToken', idToken)
    }
  },
  setIdToken({ commit }, payload) {
    commit('setIdToken', payload.idToken)
  },
  unsetIdToken({ commit }) {
    commit('unsetIdToken')
  },
  setFootPrintCount({ commit }, payload) {
    commit('setFootPrintCount', payload.footPrintCount)
  },
}
