import camelcaseKeys from 'camelcase-keys'
export default (ctx) => {
  ctx.$axios.onRequest((config) => {

    config.headers = {
      'Authorization': `Bearer ${ctx.store.getters['getIdToken']}`
    }
    console.log(config.headers.Authorization)
    return config
  })
  ctx.$axios.onResponse((response) => {
    response.data = camelcaseKeys(response.data, { deep: true })
    return response
  })
  ctx.$axios.onError(error => {
    if (error.response.status === 401) {
      ctx.store.dispatch('unsetIdToken')
      ctx.redirect('/auth/sign_in')
    }
  });
}
