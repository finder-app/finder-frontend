import { AxiosInstance } from 'axios'
// import gql from 'graphql-tag'
import { Repository } from '~/repository/repository'
import { User } from '~/finder-protocol-buffers/ts/user_pb'

interface UserRepositoryInterface {
  GetUsers: () => Promise<User.AsObject[]>
  getUserByUid: (uid: string) => Promise<User.AsObject>
  createUser: (user: User.AsObject) => Promise<User.AsObject>
}

export class UserRepository extends Repository implements UserRepositoryInterface {
  constructor(axios: AxiosInstance) {
    super(axios)
  }

  GetUsers(): Promise<User.AsObject[]> {
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
  getUserByUid(uid: string): Promise<User.AsObject> {
    return this.axios.get(`/users/${uid}`)
  }
  createUser(user: User.AsObject): Promise<User.AsObject> {
    return this.axios.post('/users', user)
  }
}