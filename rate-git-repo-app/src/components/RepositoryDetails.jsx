import { View, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryList/RepositoryItem';
import ItemSeparator from './ItemSeparator';
import Review from './Review';
import Text from './Text';

const RepositoryInfo = ({ item }) => {
  return (
    <View>
      <RepositoryItem item={item} showDetails={true} />
      <ItemSeparator />
    </View>
  );
};

const RepositoryDetails = () => {
  let { id } = useParams();

  const { data, fetchMore, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: id, first: 4 },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && !error && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        repositoryId: id,
        first: 2,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  if (loading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const reviews = data.repository.reviews
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={Review}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={() => <RepositoryInfo item={data.repository} />}
      />
    </View>
  );
};

export default RepositoryDetails;
