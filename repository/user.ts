import { AxiosInstance } from 'axios'
import { Repository } from '~/repository/repository'
import { User } from '~/apollo/model/generated'

export class UserRepository extends Repository {
  constructor(axios: AxiosInstance) {
    super(axios)
  }

  async GetUsers(): Promise<User[] | void> {
    try {
      const response = await this.axios.get('/users')
      return response.data
    } catch (err) {
      console.error(err.response)
    }
  }
}