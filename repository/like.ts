import { AxiosInstance } from 'axios'
import { ApolloClient } from 'apollo-client'
import { Repository } from '~/repository/repository'
import { Like } from '~/pb/like_pb'

export class LikeRepository extends Repository {
  constructor(axios: AxiosInstance, apollo: ApolloClient<any>) {
    super(axios, apollo)
  }

  createLike(userUid: string): Promise<Like.AsObject> {
    return this.axios.post(`/users/${userUid}/likes`)
  }
}