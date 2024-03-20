import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../contants/react-query.ts";
import { IPostRepository } from "../../../domains/posts/repositories/IPostRepository.ts";

export const usePosts = (postRepository: IPostRepository) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKeys.posts],
    queryFn: ({ pageParam }) => postRepository.fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.length) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
  return { data, fetchNextPage, hasNextPage };
};
