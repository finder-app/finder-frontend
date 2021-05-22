import { AxiosInstance } from 'axios'
import { Repository } from '~/repository/repository'
import { FootPrint } from '~/apollo/model/generated'

export class FootPrintRepository extends Repository {
  constructor(axios: AxiosInstance) {
    super(axios)
  }

  async GetFootPrints(): Promise<FootPrint[] | void> {
    try {
      const response = await this.axios.get('/foot_prints')
      return response.data
    } catch (err) {
      console.error(err.response)
    }
  }
}