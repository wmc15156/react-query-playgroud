import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "../../contants/react-query.ts";
import { fetchPosts } from "../../services/posts.ts";

export const usePosts = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKeys.posts],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
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
