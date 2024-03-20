import { Post } from "../models/Post.ts";

export interface IPostRepository {
  fetchPosts(page: number): Promise<Post[]>;
  fetchPostDetail(postId: number): Promise<Post>;
}
