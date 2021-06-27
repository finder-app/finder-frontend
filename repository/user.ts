import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'
import { Repository } from '~/repository/repository'
import { User } from '~/apollo/model/generated'

export class UserRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
    super(axios, apollo)
  }

  GetUsers(): Promise<User[] | void> {
    return this.axios.get(`/users`)
    // const response = await this.apollo.query({
    //   query: gql`
    //       query GetUsers {
    //         GetUsers {
    //           Uid
    //           Email
    //           LastName
    //           FirstName
    //           Gender
    //         }
    //       }
    //     `
    // })
    // return response.data.GetUsers
    // NOTE: GraphQLの場合は、default.tsでerror handlingするのでrepoに書かない
  }

  async GetUserByUid(uid: string): Promise<User | void> {
    try {
      const response = await this.axios.get(`/users/${uid}`)
      return response.data
    } catch (err) {
      console.error(err.response)
    }
  }
}