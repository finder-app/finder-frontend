import { AxiosInstance } from 'axios'
// import { ApolloClient } from 'apollo-client'

export class Repository {
  protected readonly axios: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.axios = axios
  }

  // protected readonly apollo: ApolloClient<any>
  // constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
  //   this.axios = axios
  //   this.apollo = apollo
  // }
}