export const state = () => ({
  unreadCount: 0
})

export const getters = {
  getUnreadCount: state => state.unreadCount
}

export const mutations = {
  setUnreadCount(state, unreadCount) {
    state.unreadCount = unreadCount
  }
}

export const actions = {
  setUnreadCount({ commit }, payload) {
    commit('setUnreadCount', payload.unreadCount)
  }
}
