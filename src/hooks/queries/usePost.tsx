import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../contants/react-query.ts";
import { fetchPostDetail } from "../../services/posts.ts";

export const usePostDetail = (postId: number) => {
  const { data: post, isLoading } = useQuery({
    queryKey: [queryKeys.posts, postId],
    queryFn: () => fetchPostDetail(postId),
    select: (data) => {
      console.log("prefetch");
      return data;
    },
    staleTime: 60000,
  });
  return { post, isLoading };
};

export const usePrefetchPostDetail = (postId: number) => {
  const queryClient = useQueryClient();

  const prefetchPostDetail = async () => {
    await queryClient.prefetchQuery({
      queryKey: [queryKeys.posts, postId],
      queryFn: () => fetchPostDetail(postId),

      // staleTime: 100000,
    });
  };

  return prefetchPostDetail;
};
