import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { queryKeys } from "../../contants/react-query.ts";
import { User } from "../../domains/users/models/Users.ts";
import { useRepositories } from "../../contexts/RepositoryContext.tsx";

export const useUsers = (): UseQueryResult<{ data: User[] } | undefined> => {
  const { userRepository } = useRepositories();
  return useQuery({
    queryKey: [queryKeys.users],
    queryFn: userRepository.fetchUsers,
  });
};
