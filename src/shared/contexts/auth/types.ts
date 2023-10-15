import { ApolloResult } from "../../types/apollo";
import { ApolloError, ApolloQueryResult, FetchResult } from "@apollo/client";

export interface User {
  id: string;
  name: string;
  email: string;
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
  singInDialog: boolean;
  singUpDialog: boolean;
  setSingInDialog: (value: boolean) => void;
  setSingUpDialog: (value: boolean) => void;
  signIn: (variables: LogInUser) => void;
  signUp: (variables: CreateUser) => Promise<FetchResult<{
    createUser: AuthUser;
  }>>
  signOut: () => void;
  setError: (value: ApolloError | undefined) => void;
}