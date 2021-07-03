import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
import { Store } from 'vuex'
import { Context } from '@nuxt/types'
import { Repository } from '~/repository/repository'
import { FootPrint } from '~/apollo/model/generated'

export class FootPrintRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>, private store: Store<Context>) {
    super(axios, apollo)
  }

  async GetFootPrints(): Promise<FootPrint[]> {
    const response = await this.axios.get('/foot_prints')
    await this.getUnreadCount()
    return response.data
  }

  async getUnreadCount() {
    const response = await this.axios.get('/foot_prints/unread_count')
    const footPrintCount = response.data
    this.store.dispatch('setFootPrintCount', { footPrintCount })
  }
}