import { NuxtAxiosInstance } from '@nuxtjs/axios'

import { Repository } from '~/repository/repository'
import { Like } from '~/finder-protocol-buffers/ts/like_pb'

export class LikeRepository extends Repository {
  constructor(axios: NuxtAxiosInstance) {
    super(axios)
  }

  createLike(userUid: string) {
    return this.axios.post(`/users/${userUid}/likes`)
  }

  getOldestLike(): Promise<Like.AsObject> {
    return this.axios.get(`/likes`)
  }

  skip(sentUserUid: string): Promise<Like.AsObject> {
    return this.axios.put(`/likes/${sentUserUid}/skip`)
  }

  consent(sentUserUid: string): Promise<Like.AsObject> {
    return this.axios.put(`/likes/${sentUserUid}/consent`)
  }
}