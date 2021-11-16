import { Post } from './post';
import { PostRepositoryInterface } from './post_repository';

export interface PostUsecaseInterface {
  getPostList(): Promise<Post[]>
  // getPostById(id: number): Promise<Post>
}

export class PostUsecase {
  protected readonly postRepository: PostRepositoryInterface

  constructor(postRepository: PostRepositoryInterface) {
    this.postRepository = postRepository
  }

  public async getPostList(): Promise<Post[]> {
    const posts = this.postRepository.getPostList()
    const post = this.postRepository.getPostById(11111)
    console.log('post', post)
    return posts
  }
}