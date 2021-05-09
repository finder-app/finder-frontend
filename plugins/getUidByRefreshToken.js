import axios from 'axios'

export default async function getUidByRefreshToken(store) {
  const refreshToken = store.getters['getRefreshToken']
  if (!refreshToken) {
    return
  }
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', refreshToken);

  try {
    const baseUrl = 'https://securetoken.googleapis.com/v1/token?key='
    const response = await axios.post(baseUrl + process.env.firebaseApiKey, params)
    const refreshToken = response.data.refresh_token
    store.dispatch('setRefreshToken', { refreshToken })
    const uid = response.data.user_id
    store.dispatch('setUid', { uid })
  } catch (err) {
    console.err(err)
    console.err(err.response)
  }
}
