import { ApolloResult } from "../../types/apollo";
import { ApolloQueryResult, FetchResult } from "@apollo/client";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export interface CreateUser extends User {
  password: string;
}

export type LogInUser = Omit<CreateUser, 'id' | 'name' | 'username'>;

export interface AuthUser {
  user: User;
  auth: string;
}

export interface AuthContextProps {
  user: ApolloResult<User>;
  auth: string | null;
  signIn: (payload: LogInUser) => Promise<ApolloQueryResult<{
    authenticateUser: AuthUser;
  }>>;
  signUp: (variables: CreateUser) => Promise<FetchResult<{
    createUser: AuthUser;
  }>>
  signOut: () => void;
}