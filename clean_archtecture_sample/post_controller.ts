import { Post } from './post';
import { PostUsecaseInterface, PostUsecase } from './post_usecase';

export class PostController {
  protected readonly postUsecase: PostUsecaseInterface

  constructor(postUsecase: PostUsecase) {
    this.postUsecase = postUsecase
  }

  public async getPostList(): Promise<Post[]> {
    return this.postUsecase.getPostList()
  }
}