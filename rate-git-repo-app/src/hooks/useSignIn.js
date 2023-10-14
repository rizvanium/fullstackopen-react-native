import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import { useAuthStorage } from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  const [authenticate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const response = await authenticate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(response.data?.authenticate?.accessToken);
    client.resetStore();
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
