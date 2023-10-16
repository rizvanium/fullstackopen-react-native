import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryList/RepositoryItem';
import Text from './Text';
import { useParams } from 'react-router-native';

const RepositoryDetails = () => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
  });

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

  return (
    <View>
      <RepositoryItem item={data.repository} showDetails={true} />
    </View>
  );
};

export default RepositoryDetails;
