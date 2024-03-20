import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../contants/react-query.ts";

import { useRepositories } from "../../../contexts/RepositoryContext.tsx";
import { User } from "../../../domains/users/models/Users.ts";

export const usePostDetail = (postId: number) => {
  const { postRepository } = useRepositories();
  const { data: post, isLoading } = useQuery({
    queryKey: [queryKeys.posts, postId],
    queryFn: () => postRepository.fetchPostDetail(postId),
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
  const { postRepository } = useRepositories();

  const prefetchPostDetail = async () => {
    await queryClient.prefetchQuery({
      queryKey: [queryKeys.posts, postId],
      queryFn: () => postRepository.fetchPostDetail(postId),

      // staleTime: 100000,
    });
  };

  return prefetchPostDetail;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { userRepository } = useRepositories();
  const { mutate } = useMutation({
    mutationFn: async (params: { userId: number; userData: User }) => {
      return await userRepository.updateUser(params.userId, params.userData);
    },
    onMutate: async ({
      userId,
      userData,
    }: {
      userId: number;
      userData: User;
    }) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: [queryKeys.users] });
      const previousUsers = queryClient.getQueryData([queryKeys.users]);
      queryClient.setQueryData<{ data: User[] }>([queryKeys.users], (old) => {
        if (!old || !old.data) {
          return { data: [] };
        }

        const newData = old.data.map((user) =>
          user.id === userId ? { ...user, ...userData } : user,
        );

        return { data: newData };
      });

      return { previousUsers };
    },
    onError: (error, __, context) => {
      console.log("err", error);
      queryClient.setQueryData([queryKeys.users], context?.previousUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.users] });
    },
  });

  return { mutate };
};
