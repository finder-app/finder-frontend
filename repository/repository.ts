import { AxiosInstance } from 'axios'

export class Repository {
  protected readonly axios: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.axios = axios
  }
}