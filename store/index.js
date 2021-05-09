export const state = () => ({
  refreshToken: null,
  uid: null,
})

export const getters = {
  getRefreshToken: (state) => state.refreshToken,
  getUid: (state) => state.uid,
}

export const mutations = {
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
    localStorage.setItem('refreshToken', refreshToken)
  },
  setUid(state, uid) {
    state.uid = uid;
  },
  unsetRefreshToken(state) {
    state.refreshToken = null;
    localStorage.removeItem('refreshToken')
  },
  unsetUid(state) {
    state.uid = null;
  },
};

export const actions = {
  nuxtClientInit ({ commit }) {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken && refreshToken !== "undefined") {
      commit('setRefreshToken', refreshToken);
    }
  },
  setRefreshToken({ commit }, payload) {
    commit('setRefreshToken', payload.refreshToken)
  },
  setUid({ commit }, payload) {
    commit('setUid', payload.uid)
  },
  signOut({ commit }) {
    commit('unsetRefreshToken')
    commit('unsetUid')
  },
}
