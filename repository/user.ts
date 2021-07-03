import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
// import gql from 'graphql-tag'
import { Repository } from '~/repository/repository'
import { User } from '~/pb/user_pb'

export class UserRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
    super(axios, apollo)
  }

  GetUsers(): Promise<User.AsObject[] | void> {
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
  getUserByUid(uid: string): Promise<User.AsObject | void> {
    return this.axios.get(`/users/${uid}`)
    // try {
    //   const response = await this.axios.get(`/users/${uid}`)
    //   return response.data
    // } catch (err) {
    //   console.error(err.response)
    // }
  }
  createUser(user: User.AsObject): Promise<User.AsObject | void> {
    return this.axios.post('/users', user)
    // try {
    //   const response = await this.axios.get(`/users/${uid}`)
    //   return response.data
    // } catch (err) {
    //   console.error(err.response)
    // }
  }
}