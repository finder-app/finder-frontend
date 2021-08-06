import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
import { Repository } from '~/repository/repository'
import { User } from '~/finder-protocol-buffers/ts/user_pb'
import { GetProfileRes, UpdateProfileRes } from '~/finder-protocol-buffers/ts/profile_pb'

export class ProfileRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
    super(axios, apollo)
  }

  getProfile(): Promise<GetProfileRes> {
    return this.axios.get(`/profile`)
  }

  updateProfile(user: User.AsObject): Promise<UpdateProfileRes> {
    return this.axios.put(`/profile`, user)
  }
}