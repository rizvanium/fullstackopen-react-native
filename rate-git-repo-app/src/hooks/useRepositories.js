import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (searchKeyword, sortingParams) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...sortingParams, searchKeyword },
  });

  return {
    repositories: data?.repositories,
    loading,
    error,
  };
};

export default useRepositories;
