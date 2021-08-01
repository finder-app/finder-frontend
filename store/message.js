export const state = () => ({
  message: null,
  status: null
})

export const getters = {
  getStatus: state => state.status,
  getMessage: state => state.message,
  existsMessage: state => state.message !== null
}

export const mutations = {
  successMessage(state, message) {
    state.message = message
    state.status = 'success'
  },
  errorMessage(state, message) {
    state.message = message
    state.status = 'error'
  },
  removeMessage(state) {
    state.message = null
  }
}

export const actions = {
  successMessage({ commit }, payload) {
    commit('successMessage', payload.message)
  },
  errorMessage({ commit }, payload) {
    commit('errorMessage', payload.message)
  },
  removeMessage({ commit }) {
    commit('removeMessage')
  }
}
