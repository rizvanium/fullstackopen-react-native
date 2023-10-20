import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (searchKeyword, sortingParams) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { first: 4, ...sortingParams, searchKeyword },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && !error && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        first: 2,
        after: data.repositories.pageInfo.endCursor,
        ...sortingParams,
        searchKeyword,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    error,
  };
};

export default useRepositories;
