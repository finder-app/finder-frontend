import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
import { Store } from 'vuex'
import { Context } from '@nuxt/types'
import { Repository } from '~/repository/repository'
import { FootPrint } from '~/finder-protocol-buffers/ts/foot_print_pb'

export class FootPrintRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>, private store: Store<Context>) {
    super(axios, apollo)
  }

  async GetFootPrints(): Promise<FootPrint.AsObject[]> {
    // HACK: すぐreturnしないからか、return responseだと型エラーを吐くのでobjectを直接返す
    const response = await this.axios.get('/foot_prints')
    await this.getUnreadCount()
    return response.data.footPrints
  }

  async getUnreadCount() {
    const response = await this.axios.get('/foot_prints/unread_count')
    const unreadCount = response.data
    this.store.dispatch('unread_count/setUnreadCount', { unreadCount })
  }
}