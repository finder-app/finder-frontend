export const state = () => ({
  idToken: null,
  unreadCount: 0,
})

export const getters = {
  getIdToken: state => state.idToken,
  getUnreadCount: state => state.unreadCount,
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
  setUnreadCount(state, unreadCount) {
    state.unreadCount = unreadCount
  },
}

export const actions = {
  async nuxtClientInit({ commit }, ctx) {
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
  setUnreadCount({ commit }, payload) {
    commit('setUnreadCount', payload.unreadCount)
  },
}
