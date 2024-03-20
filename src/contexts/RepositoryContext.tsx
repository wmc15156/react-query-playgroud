import React, { createContext, useContext } from "react";
import { UserRepository } from "../domains/users/repositores/UserRepository.ts";
import { PostRepository } from "../domains/posts/repositories/PostRepository.ts";

const repositoryInstances = {
  postRepository: new PostRepository(),
  userRepository: new UserRepository(),
};

const RepositoryContext = createContext(repositoryInstances);
interface RepositoryProviderProps {
  children: React.ReactNode;
}
export const RepositoryProvider: React.FC<RepositoryProviderProps> = ({
  children,
}) => {
  return (
    <RepositoryContext.Provider value={repositoryInstances}>
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepositories = () => {
  return useContext(RepositoryContext);
};
