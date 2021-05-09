import camelcaseKeys from 'camelcase-keys'


export default async (ctx) => {
  ctx.$axios.onRequest((config) => {
    const uid = ctx.store.getters['getUid']
    if (uid) {
      config.headers.currentUserUid = uid
    }
    return config
  })
  ctx.$axios.onResponse((response) => {
    response.data = camelcaseKeys(response.data, { deep: true })
    return response
  })
  ctx.$axios.onError(error => {
    if (error.response.status === 401) {
      ctx.store.dispatch('signOut')
      ctx.redirect('/auth/sign-in')
    }
  });
}