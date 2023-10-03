import { gql } from '@apollo/client';

export const AUTH_USER_QUERY = gql`
  query AuthenticateUser($password: String!, $email: String!) {
    authenticateUser(password: $password, email: $email) {
      auth
      user {
        id
        name
        email
        username
      }
    }
  }
`;

export const REFRESH_TOKEN_QUERY = gql`
  query RefreshUserToken {
    refreshUserToken {
      auth
      user {
        id
        name
        email
        username
      }
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($newUser: NewUser!) {
    createUser(newUser: $newUser) {
      auth
      user {
        id,
        name,
        email,
        username
      }
    }
}
`;
