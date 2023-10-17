import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import { useAuthStorage } from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useCreateUser = () => {
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  const [authenticate, result] = useMutation(CREATE_USER);

  const create = async ({ username, password }) => {
    const response = await authenticate({
      variables: { user: { username, password } },
    });

    return response;
  };

  return [create, result];
};

export default useCreateUser;
