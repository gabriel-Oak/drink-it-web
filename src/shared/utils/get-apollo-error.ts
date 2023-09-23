import { ApolloError } from "@apollo/client";

const getApolloError = (err: ApolloError) => {
  const { networkError, message } = err as ApolloError & {
    networkError: {
      result: {
        errors: Array<{ message: string }>;
      } | string;
    }
  };

  if (typeof networkError?.result !== 'string'
    && Array.isArray(networkError?.result.errors)) {
    return networkError?.result.errors[0]?.message || message;
  }

  return message;
}

export default getApolloError;
