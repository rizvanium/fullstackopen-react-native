import { Pressable, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryList/RepositoryItem';
import Text from './Text';
import theme from '../theme';
import { useParams } from 'react-router-native';
import PrimaryButton from './PrimaryButton';

const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    marginLeft: 10,
    color: theme.colors.error,
  },
});

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
      <RepositoryItem item={data.repository} />
      <PrimaryButton text="Open in Github" />
    </View>
  );
};

export default RepositoryDetails;
