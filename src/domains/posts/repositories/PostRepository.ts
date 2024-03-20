import { Post } from "../models/Posts.ts";
import { IPostRepository } from "./IPostRepository.ts";

export class PostRepository implements IPostRepository {
  async fetchPosts(page = 1): Promise<Post[]> {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  }
  async fetchPostDetail(postId: number): Promise<Post> {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    return res.json();
  }
}
