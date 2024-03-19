import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { queryKeys } from "../../contants/react-query.ts";
import { fetchUsers } from "../../services/users.ts";
import { User } from "../../models/Users.ts";

export const useUsers = (): UseQueryResult<{ data: User[] } | undefined> => {
  return useQuery({
    queryKey: [queryKeys.users],
    queryFn: fetchUsers,
  });
};
