import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
// import gql from 'graphql-tag'
import { Repository } from '~/repository/repository'
import { User } from '~/finder-protocol-buffers/ts/user_pb'

export class UserRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
    super(axios, apollo)
  }

  GetUsers(): Promise<User.AsObject[] | void> {
    return this.axios.get(`/users`)
    // NOTE: GraphQLの場合は、default.tsでerror handlingするのでerr処理を書くな
    // return await this.apollo.query({
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
  }
  getUserByUid(uid: string): Promise<User.AsObject | void> {
    return this.axios.get(`/users/${uid}`)
  }
  createUser(user: User.AsObject): Promise<User.AsObject | void> {
    return this.axios.post('/users', user)
  }
}