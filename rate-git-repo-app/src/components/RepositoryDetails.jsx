import { View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryList/RepositoryItem';
import Text from './Text';
import theme from '../theme';
import { useParams } from 'react-router-native';
import PrimaryButton from './PrimaryButton';
import * as Linking from 'expo-linking';

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

  const openGithubRepo = () => Linking.openURL(data.repository.url);

  return (
    <View>
      <RepositoryItem item={data.repository} />
      <PrimaryButton text="Open in Github" onPress={openGithubRepo} />
    </View>
  );
};

export default RepositoryDetails;
