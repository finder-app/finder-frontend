export const state = () => ({
  idToken: null
})

export const getters = {
  getIdToken: state => state.idToken
}

export const mutations = {
  setIdToken(state, idToken) {
    state.idToken = idToken
    localStorage.setItem('idToken', idToken)
  },
  unsetIdToken(state) {
    state.idToken = null
    localStorage.removeItem('idToken')
  }
}

export const actions = {
  setIdToken({ commit }, payload) {
    commit('setIdToken', payload.idToken)
  },
  unsetIdToken({ commit }) {
    commit('unsetIdToken')
  }
}