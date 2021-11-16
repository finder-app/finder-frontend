import { Post } from './post';
import { AxiosInstance } from 'axios'

export interface PostRepositoryInterface {
  getPostList(): Promise<Post[]>
  getPostById(id: number): Promise<Post>
}

export class PostRepository {
  private readonly axios: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.axios = axios
  }

  public async getPostList(): Promise<Post[]> {
    console.log('this.axios.defaults', this.axios.defaults)
    return [
      {
        id: 1,
        title: 'Hello world',
      }
    ]
  }

  public async getPostById(id: number): Promise<Post> {
    return {
      id: id,
      title: 'Hello world',
    }
  }
}