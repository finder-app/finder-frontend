import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { ApolloClient } from 'apollo-client'

export class Repository {
  protected readonly axios: NuxtAxiosInstance

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  // protected readonly apollo: ApolloClient<any>
  // constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
  //   this.axios = axios
  //   this.apollo = apollo
  // }
}