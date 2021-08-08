// NOTE: nuxt.configのpluginsで読み込むstoreの初期化処理
export const actions = {
  async nuxtClientInit({ commit }, ctx) {
    const idToken = localStorage.getItem('idToken')
    if (idToken) {
      commit('auth/setIdToken', idToken)
    }
  }
}
