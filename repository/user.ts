import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import gql from 'graphql-tag'
import { Repository } from '~/repository/repository'
import { User } from '~/finder-protocol-buffers/ts/user_pb'
import { CreateUserReq } from '../finder-protocol-buffers/ts/user_pb'

export const UserRepositoryClient = Symbol('userRepositoryClient')

export interface UserRepositoryInterface {
  GetUsers: () => Promise<User.AsObject[]>
  getUserByUid: (uid: string) => Promise<User.AsObject>
  createUser: (user: CreateUserReq.AsObject) => Promise<User.AsObject>
}

export class UserRepository extends Repository implements UserRepositoryInterface {
  constructor(axios: NuxtAxiosInstance) {
    super(axios)
  }

  async GetUsers(): Promise<User.AsObject[]> {
    const response = await this.axios.get(`/users`)
    return response.data.users

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
  async getUserByUid(uid: string): Promise<User.AsObject> {
    const response = await this.axios.get(`/users/${uid}`)
    return response.data.user
  }
  async createUser(user: CreateUserReq.AsObject): Promise<User.AsObject> {
    const response = await this.axios.post('/users', user)
    return response.data.user
  }
}