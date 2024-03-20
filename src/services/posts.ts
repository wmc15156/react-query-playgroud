import { Post } from "../domains/posts/models/Posts.ts";

export const fetchPosts = async (page = 1): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchPostDetail = async (postId: number): Promise<Post> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  return res.json();
};
